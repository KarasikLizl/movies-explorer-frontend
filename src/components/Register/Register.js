import Form from '../Form/Form';
import { useState, useCallback } from "react";
function Register({onSignUp}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const resetForm = useCallback(() => {
    setEmail("");
    setPassword("");
    setName("");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    onSignUp(email, password, name);
    resetForm();
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(event.target.value)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    console.log(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(event.target.value)
  }

  return (
    <main>
      <div className='register-form'>
        <Form
          greeting={'Добро пожаловать!'}
          buttonName={'Зарегестрироваться'}
          link={'/signin'}
          text={'Войти'}
          textLine={'Уже зарегестрированы?'}
          onSubmit={handleSubmit}
          email={email}
          password={password}
          name={name}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleNameChange={handleNameChange}

        />
      </div>
    </main>
  );
}

export default Register;

