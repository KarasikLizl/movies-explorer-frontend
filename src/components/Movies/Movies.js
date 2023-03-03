import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { initialCards } from '../../utils/constants';

function Movies() {
  return (
    <div className='movies'>
      <main className='movies__main'>
        <SearchForm />
        <MoviesCardList cards={initialCards} />
        <div className='movies__more-container'>
          <button className='movies__more'>Еще</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Movies;

