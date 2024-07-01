import React from 'react';
import './Technology.css';
import img1 from '../../Assets/technology1.jpg'
import img2 from '../../Assets/technology2.jpg'
import img3 from '../../Assets/technology3.jpg'
import img4 from '../../Assets/technology4.jpg'
import img5 from '../../Assets/technology5.jpg'
import img6 from '../../Assets/technology6.jpg'

const technologies = [
  { name: "Клееный брус", imgSrc:  img1 },
  { name: "Лафет", imgSrc:  img2 },
  { name: "Фахверковые", imgSrc:  img3},

  { name: "Каркасные", imgSrc:  img5 },


];

const ConstructionTechnologies = () => {
  return (
    <div className="tech-container">
      <h2>Наше партнёрство</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-item" key={index}>
            <img src={tech.imgSrc} alt={tech.name} className="tech-image"/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ConstructionTechnologies;
