import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <div className='content'>
      <main className='main'>
        <Promo />
        <AboutProject />
        <Tech />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default Main;

