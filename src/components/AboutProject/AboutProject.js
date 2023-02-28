import React from 'react';
import CommonHeader from '../CommonHeader/CommonHeader';

function AboutProject() {
  return (
    <section className='aboutProject'>
      <CommonHeader text={'О проекте'} />
      <div className='aboutProject__blocks'>
        <div className='aboutProject__block'>
          <h3 className='aboutProject__title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutProject__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutProject__block'>
          <h3 className='aboutProject__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutProject__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutProject__bars'>
        <div className='aboutProject__bar'>
          <div className='aboutProject__bar-item'>1 неделя</div>
          <p className='aboutProject__bar-name'>Back-end</p>
        </div>
        <div className='aboutProject__bar aboutProject__bar_long'>
          <div className='aboutProject__bar-item aboutProject__bar-item_light'>
            4 недели
          </div>
          <p className='aboutProject__bar-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
