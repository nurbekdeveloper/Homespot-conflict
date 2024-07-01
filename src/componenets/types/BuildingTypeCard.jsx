// src/BuildingTypeCard.js
import React from 'react';
import './BuildingTypeCard.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUrl } from '../../pages/redux/slice/typehome.slice';

const BuildingTypeCard = ({ image, count, title,url }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const changeTypeUrl = (url) =>{
        navigate('/construction'+ url)
        dispatch(changeUrl(url))
    }
    return (
        <div className="cardb" onClick={()=>changeTypeUrl(url)}>

            <img src={image} alt={title} className="card-image" />
            <div className="card-title">{title}</div>
        </div>
    );
};

export default BuildingTypeCard;
