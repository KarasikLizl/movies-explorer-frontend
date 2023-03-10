import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useEffect, useContext, useState } from 'react';
import { useFormValidation } from '../../hooks/useValidation';

function Profile({ onLogout, onSubmit }) {
  const { handleChange, isValid } = useFormValidation();
  const currentUser = useContext(CurrentUserContext);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [disableEmailChanges, setDisableEmailChanges] = useState(true);
  const [disableNameChanges, setDisableNameChanges] = useState(true);

  function onChangeEmail(event) {
    handleChange(event);
    setUserEmail(event.target.value);
    userEmail === event.target.value
      ? setDisableEmailChanges(true)
      : setDisableEmailChanges(false);
  }
  function onChangeName(event) {
    handleChange(event);
    setUserName(event.target.value);
    userName === event.target.value
      ? setDisableNameChanges(true)
      : setDisableNameChanges(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name: userName,
      email: userEmail,
    });
    setDisableNameChanges(true);
    setDisableEmailChanges(true);
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
              name='name'
            />
          </div>
          <div className='profile__dec'></div>
          <div className='profile__form-block'>
            <p className='profile__form-title'>E-mail</p>
            <input
              placeholder='E-mail'
              className='profile__form-input'
              defaultValue={currentUser.email || ''}
              type='email'
              onChange={onChangeEmail}
              name='email'
            />
          </div>
          <div className='profile__links'>
            <button
              className='profile__btn'
              type='submit'
              disabled={!isValid || (disableNameChanges && disableEmailChanges)}
            >
              Редактировать
            </button>
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
