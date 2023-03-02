import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import { register, authorize, checkToken } from '../../utils/auth';
import {
  getSavedMovies,
  saveMovie,
  deleteMovie,
  getUserInfo,
} from '../../utils/MainApi';
import api from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [preload, isPreload] = useState(true);

  //авторизация
  const onSignIn = (email, password) => {
    authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem('token', res.token);
          setToken(res.token);
          navigate('/movies');
        } else {
          throw new Error('Что-то пошло не так');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Регистрация
  const onSignUp = (email, password, name) => {
    register(email, password, name)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate('/movies');
        } else {
          throw new Error('Что-то пошло не так');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Токен
  const onCheckToken = useCallback(() => {
    checkToken(localStorage.getItem('token'))
      .then((res) => {
        if (res) {
          setToken(token);
          setLoggedIn(true);

          getUserInfo()
            .then((currentUser) => {
              setCurrentUser(currentUser);
              console.log('ok!')
            })
            .catch((err) => {
              console.error(err);
            });

          // api
          //   .getInitialCards()
          //   .then(() => {
          //     console.log('ok')
          //   })
          //   .catch((err) => {
          //     console.error(err);
          //   });

          // api
          //   .getUserInfo()
          //   .then((currentUser) => {
          //     setCurrentUser(currentUser);
          //   })
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
        navigate('/signin', { replace: true });
      });
  }, [navigate, token]);

  useEffect(() => {
    onCheckToken();
  }, [onCheckToken]);

  // Выход
  const handleOnLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setToken('');
    setUserEmail('');
    setTimeout(() => {
      navigate('/');
    }, 10);
    setCurrentUser(null);
  };

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='signup' element={<Register onSignUp={onSignUp} />} />
          <Route path='signin' element={<Login onSignIn={onSignIn} />} />
          <Route path='/' element={<Main />} />
          <Route path='*' element={<NotFound />} />

          <Route
            exact
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  name={'Елизавета'}
                  email={'pochta@yandex.ru'}
                  onLogout={handleOnLogout}
                />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
