import { Link } from 'react-router-dom';
import '../Header/Header';
import { useEffect } from 'react';

function Menu({ isOpen, onClose, onCloseEsc }) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onCloseEsc);
    }
    return () => {
      document.removeEventListener('keydown', onCloseEsc);
    };
  }, [isOpen, onCloseEsc]);

  return (
    <div className={`menu ${isOpen ? '' : 'menu_hidden'}`}>
      <div className='menu__overlay'></div>
      <div className='menu__block'>
        <ul className='menu__list'>
          <div
            className='menu__icon'
            onClick={() => {
              onClose();
            }}
          ></div>
          <li
            className='menu__list-item'
            onClick={() => {
              onClose();
            }}
          >
            <Link to='/' className='menu__item'>
              Главная
            </Link>
          </li>
          <li
            className='menu__list-item'
            onClick={() => {
              onClose();
            }}
          >
            <Link to='/movies' className='menu__item'>
              Фильмы
            </Link>
          </li>
          <li
            className='menu__list-item'
            onClick={() => {
              onClose();
            }}
          >
            <Link to='/saved-movies' className='menu__item'>
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <div className='acount'>
          <button
            className='acount__btn acount__btn_me acount__btn_menu'
            onClick={() => {
              onClose();
            }}
          >
            <Link to='/profile' className='acount__link acount__link_menu'>
              <span className='acount__link-span'>Аккаунт</span>
              <div className='acount__link-icon'></div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
