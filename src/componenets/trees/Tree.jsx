// Tree.js
import React from 'react';
import './Tree.css'; // Import the CSS file
import treeImage from '../../Assets/Tree.png'; // Adjust the path as necessary

const AdvantageItem = ({ number, title, description }) => {
  return (
    <div className="advantage-item">
      <div className="advantage-number">{number}</div>
      <div className="advantage-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Tree = () => {
  return (
    <div className="advantages-container">
      <div className="advantages-content">
        <h2>Наши преимущества</h2>
        <div className="advantages-list">
          <AdvantageItem number="1" title="Опыт и профессионализм" description=": Более 15 лет успешной работы в строительной отрасли." />

          <AdvantageItem number="2" title="Индивидуальный подход" description="Учет всех ваших пожеланий и потребностей на каждом этапе строительства." />

          <AdvantageItem number="3" title="Высокие стандарты качества" description="Использование передовых технологий и экологически чистых материалов." />

          <AdvantageItem number="4" title="Комплексный подход" description="Выполнение всех работ под ключ, от проектирования до финальной отделки." />

          <AdvantageItem number="5" title="Клиент-ориентированность" description="Мы всегда учитываем ваши пожелания и стремимся превзойти ваши ожидания." />

          <AdvantageItem number="6" title="Энергоэффективность и экологичность" description="Строительство домов с минимальным воздействием на окружающую среду и низкими эксплуатационными расходами." />

        </div>
      </div>
      <div className="tree-container">
        <img src={treeImage} alt="Trees" className="tree-image" />
      </div>
    </div>
  );
};

export default Tree;
