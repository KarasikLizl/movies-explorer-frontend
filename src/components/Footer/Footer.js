import { gitHubLink, practicumLink } from '../../utils/constants';
function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__caption'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__section'>
        <p className='footer__data'>© 2022</p>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a
              className='footer__link'
              href={practicumLink}
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__item'>
            <a
              className='footer__link'
              href={gitHubLink}
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
