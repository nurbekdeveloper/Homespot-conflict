// src/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faVk, faFacebook, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <p>ООО «Шведстандард»</p>
          <p>ИНН: 7814791926</p>
          <p>ОГРН: 121080007624</p>
          <p>Сервис Шведстандард</p>
        </div>
        <div className="footer-column">
          <p><Link to="/">Главная</Link></p>
          <p><Link to="/construction">Строительство</Link></p>
          <p><Link to="/services">Наши Услуги</Link></p>
          <p><Link to="/design">Проектирование</Link></p>
          <p><Link to="/about">О Нас</Link></p>
          <p><Link to="/project">Наши Работы</Link></p>
          <p><Link to="/contacts">Контакты</Link></p>
        </div>
        <div className="footer-column">
          <p><Link to="/services/lentochiy-fundament">Монтаж фундамента</Link></p>
          <p><Link to="/services/monolitnaya-plita">Кровельные работы</Link></p>
          <p><Link to="/services/Sborno-blochniy-fundament">Наружная отделка дома</Link></p>
          <p><Link to="/services/svayno-rostverkoviy-fundament">Внутренняя отделка дома</Link></p>
          <p><Link to="/about">Домов</Link></p>
          <p><Link to="/project">Тини хаус</Link></p>
          <p><Link to="/garages">Гаражи/Навесы</Link></p>
        </div>
        <div className="footer-column">
          <h3>Шведстандарт</h3>
          <p>+7(920) 926 07 07</p>
          <a href="tel:+79011410860">+7(901) 141-08-60 (WhatsApp)</a>
          <a href="tel:88003015051">Заказать обратный звонок</a>
          <a href="mailto:info@swedstandard.ru">info@swedstandard.ru</a>
          <p>г. Владимир, Большая Нижегородская улица, 27</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons flex justify-center space-x-4 mb-4">
          <a href="https://t.me/yourtelegram" className="text-blue-500 text-2xl"><FontAwesomeIcon icon={faTelegram} /></a>
          <a href="https://www.instagram.com/yourinstagram" className="text-pink-500 text-2xl"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://vk.com/swedstandard" className="text-blue-700 text-2xl"><FontAwesomeIcon icon={faVk} /></a>
          <a href="https://www.facebook.com/yourfacebook" className="text-blue-800 text-2xl"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://wa.me/79011410860" className="text-green-500 text-2xl"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://www.youtube.com/channel/UCYkKsC4mnC6JiE6LV3ncg1g" className="text-red-600 text-2xl"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        <p>Политика конфиденциальности</p>
        <p>© 2022 «Шведстандарт». Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
