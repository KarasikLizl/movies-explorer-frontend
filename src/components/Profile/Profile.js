import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Profile({ name, email }) {
  return (
    <section className='profile'>
      <Header
        color={'color_inherit'}
        navigation={<Navigation />}
        links={'hidden'}
      />
      <div className='profile__container'>
        <h2 className='pfofile__title'>Привет, {name}!</h2>
        <form name='profile' className='profile__form'>
          <div className='pfofile__form-block'>
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
          <div className='pfofile__form-block'>
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
      </div>
    </section>
  );
}

export default Profile;
