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
        <button className='header__btn header__btn_me header__btn_menu'>
          <Link
            to='/profile'
            className='header__link header__link-container header__link_menu'
          >
            <span className='header__link_span'>Аккаунт</span>
            <div className='header__link_icon'></div>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Menu;
