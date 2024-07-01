// File: src/components/ProfileCard.js
import YouTube from 'react-youtube';
import React from 'react';
import './worker.css';

// Make sure to place the image in the correct path

import image from '../../Assets/projectof1.png';
import image1 from '../../Assets/projectof2.jpg';

import Icon from '../../Assets/Icon.webp';
import ProjectOf from '../../componenets/projectvedio/ProjectV';
import CardContainer from '../../componenets/project/CardContainer';
import ClientOpinion from '../ClientOpinion/ClientOpinion';
import ContactForm from '../../componenets/form/ContactForm';
import { useDispatch } from 'react-redux';
import { changeModal } from '../redux/slice/modal.slice';


const Worker = () => {
  const dispatch = useDispatch();
  const videoOptions = {
    height: '300',
    width: '390',
    playerVars: {

    },
  };


  return (
    <div>
       <h1 className='title'><b>Проектирование домов</b></h1>

<div className="design-studio-container">
  <div className="description-section">
    <p>
      Наше  основано на богатом опыте практикующих строителей. Мы понимаем важность экономической эффективности и избегаем неоправданных затрат. Наша команда проектировщиков и инженеров тщательно анализирует все конструктивные решения, чтобы обеспечить их практичность и доступность. Мы избегаем сложных и дорогих элементов, которые часто включаются в проекты без учета их реальной стоимости. Наш подход позволяет вам получить качественный и надежный дом без переплат за ненужные архитектурные излишества.
    </p>
    <button className='zakas' onClick={() => dispatch(changeModal(true))}>Заказать</button>
  </div>
  <div className="image-section">
    <img src={image} alt="Interior Design" />
  </div>
</div>

<div className="design-studio-container">
  <div className="image-section">
    <img src={image1} alt="Interior Design" />
  </div>
  <div className="description-section">
    <h3><b>Архитектурное решение (АР)</b></h3>
    <p>
      АР — альбом архитектурных решений, который подходит для возведения небольших типовых строений со стандартными инженерными решениями. Он включает в себя планировочные решения без сложных элементов, таких как эркеры, балконы или большие пролеты. Фундамент в таких проектах — исключительно монолитная плита, а кровля — двускатная или стандартная вальмовая.
    </p>
    <h3><b>Что входит в состав документации:</b></h3>
    <ul>
      <li><b>Титульный лист:</b> Основная информация о проекте, включая название, адрес объекта, данные заказчика и исполнителя, а также перечень всех разделов документации.</li>
      <li><b>Общие данные:</b> Введение, описание проекта, цели и задачи, нормативные документы и требования, использованные в проектировании, а также общие характеристики здания.</li>
      <li><b>Схема планировочной :</b>организации земельного участка: Детализированная схема участка, включающая размещение здания, инженерных коммуникаций, подъездных путей, зеленых зон и других элементов. Это помогает обеспечить оптимальную организацию пространства и удобство эксплуатации.</li>
    </ul>
    <p>Кроме этого, проектная документация может включать дополнительные разделы в зависимости от конкретных требований и особенностей проекта.</p>
    <button className='zakas' onClick={() => dispatch(changeModal(true))}>Заказать</button>
  </div>
</div>

<div className="design-studio-container mx-auto max-w-screen-lg p-4">
      <div className="description-section mb-6 lg:mb-0 lg:w-2/3 lg:pr-6">
        <h3 className="text-xl font-bold mb-4">3D Визуализация проекта</h3>
        <p className="mb-4">
          3D визуализация — это процесс создания на компьютере трехмерной модели будущего дома. Она позволяет представить реалистичную модель пространства или здания, точно отражающую проектный замысел, еще до начала строительства. С помощью 3D визуализации вы можете увидеть будущий дом в деталях, оценить его внешний вид, планировку и интерьерные решения. Это поможет внести необходимые изменения и улучшения на этапе проектирования, что значительно сэкономит время и ресурсы в дальнейшем.
        </p>
        <h3 className="text-xl font-bold mb-2">Что входит в 3D визуализацию:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2"><b>Экстерьер:</b> Визуализация внешнего вида дома, включая фасады, кровлю, окна и двери, а также окружающую территорию</li>
          <li className="mb-2"><b>Интерьер:</b> Визуализация внутренних помещений, включая мебель, отделочные материалы и цветовые решения.</li>
          <li className="mb-2"><b>Планировка:</b> Детальное представление планировочных решений, позволяющее оценить удобство и функциональность помещений.</li>
          <li className="mb-2"><b>Освещение:</b> Визуализация дневного и ночного освещения, позволяющая понять, как свет будет распределяться в пространстве.</li>
        </ul>
        <h3 className="text-xl font-bold mb-2">Преимущества 3D визуализации:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2"><b>Реалистичное представление:</b> Точная и детализированная модель, которая поможет вам лучше понять, как будет выглядеть ваш будущий дом.</li>
          <li className="mb-2"><b>Внесение изменений на этапе проектирования:</b> Возможность корректировки проекта до начала строительства, что поможет избежать ошибок и дополнительных затрат.</li>
          <li className="mb-2"><b>Удобство презентации:</b> Легко демонстрировать проект другим участникам, включая членов семьи, инвесторов или подрядчиков.</li>
        </ul>
        <p className="mb-4">Стоимость 3D визуализации проекта начинается от 18 500 ₽.</p>
        <button
          className="zakas bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => dispatch(changeModal(true))}
        >
          Заказать
        </button>
      </div>
      <div className="image-section lg:w-1/3">
        <div className="aspect-w-16 aspect-h-9">
          <YouTube videoId="NbsC6bo719c" opts={videoOptions} className="w-full h-full" />
        </div>
      </div>
    </div>

<div className="awards-container">
  <div className="awards-column">
    <div className="award-item">
      <img src={Icon} alt="Award" className="award-icon" />
      <p><b>Индивидуальный подход:</b> Мы разрабатываем уникальные проекты, ориентируясь на ваши пожелания и потребности. Каждое решение адаптируется к вашим уникальным требованиям.</p>
    </div>
    <div className="award-item">
      <img src={Icon} alt="Award" className="award-icon" />
      <p><b>Высокое качество:</b> Используем последние технологии и надежные материалы.</p>
    </div>
  </div>
  <div className="awards-column">
    <div className="award-item">
      <img src={Icon} alt="Award" className="award-icon" />
      <p><b>Четкие сроки:</b> Гарантируем соблюдение всех установленных сроков</p>
    </div>
    <div className="award-item">
      <img src={Icon} alt="Award" className="award-icon" />
      <p><b>Оптимизация затрат:</b> Мы всегда находим самые выгодные решения для вашего бюджета.</p>
    </div>
  </div>
</div>

      <ProjectOf />
      <CardContainer />
      <ClientOpinion />
      <ContactForm />
    </div>
  );
}

export default Worker;
