import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import carousel1 from "../../Assets/1crousel.png";
import carousel2 from "../../Assets/2carousel.png";
import carousel3 from "../../Assets/3carousel.png";
import freeImg from "../../Assets/freeimg.jpg";

import {
  FaShieldAlt,
  FaUserTie,
  FaHandshake,
  FaHardHat,
  FaTag,
  FaUsers,
  FaCalendarAlt,
  FaTasks,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import CardContainer from "../../componenets/project/CardContainer";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./MoreInformation.css";
import { useDispatch } from "react-redux";

import { changeModal } from "../../pages/redux/slice/modal.slice";
import { houses } from "../../componenets/data/homes.db";
import ClientOpinion from "../ClientOpinion/ClientOpinion";

import ContactForm from "../../componenets/form/ContactForm";

function MoreInformation() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imgs = [
    { id: 0, value: carousel3 },
    { id: 1, value: carousel1 },
    { id: 2, value: carousel2 },
  ];

  const [val, setVal] = useState(0);
  const { slug } = useParams();

  const HouseData = houses.find((c) => c.url === slug);
  const [wordData, setWordData] = useState(HouseData?.imgs[0]);

  const handleClick = (index) => {
    setVal(index);
    setWordData(HouseData?.imgs[index]);
  };
  return (
    <div className="main-carousel">
      <div className="carousel-informations">
        <div className="main-1">
          <img src={wordData.value} alt="Main" />
          <div className="flex_row">
            {HouseData?.imgs.map((data, i) => (
              <div className="thumbnail" key={i}>
                <img
                  className={wordData.id === i ? "clicked" : ""}
                  src={data.value}
                  alt={`Thumbnail ${i}`}
                  onClick={() => handleClick(i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="construction-cost">
          <h1 className="font-semibold  text-2xl">
            Стоимость строительства дома:
          </h1>

          <div className="cost">9 045 283 руб.</div>
          <div className="note">Без учета устройства террасы</div>
          <div className="details">
            <div className="detail">
              <span className="icon">🏠</span> 165.7 м<sup>2</sup>
            </div>
            <div className="detail">
              <span className="icon">🛏️</span> 3
            </div>
            <div className="detail">
              <span className="icon">🏢</span> 1 этаж
            </div>
          </div>
          <div className="article">Артикул: 000432</div>
          <div className="specifications">
            <h2>Спецификация</h2>
            <ul className="label-items">
              <li className="label-item">
                <b>Фундамент:</b> {HouseData?.fundament}
              </li>
              <li className="label-item">
                <b>Стены:</b>{HouseData?.steni}
              </li>
              <li className="label-item">
                <b>Потолки:</b> Первый этаж 3 м,
              </li>
              <li className="label-item">
                <b>Перекрытие: </b>– по деревянным балкам с обработкой огне–биозащитой.
              </li>
              <li className="label-item">
                <b>Перегородки:</b> Кирпичные, толщиной, 120 мм,
              </li>
              <li className="label-item">
                <b>Вентиляция:</b> Естественная вентиляция для котельной, кухни и санузлов, выводящаяся на кровлю.
              </li>
              <li className="label-item">
                <b>Кровля :</b> Стропильная система, супердиффузионная мембрана Folder, металлочерепица Grand Line 0.5 мм (Ral 8017).
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button
              onClick={() => dispatch(changeModal(true))}
              className="consultation bg-[#65a30d] text-white py-2 px-4 rounded-md hover:bg-[#4d7c0f] transition"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>

      <div className="info-section">
        <section className="header-icon">
          <h2 className="font-semibold  text-2xl">
            Что еще входит в стоимость
          </h2>
          <div className="features">
            <div className="feature">
              <FaShieldAlt size={50} />
              <p>5 лет гарантии</p>
            </div>
            <div className="feature">
              <FaUserTie size={50} />
              <p>Персональный менеджер</p>
            </div>
            <div className="feature">
              <FaHandshake size={50} />
              <p>Сопровождение заказчика</p>
            </div>
            <div className="feature">
              <FaHardHat size={50} />
              <p>Технический надзор</p>
            </div>
          </div>
        </section>

        <div>
          <h2 className="font-semibold  mb-[100px] text-2xl">
            Дополнительные услуги
          </h2>
          <div className="extra-usluge">
          <div className="facade-container p-6">
      <div className="brick-facade p-4 border border-gray-300 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">Облицовочный кирпич</h2>
        <p>
          <strong>Преимущества:</strong> Долговечность, устойчивость к погоде, классический вид.
        </p>
        <p>
          <strong>Недостатки:</strong> Высокая стоимость, трудоёмкая установка.
        </p>
      </div>

      <div className="plaster-facade p-4 border border-gray-300 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">Декоративная штукатурка</h2>
        <p>
          <strong>Преимущества:</strong> Разнообразие текстур и цветов, улучшенная теплоизоляция.
        </p>
        <p>
          <strong>Недостатки:</strong> Требует ухода, менее долговечна.
        </p>
      </div>

      <div className="combined-facade p-4 border border-gray-300 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">Комбинированная отделка</h2>
        <p>
          <strong>Преимущества:</strong> Комбинация материалов, улучшенный дизайн, повышенная долговечность.
        </p>
        <p>
          <strong>Недостатки:</strong> Сложность установки, дополнительные расходы.
        </p>
        <p>
          <strong>Стоимость:</strong> по запросу.
        </p>
      </div>

      <div className="preliminary-finish p-4 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Предчистовая отделка дома</h2>
        <ul className="list-disc pl-5 mb-2">
          <li>Штукатурка стен</li>
          <li>Полусухая стяжка пола</li>
          <li>Электромонтажные работы</li>
          <li>Установка сантехники</li>
          <li>Система отопления</li>
        </ul>
        <p>
          Цена на пред чистовую отделку начинается от <strong>8 000 ₽/кв.м.</strong>
        </p>
      </div>
    </div>
            <img src={freeImg} alt="salom " />
          </div>
        </div>

        <section className="reasons-to-trust  mt-[40px] ">
          <h2 className="font-semibold   mb-[100px]  text-2xl">
            Почему с нами надежно?
          </h2>
          <div className="trust-features">
            <div className="trust-feature">
              <FaTag size={50} />
              <p>
                <b>Фиксированная цена</b>
              </p>
              <p>
                Стоимость строительства остается неизменной после подписания
                договора.
              </p>
            </div>
            <div className="trust-feature">
              <FaUsers size={50} />
              <p>
                <b>Квалифицированный персонал</b>
              </p>
              <p>
                В нашей команде работают только профильные специалисты, что
                гарантирует высокое качество выполненных работ.
              </p>
            </div>
            <div className="trust-feature">
              <FaCalendarAlt size={50} />
              <p>
                <b>10 лет на рынке</b>
              </p>
              <p>
                Мы имеем богатый опыт и знаем все тонкости и нюансы
                строительного рынка.
              </p>
            </div>
            <div className="trust-feature">
              <FaTasks size={50} />
              <p>
                <b>Поэтапная оплата</b>
              </p>
              <p>
                Оплата производится поэтапно: вы платите только за фактически
                выполненные работы после приемки этапа и подписания акта
                выполненных работ.
              </p>
            </div>
          </div>
        </section>

        <div className="contact-buttons">
          <Link
            to="https://t.me/swedstandard"
            className="telegram bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition inline-flex items-center"
            target="_blank"
          >
            <FaTelegramPlane size={20} className="mr-2" /> НАПИСАТЬ В TELEGRAM
          </Link>
          <Link
            to="https://wa.me/79011410860"
            className="whatsapp bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition inline-flex items-center"
            target="_blank"
          >
            <FaWhatsapp size={20} className="mr-2" /> НАПИСАТЬ В WHATSAPP
          </Link>
        </div>
      </div>

      <CardContainer />
      <ClientOpinion />
      <ContactForm />
    </div>
  );
}

export default MoreInformation;
