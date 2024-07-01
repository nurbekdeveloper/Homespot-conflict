import React, { useState } from 'react';
import ClientOpinion from '../ClientOpinion/ClientOpinion';
import CardContainer from '../../componenets/project/CardContainer';


const Contact = () => {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    alert('Form submitted. See console for data.');
  };

  return (
    <div className="flex flex-col w-full">
      <div className="contact-container flex flex-col md:flex-row bg-gray-800 text-white w-full p-6">
        <div className="contact-info w-full md:w-1/2 p-4">
          <h1 className="text-xl font-bold">КОНТАКТЫ</h1>
          <div className="text-sm mt-1 gap-4">
            <p>Свяжитесь с нами: <strong>+7(920) 926 07 07</strong></p>
            <p>г. Владимир, Большая, Нижегородская улица, 27</p>
            <p>Режим работы: Пн-Пт с 9:00 до 18:00,<br /> Сб-Вс с 10:00 до 16:00</p>
            <a href="mailto:info@vsmk.ru" className="text-white">info@swedstandard.ru</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form w-full md:w-1/2 p-4 space-y-3">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ваш телефон*"
            className="w-full p-2 bg-gray-700"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            className="w-full p-2 bg-gray-700"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Текст сообщения"
            className="w-full h-24 p-2 bg-gray-700"
          />
          <button type="submit" className="w-full bg-green-400 text-black py-2">Заказать звонок</button>
        </form>
      </div>
      <div id="map" className="w-full h-[400px] mt-4">
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=40.470595%2C56.146894&mode=whatshere&whatshere%5Bpoint%5D=40.426434%2C56.136111&whatshere%5Bzoom%5D=17&z=13.1"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
      <CardContainer />
      <ClientOpinion />
    </div>
  );
};

export default Contact;
