import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { savedCards } from '../../utils/constants';

function SavedMovies() {
  return (
    <div className='savedMovies'>
      <Header
        color={'color_inherit'}
        navigation={<Navigation />}
        links={'hidden'}
      />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList cards={savedCards} button={'delete'} />
        <button className='movies__more movies__more_hidden'></button>
      </main>
      <Footer />
    </div>
  );
}

export default SavedMovies;

