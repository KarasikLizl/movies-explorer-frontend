import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <main className='content'>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Tech></Tech>
      <Portfolio></Portfolio>
    </main>
  )
};

export default Main;