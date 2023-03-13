import { useLocation } from 'react-router-dom';

function MoviesCard({ card, onSave, onDelete, savedMovieList }) {
  const movieDuration = `${Math.floor(card.duration / 60)}ч ${
    card.duration % 60
  }м`;
  const location = useLocation();
  const handleCard = () => {
    if (location.pathname === '/movies') {
      onSave(card);
    }
    if (location.pathname === '/saved-movies') {
      onDelete(card);
    }
  };
  return (
    <li className='card'>
      <div className='card__header'>
        <div className='card__text'>
          <h3 className='card__title'>{card.nameRU}</h3>
          <p className='card__subtitle'>{movieDuration}</p>
        </div>
        <button
          className={`card__btn ${
            location.pathname === '/movies'
              ? card.id && savedMovieList.some((m) => m.movieId === card.id)
                ? 'card__btn_click'
                : ''
              : 'card__btn_delete'
          }`}
          onClick={handleCard}
        ></button>
      </div>
      <a
        className='card__link'
        href={card.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={
            location.pathname === '/movies'
              ? `https://api.nomoreparties.co${card.image.url}`
              : card.image
          }
          alt={card.nameRU}
          className='card__img'
        />
      </a>
    </li>
  );
}

export default MoviesCard;
