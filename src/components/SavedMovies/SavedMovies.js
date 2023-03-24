import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({
  handleSearch,
  cards,
  onDelete,
  onSave,
  savedMovieList,
  filterShort,
  checkedForm,
  listLength,
  moreMovies,
}) {
  return (
    <div className='savedMovies'>
      <main className='movies'>
        <SearchForm
          handleSearch={handleSearch}
          filterShort={filterShort}
          checkedForm={checkedForm}
        />
        <MoviesCardList
          cards={cards}
          onDelete={onDelete}
          onSave={onSave}
          savedMovieList={savedMovieList}
          moreMovies={moreMovies}
          listLength={listLength}
        />
        <button className='movies__more movies__more_hidden'></button>
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;
