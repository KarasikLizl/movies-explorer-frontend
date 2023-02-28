import CommonHeader from '../CommonHeader/CommonHeader';
import photo from '../../images/main_photo.png';
import { gitHubLink } from '../../utils/constants';

function AboutMe() {
  return (
    <section className='about'>
      <CommonHeader text={'Студент'}></CommonHeader>
      <div className='about__main'>
        <div className='about__text'>
          <h2 className='about__title'>Елизавета</h2>
          <h4 className='about__subtitle'>Фронтенд-разработчик, 26 лет</h4>
          <p className='about__about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб&nbsp;-&nbsp;разработке,
            начал заниматься фриланс&nbsp;-&nbsp;заказами и ушёл с постоянной
            работы.
          </p>
          <a
            href={gitHubLink}
            target='_blank'
            rel='noreferrer'
            className='about__link'
          >
            Github
          </a>
        </div>
        <img className='about__photo' alt='Портрет разработчика' src={photo} />
      </div>
    </section>
  );
}

export default AboutMe;
