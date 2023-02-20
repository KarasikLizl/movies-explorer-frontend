import Form from '../Form/Form';
function Login() {
  return (
    <div className='login-form'>
      <Form
        greeting={'Рады видеть!'}
        buttonName={'Войти'}
        link={'/signup'}
        text={'Регистрация'}
        textLine={'Еще не зарегестрированы?'}
        inputName={'_hidden'}
      />
    </div>
  );
}

export default Login;
