import Form from '../Form/Form';
import { useState, useCallback } from 'react';

function Login({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = useCallback(() => {
    setEmail("");
    setPassword("");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    onSignIn(email, password);
    resetForm();
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <main className='login'>
      <div className='login-form'>
        <Form
          greeting={'Рады видеть!'}
          buttonName={'Войти'}
          link={'/signup'}
          text={'Регистрация'}
          textLine={'Еще не зарегестрированы?'}
          inputName={'_hidden'}
          onSubmit={handleSubmit}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          email={email}
          password={password}
        />
      </div>
    </main>
  );
}

export default Login;

