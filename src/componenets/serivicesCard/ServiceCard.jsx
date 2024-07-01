import React, { useState } from 'react';
import './ServiceCard.css';

import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ image, title, url }) => {
    const [openModal,setOpenModal] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="foundation-card" onClick={()=>navigate('/services'+ url)}>

            <img src={image} alt={title} className="foundation-card-image" />
            <h2>{title}</h2>
        </div>
    );
};

export default ServiceCard ;
