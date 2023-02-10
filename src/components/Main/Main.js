import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <main className='content'>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Tech></Tech>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </main>
  )
};

export default Main;