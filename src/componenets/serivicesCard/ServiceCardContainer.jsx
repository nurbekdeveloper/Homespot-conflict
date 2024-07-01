import React from 'react';
import FoundationCard from './ServiceCard';
import './ServiceCardContainer.css';
import { cardData } from '../data/Data';



const ServiceCardContainer = () => {
    return (
        <div className="foundation-card-container">
            {cardData.map((card, index) => (
                <FoundationCard
                    url={card.url}
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    price={card.price}
                    buttonText={card.buttonText}
                />
            ))}
        </div>
    );
};

export default ServiceCardContainer;
