import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='navigation'>
      <Link to='/movies' className='navigation__link navigation__link_bold'>
        Фильмы
      </Link>
      <Link to='/saved-movies' className='navigation__link'>
        Сохраненные фильмы
      </Link>
    </div>
  );
}

export default Navigation;
