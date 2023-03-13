import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Form({ greeting, text, link, textLine, onSubmit, children }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(event);
  }

  return (
    <div className='main-form'>
      <Link to='/'>
      <img className='main-form__logo' alt='Лого' src={logo} />
      </Link>
      <h2 className='main-form__title'>{greeting}</h2>
      <form className='main-form__container' onSubmit={handleSubmit}>
        {children}
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
