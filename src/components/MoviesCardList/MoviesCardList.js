import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList({ cards, button }) {
  return (
    <section className='elements'>
      <ul className='cards'>
        {cards.map((item) => {
          return <MoviesCard card={item} key={item.movieId} button={button} />;
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
