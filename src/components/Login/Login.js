import Form from '../Form/Form';
function Login() {
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
        />
      </div>
    </main>
  );
}

export default Login;

