import React from 'react';
import { Link } from 'react-router-dom';
import CommonHeader from '../CommonHeader/CommonHeader';
import photo from '../../images/main_photo.png';

function Portfolio() {
  return (
    <section className='portfolio'>
      <CommonHeader text={'Студент'}></CommonHeader>
      <div className='portfolio__main'>
        <div className='profile__text'>
          <h2 className='portfolio__title'>Елизавета</h2>
          <h4 className='portfolio__subtitle'>Фронтенд-разработчица, 26 лет</h4>
          <p className='portfolio__about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to='/' className='portfolio__link'>
            Github
          </Link>
        </div>
        <img
          className='portfolio__photo'
          alt='Портрет разработчика'
          src={photo}
        />
      </div>
      <ul className='portfolio__list'>
        <h4 className='portfolio__list-title'>Портфолио</h4>
        <li className='portfolio__item'>
          <Link className='portfolio__item-link' to='/'>Статичный сайт</Link>
          <div className='portfolio__item-img'></div>
        </li>
        <li className='portfolio__item'>
          <Link className='portfolio__item-link' to='/'>Адаптивный сайт</Link>
          <div className='portfolio__item-img'></div>
        </li>
        <li className='portfolio__item portfolio__item_no-line'>
          <Link className='portfolio__item-link' to='/'>Одностраничное приложение</Link>
          <div className='portfolio__item-img'></div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
