import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='movies' element={<Movies />}></Route>
        <Route path='saved-movies' element={<SavedMovies />} />
        <Route
          path='profile'
          element={<Profile name={'Елизавета'} email={'pochta@yandex.ru'} />}
        />
        <Route path='signup' element={<Register />} />
        <Route path='signIn' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
