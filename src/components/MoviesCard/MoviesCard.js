function MoviesCard({ card, button: deleteBtn }) {
  return (
    <li className='card'>
      <div className='card__header'>
        <div className='card__text'>
          <h3 className='card__title'>{card.nameRU}</h3>
          <p className='card__subtitle'>{card.duration}</p>
        </div>
        <button className={`card__btn card__btn_${deleteBtn}`}></button>
      </div>
      <img src={card.image} alt={card.nameRU} className='card__img' />
    </li>
  );
}

export default MoviesCard;
