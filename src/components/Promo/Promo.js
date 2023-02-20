import logo from '../../images/promo-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__info'>
        <img className='promo__img' alt='Логотип планеты Земля' src={logo} />
        <div className='promo__block'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className='promo__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button className='promo__btn'>Узнать больше</button>
        </div>
      </div>
    </section>
  );
}

export default Promo;
