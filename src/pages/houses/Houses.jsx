// src/HouseGrid.js
import React, { useEffect, useRef, useState } from "react";
import "./houses.css";
import { useNavigate, useParams } from "react-router-dom";
import { houses } from "../../componenets/data/homes.db";
import watermark from "watermarkjs";

const WatermarkedImage = ({ src, watermarkText }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.src = src;
      img.crossOrigin = "Anonymous"; // to avoid CORS issues
      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        watermark([img])
          .image(
            watermark.text.lowerRight(watermarkText, "48px Arial", "#FFF", 0.5)
          )
          .then((imgWithWatermark) => {
            ctx.drawImage(imgWithWatermark, 0, 0);
          });
      };
    };
    loadImage();
  }, [src, watermarkText]);

  return <canvas ref={canvasRef} alt="Watermarked Image" />;
};

const House = ({ url, data = houses }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <div>
      <div className="house-grid-container">
        <div className="house-grid">
          {data.map((house) => (
            <div
              key={house.id}
              className="house-card"
              onClick={() => navigate(`/moreinformation/${house.url}`)}
            >
              <WatermarkedImage
                src={house.image}
                watermarkText="swedstandard.ru"
              />
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-base font-sans">
                <h2 className="text-sm font-semibold mb-2">
                  Дом из {house.exname} К-2003
                </h2>
                <div className="text-3xl font-bold mb-4">6 676 778 ₽</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <i className="fas fa-home pr-2"></i>
                    <span>137 м²</span>
                  </div>
                  <div className="">
                    <i className="fas fa-bed  pr-2"></i>
                    <span>3 спальни</span>
                  </div>
                  <div className="">
                    <i className="fas fa-layer-group  pr-2"></i>
                    <span>1 этаж</span>
                  </div>
                  <div className="">
                    <i className="fas fa-ruler-combined  pr-2"></i>
                    <span>9x15</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <span>...</span>
          <button>15</button>
        </div>
        <button className="filter-button">Расширенный фильтр</button>
      </div>
    </div>
  );
};

export default House;
