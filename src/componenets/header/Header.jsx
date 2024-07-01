import React from 'react';
import './Header.css';
// import SearchForm from './SearchForm';

const Header = () => {
  return (
    <header className="header">

       <div className="overlay"></div>
       <div className="header-content" >
        <h2 className='welcome-title'>Шведстандарт строительная компания в  - Сотрудничество с шведскими строителями</h2>
        {/* <p>"Наши дома - это сочетание высоких стандартов и непревзойденного качества, которое оставит вас в восторге."</p> */}
      </div>
      {/* <SearchForm/> */}

    </header>
  );
}

export default Header;
