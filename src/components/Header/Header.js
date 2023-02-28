import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Header({
  color,
  navigation,
  links: hidden,
  buttonHid,
  menu: hiddenMenu,
}) {
  return (
    <header className={`header header_${color}`}>
      <div className='header__container'>
        <Link to='/'>
          <img className='header__logo' alt='Фильмы' src={logo} />
        </Link>
        <div className='header__nav'>{navigation}</div>
        <div className={`header__links header__links_${hidden}`}>
          <Link to='/signup' className='header__link'>
            Регистрация
          </Link>
          <div className='header__btn'>
            <Link to='/signin' className='header__link header__link_solid'>
              Войти
            </Link>
          </div>
        </div>
        <div className={`acount acount_${buttonHid}`}>
        <div
          className='acount__btn acount__btn_me'
        >
          <Link to='/profile' className='acount__link'>
            <span className='acount__link-span'>Аккаунт</span>
            <div className='acount__link-icon'></div>
          </Link>
        </div>
        </div>
        <button
          className={`header__link header__link_icon-menu header__link_icon-menu_${hiddenMenu}`}
        ></button>
      </div>
    </header>
  );
}

export default Header;
