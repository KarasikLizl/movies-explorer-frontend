// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://api.bestfilmsever.nomoredomainsclub.ru';

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.statusText}`);
}

export async function register(email, password, name) {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, email, name }),
  });
  return _checkResponse(res);
}

export async function authorize(email, password) {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, email }),
  });
  const data = await _checkResponse(res);
  localStorage.setItem('token', data.token);
  return data;
}

export async function checkToken() {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return _checkResponse(res);
}