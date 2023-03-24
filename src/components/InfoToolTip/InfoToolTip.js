import { useEffect } from 'react';

function InfoTooltip({ isOpen, onClose, onCloseEsc, title, checkImage }) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onCloseEsc);
    }
    return () => {
      document.removeEventListener('keydown', onCloseEsc);
    };
  }, [isOpen, onCloseEsc]);

  return (
    <div className={`popup ${isOpen ? `popup_is-opened` : ''}`}>
      <div className='popup__container'>
        <button
          className='popup__close-button'
          type='button'
          onClick={() => {
            onClose();
          }}
        />
        <img className='popup__image' src={checkImage} alt='Картинка' />
        <h3 className='popup__text'>{title}</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
