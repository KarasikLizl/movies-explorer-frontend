import '../../index';
import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Techs/Techs';

function Main() {
  return (
    <main className='content'>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Tech></Tech>
    </main>
  )
};

export default Main;