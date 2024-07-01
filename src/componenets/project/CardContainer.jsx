import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardContainer.css";
import { houses } from "../data/homes.db";

const CardContainer = () => {
  const navigate = useNavigate();
  const filterReady = houses.filter((r) => r.type === "ready");

  return (
    <div className="card-container-wrapper mt-[100px]">
      <h2 className="title mb-3 font-semibold text-2xl">
        Наши готовые Проекты
      </h2>
      <p>
        Посмотрите галерею наших завершенных проектов, чтобы вдохновиться и
        выбрать то, что подходит именно вам
      </p>
      <div className="card-container">
        {filterReady.map((card, index) => (
          <div
            key={index}
            className="card-ready mt-[60px]"
            onClick={() => navigate(`moreinformation/${card.url}`)}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-base font-sans">
              <h2 className="text-sm font-semibold mb-2">
                Дом из {card.exname} К-2003
              </h2>
              <div className="text-3xl font-bold mb-4">6 676 778 ₽</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <i className="fas fa-home pr-2"></i>
                  <span>137 м²</span>
                </div>
                <div className="">
                  <i className="fas fa-bed  pr-2"></i>
                  <span>3 </span>
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
    </div>
  );
};

export default CardContainer;
