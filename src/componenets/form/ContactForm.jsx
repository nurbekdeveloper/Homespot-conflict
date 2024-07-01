

import './ContactForm.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';


function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "attachment") {
      setFormData({
        ...formData,
        attachment: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    if (formData.attachment) {
      formDataToSend.append('attachment', formData.attachment);
    }

    emailjs.sendForm(
      'service_1h1wy3c', // Replace with your service ID
      'template_k2emazw', // Replace with your template ID
      e.target,
      'QZV_l_vLAqERc79MY' // Replace with your user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Сообщение отправлено!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Ошибка при отправке сообщения.');
      });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      attachment: null,
    });
  };

  return (
    <div className="all">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          className="input"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Электронная почта"
          className="input"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          className="input"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          rows="4"
          className="textarea"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="attachment">

          <input
            id="file-upload"
            type="file"
            name="attachment"
            className="file-input"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="buttonForm  ">Отправить</button>
      </form>
      <div className="description">
        <h2>Расчёт стоимости по вашему проекту</h2>
        <br /><br />
        <p style={{ color: 'white' }}>
        Сделайте первый шаг к своей мечте! Оставьте заявку для расчета стоимости вашего проекта и получите качественную архитектурную концепцию, которая приведет ваши идеи к реализации.
        </p><br />
        <p> Мы можем также работать с вашими проектами, чтобы обеспечить наилучший результат.</p>
      </div>
    </div>
  );
}

export default ContactForm;