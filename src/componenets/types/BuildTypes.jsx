// src/BuildingTypes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUrl } from '../../pages/redux/slice/typehome.slice';
import houseImg from '../../Assets/img1.png';
import bathImg from '../../Assets/img2.png';
import garageImg from '../../Assets/img3.png';
import shedImg from '../../Assets/img4.png';
import commercialImg from '../../Assets/img5.png';

const buildingTypes = [
    { image: houseImg, count: 358, title: 'Дома', url: '/home' },
    { image: bathImg, count: 178, title: 'Тини хаус', url: '/tiny-house' },
    { image: garageImg, count: 152, title: 'Бани', url: '/bathroom' },
    { image: shedImg, count: 152, title: 'Гаражи/Навесы', url: '/garaj' },
    { image: commercialImg, count: 205, title: 'Комм. объекты', url: '/komunal-obyekts' },
];

const BuildingTypes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeTypeUrl = (url) => {
        navigate('/construction' + url);
        dispatch(changeUrl(url));
    };

    return (
        <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center my-4">Добро пожаловать на наш сайт!</h3>
            <p className="text-lg text-center mb-6">
                Мы предлагаем широкий спектр строительных услуг, помогая вам воплотить мечты о собственном доме в реальность. С более чем 15-летним опытом работы в Швеции и России, мы гарантируем высокое качество и надежность каждого проекта.
            </p>

            <div className="flex flex-wrap justify-around">
                {buildingTypes.map((type, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 cursor-pointer transform transition-transform hover:scale-105"
                        onClick={() => changeTypeUrl(type.url)}
                    >
                        <div className="border border-gray-300 rounded-lg overflow-hidden">
                            <img src={type.image} alt={type.title} className="w-full h-auto" />
                            <div className="text-center font-bold text-lg my-2">{type.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuildingTypes;
