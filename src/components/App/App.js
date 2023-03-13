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
import Header from '../Header/Header';
import InfoTooltip from '../InfoToolTip/InfoToolTip';
import { register, authorize, checkToken } from '../../utils/auth';
import {
  getSavedMovies,
  saveMovie,
  deleteMovie,
  getUserInfo,
  editUserInfo,
} from '../../utils/MainApi';
import api from '../../utils/MoviesApi';

import imgDone from '../../images/popup-sucsess.svg';
import imgFail from '../../images/popup-fail.svg';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState('');
  const [preload, setPreload] = useState(true);
  const [localItems, setLocaltems] = useState([]);
  const [localSavedItems, setLocalSavedItems] = useState([]);
  const [savedMoviesFilter, setSavedMoviesFilter] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checkedSaved, setCheckedSaved] = useState(false);
  const [isInfoToolTipOpened, setInfoToolTipOpened] = useState({
    opened: false,
    text: '',
    statusImage: '',
  });
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [moviesQuantity, setMoviesQuantity] = useState(0);
  const [listLength, setListLength] = useState(0);

  //Авторизация
  function onSignIn(email, password) {
    authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem('token', res.token);
          setToken(res.token);
          setInfoToolTipOpened({
            opened: true,
            text: 'Авторизация прошла успешно!',
            statusImage: imgDone,
          });
          navigate('/movies');
        } else {
          throw new Error('Что-то пошло не так');
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTipOpened({
          opened: true,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
          statusImage: imgFail,
        });
      });
  }

  //Регистрация
  function onSignUp(email, password, name) {
    register(email, password, name)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          console.log(res);
          onSignIn(email, password);
          navigate('/movies');
        } else {
          throw new Error('Что-то пошло не так');
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTipOpened({
          opened: true,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
          statusImage: imgFail,
        });
      });
  }

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
            })
            .catch((err) => {
              console.error(err);
            });
          setCurrentUser(currentUser);
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, [token]);

  useEffect(() => {
    onCheckToken();
  }, [onCheckToken]);

  // Выход
  function handleOnLogout() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setToken('');
    setTimeout(() => {
    navigate('/');
    }, 0)
    
    setCurrentUser(null);
  }

  // Изменение данных пользователя
  function handleUpdateUser(userInfo) {
    editUserInfo(userInfo)
      .then((res) => {
        setCurrentUser(res);
        setInfoToolTipOpened({
          opened: true,
          text: 'Данные успешно изменены',
          statusImage: imgDone,
        });
      })
      .catch((err) => {
        console.log(err);
        setInfoToolTipOpened({
          opened: true,
          text: 'Что-то пошло не так! Попробуйте ещё раз.',
          statusImage: imgFail,
        });
      });
  }

  // Загрузка фильмов
  useEffect(() => {
    setPreload(true);
    if (loggedIn) {
      api
        .getMovieList()
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          localStorage.setItem('movies', JSON.stringify(res));
          const movies = JSON.parse(localStorage.getItem('movies'));
          setLocaltems(movies);
        })
        .catch((err) => {
          console.log(`Ошбика получения фильмов: ${err}`);
          setInfoToolTipOpened({
            opened: true,
            text: 'Что-то пошло не так! Попробуйте ещё раз.',
            statusImage: imgFail,
          });
        })
        .finally(() => {
          setTimeout(() => {
            setPreload(false);
          }, 1000);
        });
    }
  }, [loggedIn]);

  // Загрузка сохранненых фильмов
  useEffect(() => {
    setPreload(true);
    if (loggedIn && currentUser !== null) {
      getSavedMovies()
        .then((res) => {
          localStorage.setItem(
            'savedMovies',
            JSON.stringify(res.filter((i) => i.owner === currentUser._id))
          );
          const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
          setLocalSavedItems(savedMovies);
        })
        .catch((err) => {
          console.log(`Ошибка получения сохраненных фильмов: ${err}`);
          setInfoToolTipOpened({
            opened: true,
            text: 'Что-то пошло не так! Попробуйте ещё раз.',
            statusImage: imgFail,
          });
        })
        .finally(() => {
          setTimeout(() => {
            setPreload(false);
          }, 1000);
        });
    }
  }, [currentUser, loggedIn]);

  // Сохранение фильма
  function handleSaveMovie(card) {
    const like = localSavedItems.some((i) => i.movieId === card.id);
    if (like) {
      const deleteCard = localSavedItems.find((i) => i.movieId === card.id);
      handleDeleteMovie(deleteCard);
    } else {
      saveMovie(card).then((res) => {
        setLocalSavedItems([...localSavedItems, res]);
      });
    }
  }

  // Поиск по фильмам
  function handleSearchMovie(value) {
    const sortedMovieSearch = localItems.filter((item) => {
      const values = value.toLowerCase();
      const nameEN = item.nameEN;
      const nameRU = item.nameRU.toLowerCase();
      return (nameEN &&
        nameEN.toLowerCase().includes(values) &&
        values !== '') ||
        (nameRU && nameRU.toLowerCase().includes(value) && values !== '')
        ? item
        : null;
    });
    localStorage.setItem('filteredMovies', JSON.stringify(sortedMovieSearch));
    setFilteredMovies(sortedMovieSearch);
    value = '';
  }

  // Сохранение Поиска
  function handleSaveSearch(value) {
    const sortedMovieSearch = localSavedItems.filter((card) => {
      const values = value.toLowerCase();
      const nameEN = card.nameEN;
      const nameRU = card.nameRU.toLowerCase();
      return (nameEN && nameEN.toLowerCase().includes(values)) ||
        (nameRU && nameRU.toLowerCase().includes(value))
        ? card
        : null;
    });

    localStorage.setItem('savedFilterMovie', JSON.stringify(sortedMovieSearch));
    setSavedMoviesFilter(
      sortedMovieSearch.length === 0 ? localSavedItems : sortedMovieSearch
    );    
  }
  //Показ фильмов на странице в зависимости от количества
  function useScreenSize() {
    const getScreenSize = () => {
      const { innerWidth: width } = window;
      return { width };
    };
    const [screenSize, setScreenSize] = useState(getScreenSize());
    useEffect(() => {
      function handleResizeScreen() {
        setScreenSize(getScreenSize());
      }
      window.addEventListener('resize', handleResizeScreen);
      return () => window.removeEventListener('resize', handleResizeScreen);
    }, []);
    return screenSize;
  }
  const { width } = useScreenSize();

  useEffect(() => {
    if (width >= 1280) {
      setMoviesQuantity(3);
      setListLength(12);
    } else if (width <= 1279 && width >= 768) {
      setMoviesQuantity(2);
      setListLength(8);
    } else if ( width <= 480 && width <= 3) {
      setMoviesQuantity(1);
      setListLength(5);
    }
  }, [width]);

  function moreMovies() {
    setListLength(listLength + moviesQuantity);
  }

  // Фильтр короткометражек
  function switchShort() {
    const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    setChecked(!checked);
    if (!checked) {
      const shortMovie = filteredMovies.filter((item) => item.duration <= 40);
      setFilteredMovies(shortMovie);
    } else {
      setFilteredMovies(filteredMovies);
    }
  }

  // Фильтр избранных короткометражек
  function switchShortSaved() {
    const savedFilteredMovies = JSON.parse(localStorage.getItem('savedFilterMovie'));
    setCheckedSaved(!checkedSaved);
    if (!checkedSaved) {
      const shortMovie = savedFilteredMovies.filter(
        (item) => item.duration <= 40
      );
      setSavedMoviesFilter(shortMovie);
    } else {
      setSavedMoviesFilter(savedFilteredMovies);
    }
  }

  // Удалить фильм
  function handleDeleteMovie(card) {
    deleteMovie(card).then(() => {
      setSavedMoviesFilter(savedMoviesFilter.filter((i) => i._id !== card._id));
      setLocalSavedItems(localSavedItems.filter((i) => i._id !== card._id));
    });
  }

  // Открыть меню
  function handleOpenMenuClick() {
    setIsMenuOpened(!isMenuOpened);
  }

  // Закрыть попап
  function closePopup() {
    setInfoToolTipOpened({
      opened: false,
      text: '',
      statusImage: '',
    });
    setIsMenuOpened(false);
  }

  // Закрыть на esc
  function closeOnEsc(event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          onCloseEsc={closeOnEsc}
          onClose={closePopup}
          isOpen={isMenuOpened}
          handleOpenMenu={handleOpenMenuClick}
        ></Header>
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
                  onLogout={handleOnLogout}
                  onSubmit={handleUpdateUser}
                />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Preloader isPreload={preload} />
                <Movies
                  currentUser={currentUser}
                  handleSearch={handleSearchMovie}
                  savedMovieList={localSavedItems}
                  cards={filteredMovies}
                  onSave={handleSaveMovie}
                  onDelete={handleDeleteMovie}
                  filterShort={switchShort}
                  checkedForm={checked}
                  moreMovies={moreMovies}
                  listLength={listLength}
                />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Preloader isPreload={preload} />
                <SavedMovies
                  cards={savedMoviesFilter}
                  handleSearch={handleSaveSearch}
                  onDelete={handleDeleteMovie}
                  savedMovieList={savedMoviesFilter}
                  filterShort={switchShortSaved}
                  checkedForm={checkedSaved}
                  moreMovies={moreMovies}
                  listLength={listLength}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <InfoTooltip
          onCloseEsc={closeOnEsc}
          isOpen={isInfoToolTipOpened.opened}
          title={isInfoToolTipOpened.text}
          onClose={closePopup}
          checkImage={isInfoToolTipOpened.statusImage}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
