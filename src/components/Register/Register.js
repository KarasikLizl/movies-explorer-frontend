import Form from '../Form/Form';
function Register() {
  return (
    <div className='register-form'>
      <Form
        greeting={'Добро пожаловать!'}
        buttonName={'Зарегестрироваться'}
        link={'/signin'}
        text={'Войти'}
        textLine={'Уже зарегестрированы?'}
      />
    </div>
  );
}

export default Register;
