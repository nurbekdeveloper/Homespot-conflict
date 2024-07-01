import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { houses } from "../data/homes.db";
import { useDispatch } from "react-redux";

const CardContainer = () => {
  const navigate = useNavigate();
  const filterReady = houses.filter((r) => r.type === "ready");
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-24  mb-4">
      <h2 className="mb-3 font-semibold text-2xl">
        Наши готовые Проекты
      </h2>
      <p>
        Посмотрите галерею наших завершенных проектов, чтобы вдохновиться и
        выбрать то, что подходит именно вам
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
        {filterReady.map((card, index) => (
          <Link
            to={`/moreinformation/${card.url}`}
            key={index}
            className="block bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-sm font-semibold mb-2">
                Дом из {card.exname} К-2003
              </h2>
              <div className="text-3xl font-bold mb-4">6 676 778 ₽</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <i className="fas fa-home pr-2"></i>
                  <span>137 м²</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-bed pr-2"></i>
                  <span>3</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-layer-group pr-2"></i>
                  <span>1 этаж</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-ruler-combined pr-2"></i>
                  <span>9x15</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
