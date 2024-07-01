import fundament from "../../Assets/beton.webp"

// homepage img

import house1 from '../../Assets/house1.jpg';
import house2 from '../../Assets/house2.jpg';
import house3 from '../../Assets/house3.jpg';

// Card data img
import fundament1 from "../../Assets/fundament1.jpg"


import fundament2 from "../../Assets/fundament2.jpg"
import fundament3 from "../../Assets/fundament3.jpg"
import fundament4 from "../../Assets/fundament4.jpg"


// house img
import houseImage from '../../Assets/houses.png';



const CardsImages = [
  { id: 1, name: "Glass House 25A", type: "Баня", technology: "Клееный брус", dimensions: "100x100x100", price: "1 000 000 Р", image: houseImage },
  { id: 2, name: "Kontio Laaksolahti", image: houseImage },
  { id: 3, name: "Г-69", image: houseImage },
  { id: 4, name: "Н-49", image: houseImage },
  { id: 5, name: "База отдыха сибирь", image: houseImage },
  { id: 6, name: "Glass House 25A", image: houseImage },
  { id: 7, name: "Kontio Laaksolahti", image: houseImage },
  { id: 8, name: "Г-69", image: houseImage },
];

// Start Home section


const cardData = [
  {
      image: fundament3,
      title: 'Монтаж фундамента',
      description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
      price: 'от 12 500 Р / куб.метр',
      buttonText: 'Заказать',
      url:"/lentochiy-fundament"
  },
  {
      image: fundament2,
      title: 'Кровельные работы',
      description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
      price: 'от 10 900 Р / куб.метр',
      buttonText: 'Заказать',
      url:"/monolitnaya-plita"

  },

  {
      image: fundament4,
      title: 'Наружная Отделка Дома',
      description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
      price: 'рассчитывается индивидуально',
      buttonText: 'Заказать',
      url:"/Sborno-blochniy-fundament"

  },
  {
      image: fundament1,
      title: 'Внутренняя Отделка Дома',
      description: 'Такой тип фундамента представляет собой замкнутый контур из единой армированной железобетонной балки, заложенный по периметру здания и под несущими стенами, и передающий нагрузку здания подлежащему грунту. На нем строят как легкие дома, так тяжелые монолитные дома, и каменные коттеджи: несущая способность зависит от ширины, высоты ленты и типа грунта.',
      price: 'от 10 500 Р / п.м.',
      buttonText: 'Заказать',
      url:"/svayno-rostverkoviy-fundament"

  },

];





// home page img and text


const Homepage = [
  {
    id: 1,
    image: house1,

    title: 'Газобетон',
    description: 'Легкость Теплоизоляция Звукоизоляция,Простота обработки Экологичность:  ',
    link: '#'
  },
  {
    id: 2,
    image: house2,

    title: 'Кирпич',
    description: 'Банные процедуры — это ни с чем не сравнимое удовольствие...',
    link: '#'
  },
  {
    id: 3,
    image: house3,

    title: 'Каркасные дома',
    description: 'Дом из клееного бруса Вояжа 50 м2',
    link: '#'
  }
];
// foundation beton

// card data page

export { Homepage,CardsImages , cardData}
