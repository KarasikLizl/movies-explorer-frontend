class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovieCards() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default api;
