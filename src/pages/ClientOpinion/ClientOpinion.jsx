import React from 'react';
import './ClientOpinion.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

const cards = [
  {
    id: 1,
    videoId: 'NbsC6bo719c',
    title: 'Иван Петров',
    description: 'Отличная работа! Строительство дома прошло быстро и качественно. Очень доволен результатом.',
    link: 's#'
  },
  {
    id: 2,
    videoId: 'L8RraTkxC6s',
    title: 'Алексей Иванов',
    description: 'Проектирование и строительство коттеджа прошло на высшем уровне. Приятно работать с такими профессионалами.',
    link: 's#'
  },
  {
    id: 3,
    videoId: 'x_EyL00hD80',
    title: 'Ольга Смирнова',
    description: 'Благодарю за капитальный ремонт. Качество работ на высоте, буду обращаться снова!',
    link: 's#'
  }
];

const ClientOpinion = () => {
  const navigate = useNavigate();
  const { typehomeurl } = useSelector((state) => state.typelink);

  const videoOptions = {
    height: '340px',
    width: '340px',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='client-opinion' >
      <h1 className='client-opinion-title'>Отзывы наших клиентов</h1>
      <div className='client-opinion-home'>
        <div className="client-opinion-container">
          {cards.map(card => (
            <div className="client-opinion-card" key={card.id} onClick={() => navigate(`/construction-in${typehomeurl}-` + card.link)}>
              <div className="youtube-player-container">
                <YouTube videoId={card.videoId} opts={videoOptions} />
              </div>
              <div className="client-opinion-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientOpinion;
