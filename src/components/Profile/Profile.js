import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Profile({ name, email }) {
  return (
    <div>
      <Header
        color={'color_inherit'}
        navigation={<Navigation />}
        links={'hidden'}
      />
      <main className='profile'>
          <h2 className='profile__title'>Привет, {name}!</h2>
          <form name='profile' className='profile__form'>
            <div className='profile__form-block'>
              <p className='profile__form-title'>Имя</p>
              <input
                placeholder='Имя'
                className='profile__form-input'
                defaultValue={name}
                type='text'
                minLength={2}
                maxLength={40}
              />
            </div>
            <div className='profile__dec'></div>
            <div className='profile__form-block'>
              <p className='profile__form-title'>E-mial</p>
              <input
                placeholder='E-mail'
                className='profile__form-input'
                defaultValue={email}
                type='text'
              />
            </div>
            <div className='profile__links'>
              <p className='profile__btn'>Редактировать</p>
              <Link to='/signin' className='profile__btn profile__btn_red'>
                Выйти из аккаунта
              </Link>
            </div>
          </form>
      </main>
    </div>
  );
}

export default Profile;
