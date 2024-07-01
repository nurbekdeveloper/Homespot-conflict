import React, { useEffect, useState } from 'react';
//style
import "./defaultNavbar.css";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../Assets/Logo.png";
//router
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeModal } from '../../pages/redux/slice/modal.slice';

const Navbar = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [dropdown, setDropDown] = useState(true);
  const [dropdown2, setDropDown2] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
    setDropDown(true);
    setDropDown2(true);
  };

  const handleClick = () => {
    setDropDown(true);
    setDropDown2(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const changeSlug = () => {
    setDropDown(true);
    setDropDown2(true);
  };

  const hideDropdown = () => {
    setDropDown(true);
    setDropDown2(true);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropDown(prev => !prev);
  };

  const toggleDropdown2 = (e) => {
    e.stopPropagation();
    setDropDown2(prev => !prev);
  };

  const { pathname } = useLocation();

  return (
    <div className={`navbar ${show ? 'navbar_scrolled' : ''}`}>
      <div className="nav">
        <div className='navbar_logo'>
          <Link to={'/'}><img src={logo} alt="logo" /></Link>
        </div>
        <div className='navbar_nav'>
          <Link to={"/"} onClick={hideDropdown} className={`${pathname === "/" ? "active" : "navbar_link"}`}>Главная</Link>
          <div id='dropdown' className={`${pathname === "construction" ? "active" : "navbar_link"}`}>
            <Link to={"/construction"} onClick={hideDropdown}>Строительство</Link>
            &nbsp; <i onClick={toggleDropdown}><BsChevronDown /></i>
          </div>
          <div id='dropdown' className={`${pathname === "/services" ? "active" : "navbar_link"}`}>
            <Link to={"/services"} onClick={hideDropdown}>Наши Услуги</Link>
            &nbsp; <i onClick={toggleDropdown2}><BsChevronDown /></i>
          </div>
          <Link to={"/design"} onClick={hideDropdown} className={`${pathname === "/design" ? "active" : "navbar_link"}`}>Проектирование</Link>
          <Link to={"/about"} onClick={hideDropdown} className={`${pathname === "/about" ? "active" : "navbar_link"}`}>О Нас</Link>
          <Link to={"/project"} onClick={hideDropdown} className={`${pathname === "/project" ? "active" : "navbar_link"}`}>Наши работы</Link>
          <Link to={"/contact"} onClick={hideDropdown} className={`${pathname === "/contact" ? "active" : "navbar_link"}`}>Контакты</Link>
        </div>
        <a href='tel:+998712357447' className='navbar_phone'>
          <p>+7 <span>(920) 926 07 07</span></p>
        </a>
        <button className='mobile-button' onClick={() => dispatch(changeModal(true))}>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>
      <div className={`dropdown ${dropdown ? 'open' : ''}`}>
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/construction/home"} onClick={changeSlug}>Домов</Link></div>
          <div className='nav_item_link'><Link to={"construction/awnings"} onClick={changeSlug}>Тини хаус</Link></div>
          <div className='nav_item_link'><Link to={"/construction/baths"} onClick={changeSlug}>Бани</Link></div>
        </div>
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"/construction/garages"} onClick={changeSlug}>Гаражи/Навесы</Link></div>
          <div className='nav_item_link'><Link to={"/construction/communal-objects"} onClick={changeSlug}>Комм. объекты</Link></div>
        </div>
      </div>
      <div className={`dropdown ${dropdown2 ? 'open' : ''}`}>
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"services/lentochiy-fundament"} onClick={changeSlug}>Монтаж фундамента</Link></div>
          <div className='nav_item_link'><Link to={"services/monolitnaya-plita"} onClick={changeSlug}>Кровельные работы</Link></div>
          <div className='nav_item_link'><Link to={"services/Sborno-blochniy-fundament"} onClick={changeSlug}>Наружная Отделка Дома</Link></div>
        </div>
        <div className='nav_item'>
          <div className='nav_item_link'><Link to={"services/svayno-rostverkoviy-fundament"} onClick={changeSlug}>Внутренняя отделка дома</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
