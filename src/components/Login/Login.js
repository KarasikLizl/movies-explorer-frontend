import Form from '../Form/Form';
import { useState, useCallback } from 'react';
import { useFormValidation } from '../../hooks/useValidation';

function Login({ onSignIn }) {
  const { values, handleChange, isValid, isValidPassword } =
    useFormValidation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    onSignIn(values.email, values.password);
    resetForm();
  }

  return (
    <main className='login'>
      <div className='login-form'>
        <Form
          greeting={'Рады видеть!'}
          link={'/signup'}
          text={'Регистрация'}
          textLine={'Еще не зарегестрированы?'}
          onSubmit={handleSubmit}
        >
          <div className='main-form__block'>
            <div className='main-form__box main-form__box_email'>
              <p className='main-form__text'>E-mail</p>
              <input
                className={`main-form__input ${
                  isValid ? '' : 'main-form__input_err'
                }`}
                type='email'
                name='email'
                placeholder='Email'
                required
                onChange={handleChange}
              />
              <span
                className={`main-form__text   ${
                  isValid ? 'main-form__text_err_hidden' : 'main-form__text_err'
                }`}
              >
                Введите корректный email
              </span>
            </div>

            <div className='main-form__box main-form__box_password'>
              <p className='main-form__text'>Пароль</p>
              <input
                className={`main-form__input ${
                  isValidPassword ? '' : 'main-form__input_err'
                }`}
                type='password'
                placeholder='Пароль'
                required
                onChange={handleChange}
                name='password'
              />
              <span
                className={`main-form__text  ${
                  isValidPassword
                    ? 'main-form__text_err_hidden'
                    : 'main-form__text_err'
                }`}
              >
                Введите корректный пароль
              </span>
            </div>
          </div>
          <button
            className={`main-form__btn ${
              !isValid && 'main-form__btn_disabled'
            }`}
            type='submit'
            disabled={!isValid}
          >
            Войти
          </button>
        </Form>
      </div>
    </main>
  );
}

export default Login;
