const BASE_URL = 'https://api.bestfilmsever.nomoredomainsclub.ru';
// const BASE_URL = 'http://localhost:3000';

export async function getSavedMovies() {
  const res = await fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return _checkResponse(res);
}

export async function saveMovie(movieItem) {
  const res = await fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      country: movieItem.country,
      director: movieItem.director,
      duration: movieItem.duration,
      year: movieItem.year,
      description: movieItem.description,
      image: `https://api.nomoreparties.co${movieItem.image.url}`,
      trailerLink: movieItem.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movieItem.image.formats.thumbnail.url}`,
      movieId: movieItem.id,
      nameRU: movieItem.nameRU,
      nameEN: movieItem.nameEN ?? movieItem.nameRU,
    }),
  });
  return _checkResponse(res);
}

export async function deleteMovie(movieItem) {
  const res = await fetch(`${BASE_URL}/movies/${movieItem._id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return _checkResponse(res);
}

export async function getUserInfo() {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return _checkResponse(res);
}

export async function editUserInfo(data) {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  });
  return _checkResponse(res);
}

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.statusText}`);
}
