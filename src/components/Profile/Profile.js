import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useEffect, useContext, useState } from 'react';

function Profile({ onLogout, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const [userEmail, setUserEmail] = useState(currentUser.email);
  const [userName, setUserName] = useState(currentUser.name);

  function handleChangeEmail(event) {
    setUserEmail(event.target.value);
  }
  function handleChangeName(event) {
    setUserName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name: userName,
      email: userEmail,
    });
  }

  return (
    <div>
      <Header
        color={'color_inherit'}
        navigation={<Navigation />}
        links={'hidden'}
      />
      <main className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form name='profile' className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__form-block'>
            <p className='profile__form-title'>Имя</p>
            <input
              placeholder='Имя'
              className='profile__form-input'
              value={currentUser.name}
              type='text'
              minLength={2}
              maxLength={40}
              onChange={handleChangeName}
            />
          </div>
          <div className='profile__dec'></div>
          <div className='profile__form-block'>
            <p className='profile__form-title'>E-mial</p>
            <input
              placeholder='E-mail'
              className='profile__form-input'
              value={currentUser.email}
              type='text'
              onChange={handleChangeEmail}
            />
          </div>
          <div className='profile__links'>
            <p className='profile__btn'>Редактировать</p>
            <Link
              to='/signin'
              className='profile__btn profile__btn_red'
              onClick={onLogout}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Profile;
