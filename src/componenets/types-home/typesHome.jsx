import React from 'react';
import house1 from "../../Assets/house1.jpg";
import house2 from "../../Assets/house2.jpg";
import house3 from "../../Assets/house3.jpg";
import House from '../../pages/houses/Houses';
import CardContainer from '../project/CardContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { houses } from "../../componenets/data/homes.db";

const cards = [
    {
      id: 1,
      image: house1,
      title: 'Газобетон',
      description: 'Легкость, Теплоизоляция, Звукоизоляция, Простота обработки, Экологичность',
      link: 'gazabeton'
    },
    {
      id: 2,
      image: house2,
      title: 'Кирпич',
      description: 'Эстетика, Устойчивость к погоде, Долговечность, Прочность, Преимущества',
      link: "kirpich"
    },
    {
      id: 3,
      image: house3,
      title: 'Каркасные дома',
      description: 'Преимущества, Быстрое строительство, Экономичность, Гибкость дизайна, Энергоэффективность',
      link: 'karkasniy'
    }
];

const TypesHome = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const newHouses = houses.filter(x => x.type === slug);

  return (
    <div>
      <div className='type__home'>
        <div className="container mx-auto px-4 py-8">
          {slug === "home" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cards.map(card => (
                <div className="card bg-white shadow-md rounded-lg overflow-hidden" key={card.id} onClick={() => navigate(`/construction-in/${card.link}`)}>
                  <img className='houseimg w-full h-48 object-cover' src={card.image} alt={card.title} />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      {slug === "home" ? <House /> : <House data={newHouses} />}
      <CardContainer />
    </div>
  );
}

export default TypesHome;
