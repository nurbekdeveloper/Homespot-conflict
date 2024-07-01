// /src/components/AllHouseType.js

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { houses } from "../../componenets/data/homes.db";
import CardContainer from "../../componenets/project/CardContainer";

const AllHouseType = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newData = houses.filter((x) => x.type === slug);

  const drawImageWithText = (house) => {
    const canvas = document.getElementById(`canvas-${house.id}`);
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = house.image;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
      ctx.font = "30px Arial"; // Larger font size
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"; // White with slight transparency for a bolder look
      ctx.textAlign = "center";
      ctx.fillText("swedstandard.ru", canvas.width / 2, canvas.height / 2);
    };
  };

  useEffect(() => {
    newData.forEach((house) => {
      drawImageWithText(house);
    });
  }, [newData]);

  return (
    <div>
      <div className="house-grid-container">
        <div className="house-grid">
          {newData.map((house) => (
            <div
              key={house.id}
              className="house-card"
              onClick={() => navigate(`/moreinformation/${house.url}`)} >
              <canvas id={`canvas-${house.id}`} className="house-image" />

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

      <CardContainer />
    </div>
  );
};

export default AllHouseType;
