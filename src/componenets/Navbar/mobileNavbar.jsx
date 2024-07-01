import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../pages/redux/slice/modal.slice';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from 'react-icons/ai';
import { GrNext, GrPrevious } from "react-icons/gr";
import logo from "../../Assets/Logo.png";
import "./mobileNavbar.css";

const Resnav = () => {
    const [firstnav, setFirstnav] = useState(false);
    const [constructionNav, setConstructionNav] = useState(false);
    const [serviceNav, setServiceNav] = useState(false);

    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const handleConstructionClick = () => {
        setConstructionNav(true);
        setServiceNav(false);
    };

    const handleServiceClick = () => {
        setServiceNav(true);
        setConstructionNav(false);
    };

    const hideDropdown = () => {
        setFirstnav(false);
        setConstructionNav(false);
        setServiceNav(false);
    };

    return (
        <div className='resnav'>
            <div className='nav-header'>
                <div className='resnav-logo'>
                    <Link to={"/"}><img src={logo} alt="logo" /></Link>
                </div>
                <div className='resnav-icon' onClick={() => setFirstnav(prev => !prev)}>
                    {firstnav ? <AiOutlineClose /> : <FaBars />}
                </div>
            </div>
            <div className={`first-nav ${firstnav ? "close" : ""}`}>
                <Link to={"/"} onClick={hideDropdown} className={`${(pathname === "/") ? "active" : "nav-item"}`}>Главная</Link>
                <Link className='nav-mebel' onClick={handleConstructionClick} id={(pathname === "construction") ? "active" : ""}>
                    <div>Строительство</div>
                    <div><GrNext /></div>
                </Link>
                <Link className='nav-mebel-2 nav-mebel' onClick={handleServiceClick} id={(pathname === "service") ? "active" : ""}>
                    <div>Наши Услуги</div>
                    <div><GrNext /></div>
                </Link>
                <Link to={"/design"} onClick={hideDropdown} className={`${(pathname === "/design") ? "active" : "nav-item"}`}>Проектирование</Link>
                <Link to={"/about"} onClick={hideDropdown} className={`${(pathname === "/about") ? "active" : "nav-item"}`}>О нас</Link>
                <Link to={"/project"} onClick={hideDropdown} className={`${(pathname === "/project") ? "active" : "nav-item"}`}>Наши работы</Link>
                <Link to={"/contact"} onClick={hideDropdown} className={`${(pathname === "/contact") ? "active" : "nav-item"}`}>Контакты</Link>
                <a className='resnav-phone' href='tel:+998712357447'>
                    <p>+7 <span>(920) 926 07 07</span></p>
                </a>
                <button className='mobile1-button' onClick={() => { hideDropdown(); dispatch(changeModal(true)); }}>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
            <div className={`second-nav ${constructionNav && firstnav ? "" : "close"}`}>
                <div className='sec-nav-mebel' onClick={() => setConstructionNav(false)}>
                    <div><GrPrevious /></div>
                    <div>Мебель</div>
                </div>
                <Link className='sec-nav-item' to={"/construction/home"} onClick={hideDropdown}>Домов</Link>
                <Link className='sec-nav-item' to={"/construction/awnings"} onClick={hideDropdown}>Тини хаус</Link>
                <Link className='sec-nav-item' to={"/construction/baths"} onClick={hideDropdown}>Бани</Link>
                <Link className='sec-nav-item' to={"/construction/garages"} onClick={hideDropdown}>Гаражи/Навесы</Link>
                <Link className='sec-nav-item' to={"/construction/communal-objects"} onClick={hideDropdown}>Комм. объекты</Link>
            </div>
            <div className={`second-nav ${serviceNav && firstnav ? "" : "close"}`}>
                <div className='sec-nav-mebel' onClick={() => setServiceNav(false)}>
                    <div><GrPrevious /></div>
                </div>
                <Link className='sec-nav-item' to={"services/lentochiy-fundament"} onClick={hideDropdown}>Монтаж фундамента</Link>
                <Link className='sec-nav-item' to={"services/monolitnaya-plita"} onClick={hideDropdown}>Кровельные работы</Link>
                <Link className='sec-nav-item' to={"services/Sborno-blochniy-fundament"} onClick={hideDropdown}>Наружная Отделка Дома</Link>
                <Link className='sec-nav-item' to={"services/svayno-rostverkoviy-fundament"} onClick={hideDropdown}>Внутренняя отделка дома</Link>
            </div>
        </div>
    );
}

export default Resnav;
