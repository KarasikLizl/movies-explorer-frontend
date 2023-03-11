import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({
  cards,
  onSave,
  onDelete,
  filterShort,
  checkedForm,
  savedMovieList,
  listLength,
  currentUser,
  handleSearch,
  moreMovies
}) {
  return (
    <div className='movies'>
      <main className='movies__main'>
        <SearchForm
          handleSearch={handleSearch}
          filterShort={filterShort}
          checkedForm={checkedForm}
        />
        <MoviesCardList
          cards={cards}
          onSave={onSave}
          savedMovieList={savedMovieList}
          listLength={listLength}
          onDelete={onDelete}
          currentUser={currentUser}
          moreMovies={moreMovies}
        />        
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
