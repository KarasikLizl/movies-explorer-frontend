import React from 'react';

import { staticSite, adaptiveSite, spa } from '../../utils/constants';

function Portfolio() {
  return (
    <section className='portfolio'>
      <ul className='portfolio__list'>
        <h4 className='portfolio__list-title'>Портфолио</h4>
        <li className='portfolio__item'>
          <a
            className='portfolio__item-link'
            href={staticSite}
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <div className='portfolio__item-img'></div>
          </a>

          <div className='portfolio__item-line'></div>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__item-link'
            href={adaptiveSite}
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <div className='portfolio__item-img'></div>
          </a>

          <div className='portfolio__item-line'></div>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__item-link'
            href={spa}
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <div className='portfolio__item-img'></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
