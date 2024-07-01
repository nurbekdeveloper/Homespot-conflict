import React, { useEffect, useState } from 'react';
import './modal.css';
import quoteImage from '../../Assets/person.png';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from '../../pages/redux/slice/modal.slice';
import emailjs from 'emailjs-com';
import { FaTelegramPlane, FaWhatsapp, FaVk } from 'react-icons/fa';

const Modals = (props) => {
  const { modal } = useSelector(state => state.modal);
  const dispatch = useDispatch();

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
    <>
      <Modal
        width={1000}
        centered
        open={modal}
        onOk={() => dispatch(changeModal(false))}
        onCancel={() => dispatch(changeModal(false))}
      >
        <div className="quote-section">
          <form className="quote-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className="quote-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Электронная почта"
              className="quote-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className="quote-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Сообщение"
              className="quote-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="quote-attach">

            </div>
            <button type="submit" className="quote-button">Отправить</button>
            <div className="quote-icons">
              <a href="https://t.me/swedstandard" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://vk.com/swedstandard" target="_blank" rel="noopener noreferrer">
                <FaVk />
              </a>
            </div>
          </form>
          <div className="quote-image">
            <img src={quoteImage} alt="Project Quote" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
