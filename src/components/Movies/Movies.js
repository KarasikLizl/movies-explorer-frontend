import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { initialCards } from '../../utils/constants';

function Movies() {
  return (
    <div className='movies'>
      <Header
        color={'color_inherit'}
        navigation={<Navigation />}
        links={'hidden'}
      />
      <main>
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

