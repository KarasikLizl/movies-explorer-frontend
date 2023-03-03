import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useEffect, useContext, useState } from 'react';

function Profile({ onLogout, onSubmit }) {
  const currentUser = useContext(CurrentUserContext);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  function onChangeEmail(event) {
    setUserEmail(event.target.value);
  }
  function onChangeName(event) {
    setUserName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name: userName,
      email: userEmail,
    });
  }
  useEffect(() => {
    setUserEmail(currentUser.email);
    setUserName(currentUser.name);
  }, [currentUser]);

  return (
    <div>
      <main className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form name='profile' className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__form-block'>
            <p className='profile__form-title'>Имя</p>
            <input
              placeholder='Имя'
              className='profile__form-input'
              defaultValue={currentUser.name || ''}
              type='text'
              minLength={2}
              maxLength={40}
              onChange={onChangeName}
            />
          </div>
          <div className='profile__dec'></div>
          <div className='profile__form-block'>
            <p className='profile__form-title'>E-mial</p>
            <input
              placeholder='E-mail'
              className='profile__form-input'
              value={currentUser.email || ''}
              type='text'
              onChange={onChangeEmail}
            />
          </div>
          <div className='profile__links'>
            <button className='profile__btn' type='submit'>Редактировать</button>
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
