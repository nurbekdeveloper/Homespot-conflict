import React, { useEffect } from 'react';
import './chat.css'; // Import the CSS file

const SwedStandardWidget = () => {
  useEffect(() => {
    <script src="//code.jivo.ru/widget/ZT8TiSyCe7" async></script>
    const script = document.createElement('script');
    script.src = 'https://code.jivochat.com/widget/YOUR_WIDGET_ID'; // Replace with your actual widget ID
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaymentQuestion = () => {
    window.jivo_api.open();
    window.jivo_api.sendMessage('У меня вопрос по оплате');
  };

  const handleTariffConsultation = () => {
    window.jivo_api.open();
    window.jivo_api.sendMessage('Нужна консультация по тарифам');
  };

  return (
    <div className="swedstandard-container">
      <div id="swedstandardChatContainer"></div>
      <button className="swedstandard-button" onClick={handlePaymentQuestion}>У меня вопрос по оплате</button>
      <button className="swedstandard-button" onClick={handleTariffConsultation}>Нужна консультация по тарифам</button>
    </div>
  );
};

export default SwedStandardWidget;
