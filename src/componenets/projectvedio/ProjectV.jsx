// src/Projects.js
import React from 'react';
import projectImage1 from '../../Assets/projectof.png'; // Ensure the images are in the src folder
import projectImage2 from '../../Assets/projectof3.jpg';
import projectImage3 from '../../Assets/projectof5.jpg';

const ProjectOf = () => {
  const projects = [
    {
      image: projectImage3,
      title: "Экстерьерные работы",
      description: "Мы создаем уникальные и стильные экстерьеры для вашего дома."
    },
    {
      image: projectImage2,
      title: "Строительство домов",
      description: "Полный цикл строительства домов от фундамента до крыши."
    },
    {
      image:  projectImage1,
      title: "Интерьер",
      description: "Индивидуальный дизайн интерьера для вашего комфорта и уюта."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-5 text-center">
      <h1 className="text-2xl mb-5">Наши Проекты</h1>

      <div className="flex flex-wrap gap-5 justify-center mt-24">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs w-full text-left mx-2">
            <img src={project.image} alt={project.title} className="w-full h-auto" />
            <div className="p-4">
              <h2 className="text-xl mb-2 font-semibold text-gray-700">{project.title}</h2>
              <p className="text-base mb-2 text-gray-600">{project.description}</p>
              <span className="text-sm text-gray-700">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOf;
