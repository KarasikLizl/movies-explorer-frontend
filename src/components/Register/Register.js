import Form from '../Form/Form';
import { useState, useCallback } from 'react';
import { useFormValidation } from '../../hooks/useValidation';

function Register({ onSignUp }) {
  const { values, handleChange, isValid, isValidName, isValidPassword } =
    useFormValidation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const resetForm = useCallback(() => {
    setEmail('');
    setPassword('');
    setName('');
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    onSignUp(values.email, values.password, values.name);
    resetForm();
  }

  return (
    <main>
      <div className='register-form'>
        <Form
          greeting={'Добро пожаловать!'}
          link={'/signin'}
          text={'Войти'}
          textLine={'Уже зарегестрированы?'}
          onSubmit={handleSubmit}
          required
        >
          <div className='main-form__block'>
            <div className='main-form__box main-form__box_name'>
              <p className='main-form__text'>Имя</p>
              <input
                className={`main-form__input ${
                  isValidName ? '' : 'main-form__input_err'
                }`}
                type='text'
                placeholder='Имя'
                onChange={handleChange}
                name='name'
                minLength='2'
                maxLength='30'
                required
              />
              <span
                className={`main-form__text ${
                  isValidName
                    ? 'main-form__text_err_hidden'
                    : 'main-form__text_err'
                }`}
              >
                Введите корректное имя
              </span>
            </div>
            <div className='main-form__box main-form__box_email'>
              <p className='main-form__text'>E-mail</p>
              <input
                className={`main-form__input ${
                  isValid ? '' : 'main-form__input_err'
                }`}
                type='email'
                placeholder='Email'
                required
                onChange={handleChange}
                name='email'
              />
              <span
                className={`main-form__text  ${
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
                Введите пароль
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
            Зарегестрироваться
          </button>
        </Form>
      </div>
    </main>
  );
}

export default Register;
