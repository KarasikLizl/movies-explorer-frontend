import MoviesCard from '../MoviesCard/MoviesCard';
function MoviesCardList({
  cards,
  onDelete,
  onSave,
  currentUser,
  savedMovieList,
  moreMovies,
  listLength,
}) {
  return (
    <section className='elements'>
      <ul className='cards'>
        {cards.slice(0, listLength).map((card, id) => {
          return (
            <MoviesCard
              card={card}
              key={card.id ? card.id : id}
              isLiked={card.isLiked}
              onSave={onSave}
              onDelete={onDelete}
              currentUser={currentUser}
              savedMovieList={savedMovieList}
              moreMovies={moreMovies}
            />
          );
        })}
      </ul>
      <div className='movies__more-container'>
        {cards.length === 0
          ? ''
          : cards.length > listLength && (
              <button onClick={() => moreMovies()} className='movies__more'>
                Еще
              </button>
            )}
      </div>
    </section>
  );
}

export default MoviesCardList;
