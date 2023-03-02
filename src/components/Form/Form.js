import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Form({ greeting, inputName, buttonName, text, link, textLine, onSubmit, name, email, password, handleNameChange, handlePasswordChange, handleEmailChange }) {
  return (
    <div className='main-form'>
      <img className='main-form__logo' alt='Лого' src={logo} />
      <h2 className='main-form__title'>{greeting}</h2>
      <form className='main-form__container' onSubmit={(event) => {
            event.preventDefault();
            console.log(event);
            onSubmit(event);
          }}>
        <div>
          <div
            className={`main-form__box main-form__box${inputName} main-form__box_name`}
          >
            <p className='main-form__text'>Имя</p>
            <input
              className='main-form__input'
              type='text'
              placeholder='Имя'
              
              value={name}
              onChange={handleNameChange}
            />
            <span className='main-form__text main-form__text_err main-form__text_err_hidden'>
              Что-то пошло не так
            </span>
          </div>

          <div className='main-form__box main-form__box_email'>
            <p className='main-form__text'>E-mail</p>
            <input
              className='main-form__input'
              type='email'
              placeholder='Email'
              required
              value={email}
              onChange={handleEmailChange}
            />
            <span className='main-form__text main-form__text_err main-form__text_err_hidden'>
              Что-то пошло не так
            </span>
          </div>

          <div className='main-form__box main-form__box_password'>
            <p className='main-form__text'>Пароль</p>
            <input
              className='main-form__input main-form__input_err'
              type='password'
              placeholder='Пароль'
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <span className='main-form__text main-form__text_err '>
              Что-то пошло не так
            </span>
          </div>
        </div>
        <button className='main-form__btn' >{buttonName}</button>
      </form>
      <div className='bottom-links'>
        <p className='bottom-links__text'>{textLine}</p>
        <Link to={link} className='bottom-links__link'>
          {text}
        </Link>
      </div>
    </div>
  );
}

export default Form;
