import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <main className='content'>
      <Header color={'color_pink'} buttonHid={'hidden'} menu={'hidden'} />
      <Promo />
      <AboutProject />
      <Tech />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;
