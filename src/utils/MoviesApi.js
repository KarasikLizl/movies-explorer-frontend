class Api {
  constructor(url) {
    this._baseUrl = url;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovieList() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    });
  }
}

const api = new Api('https://api.nomoreparties.co/beatfilm-movies');

export default api;
