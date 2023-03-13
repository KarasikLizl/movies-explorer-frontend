import { useNavigate   } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <div className='not-found'>
        <h2 className='not-found__header'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
        <button className='not-found__btn' onClick={() => navigate(-1)}>Назад</button>
      </div>
    </main>
  );
}

export default NotFound;

