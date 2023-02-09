import './Header';
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className='header header_color_pink'>
      <div className='header__container'>
      <img className="header__logo" alt="Место. Россия" src={logo} />
      <div className='header__links'>        
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
            <button className='header__btn'>
            <Link to="/sign-in" className="header__link header__link_solid">
              Войти
            </Link>
            </button>
      </div>
      </div>
    </header>
  )
}

export default Header;
