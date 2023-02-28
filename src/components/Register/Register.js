import Form from '../Form/Form';
function Register() {
  return (
    <main>
      <div className='register-form'>
        <Form
          greeting={'Добро пожаловать!'}
          buttonName={'Зарегестрироваться'}
          link={'/signin'}
          text={'Войти'}
          textLine={'Уже зарегестрированы?'}
        />
      </div>
    </main>
  );
}

export default Register;

