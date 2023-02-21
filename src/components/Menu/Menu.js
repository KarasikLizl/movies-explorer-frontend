import { Link } from 'react-router-dom';
import '../Header/Header';

function Menu() {
  return (
    <div className='menu'>
      <div className='menu__overlay'></div>
      <div className='menu__block'>
        <ul className='menu__list'>
          <div className='menu__icon'></div>
          <li className='menu__list-item'>
            <Link to='/movies' className='menu__item'>
              Главная
            </Link>
          </li>
          <li className='menu__list-item'>
            <Link to='/movies' className='menu__item'>
              Фильмы
            </Link>
          </li>
          <li className='menu__list-item'>
            <Link to='/saved-movies' className='menu__item'>
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <div className='acount'>
        <button className='acount__btn acount__btn_me acount__btn_menu'>
          <Link
            to='/profile'
            className='acount__link acount__link_menu'
          >
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
