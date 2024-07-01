import React, { useState } from 'react';
import './SearchForm.css'; // Assuming you have some basic styles in App.css or similar

const PropertyFilter = () => {
  const [propertyType, setPropertyType] = useState('Дом');
  const [dimensions, setDimensions] = useState('10x10');
  const [areaRange, setAreaRange] = useState([100, 1000]);
  const [costRange, setCostRange] = useState([100000, 1000000]);

  const handleAreaChange = (event, index) => {
    const newRange = [...areaRange];
    newRange[index] = Number(event.target.value);
    setAreaRange(newRange);
  };

  const handleCostChange = (event, index) => {
    const newRange = [...costRange];
    newRange[index] = Number(event.target.value);
    setCostRange(newRange);
  };

  return (
    <div className="property-filter">
      <div className="buttons">
        <button className="build-button active">Построить</button>
        <button className="buy-button">Купить</button>
        <button className="rent-button">Арендовать</button>
      </div>
      <div className="filter-fields">
        <div className="field">
          <label>Тип строения</label>
          <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
            <option value="Дом">Дом</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="field">
          <label>Габариты, м</label>
          <input type="text" value={dimensions} onChange={(e) => setDimensions(e.target.value)} />
        </div>
        <div className="field">
          <label>Общая площадь, м²</label>
          <div className="slider-container">
            <input
              type="range"
              min="100"
              max="1000"
              value={areaRange[0]}
              onChange={(e) => handleAreaChange(e, 0)}
            />
            <input
              type="range"
              min="100"
              max="1000"
              value={areaRange[1]}
              onChange={(e) => handleAreaChange(e, 1)}
            />
            <div>
              от {areaRange[0]} до {areaRange[1]}
            </div>
          </div>
        </div>
        <div className="field">
          <label>Стоимость, ₽</label>
          <div className="slider-container">
            <input
              type="range"
              min="100000"
              max="1000000"
              value={costRange[0]}
              onChange={(e) => handleCostChange(e, 0)}
            />
            <input
              type="range"
              min="100000"
              max="1000000"
              value={costRange[1]}
              onChange={(e) => handleCostChange(e, 1)}
            />
            <div>
              от {costRange[0]} до {costRange[1]}
            </div>
          </div>
        </div>
      </div>
      <button className="select-button">Подобрать</button>
    </div>
  );
};

export default PropertyFilter;
