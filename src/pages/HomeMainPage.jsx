import React from 'react'
import '../../'
function HomeMainPage() {
    return (


        <div>
             <div className="container">
      {cards.map(card => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={`House Image ${card.id}`} />
          <div className="card-content">
            <p className="date">{card.date}</p>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link} className="read-more">Читать далее</a>
          </div>
        </div>
      ))}
    </div>

        </div>
    )
}

export default HomeMainPage
