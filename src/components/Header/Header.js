import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';

function Header({
  buttonHid,
  menu: hiddenMenu,
  loggedIn,
  onClose,
  onCloseEsc,
  isOpen,
  handleOpenMenu,
}) {
  const location = useLocation();
  return (
    <div>
      <div>
        {
          <Menu
            isOpen={isOpen}
            onClose={onClose}
            onCloseEsc={onCloseEsc}
            handleOpenMenu={handleOpenMenu}
          />
        }
      </div>
      <div>
        {location.pathname === '/signup' ||
        location.pathname === '/signin' ? null : loggedIn ? (
          <header
            className={`header ${
              location.pathname === '/'
                ? 'header_color_pink'
                : 'header_color_inherit'
            }`}
          >
            <div className='header__container'>
              <Link to='/'>
                <img className='header__logo' alt='Фильмы' src={logo} />
              </Link>
              <div className='header__nav'>
                <Navigation />
              </div>
              <div className={`acount acount_${buttonHid}`}>
                <div className='acount__btn acount__btn_me'>
                  <Link to='/profile' className='acount__link'>
                    <span className='acount__link-span'>Аккаунт</span>
                    <div className='acount__link-icon'></div>
                  </Link>
                </div>
              </div>
              <button
                className={`header__link header__link_icon-menu header__link_icon-menu_${hiddenMenu}`}
                onClick={handleOpenMenu}
              ></button>
            </div>
          </header>
        ) : (
          <header
            className={`header ${
              location.pathname === '/'
                ? 'header_color_pink'
                : 'header_color_inherit'
            }`}
          >
            <div className='header__container'>
              <Link to='/'>
                <img className='header__logo' alt='Фильмы' src={logo} />
              </Link>
              <div className='header__links'>
                <Link to='/signup' className='header__link'>
                  Регистрация
                </Link>
                <div className='header__btn'>
                  <Link
                    to='/signin'
                    className='header__link header__link_solid'
                  >
                    Войти
                  </Link>
                </div>
              </div>
            </div>
          </header>
        )}
      </div>
    </div>
  );
}

export default Header;
