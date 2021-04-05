import React from 'react';
import About from './About/About';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import JumpStart from './JumpStart/JumpStart';
import Prizes from './Prizes/Prizes';
import Schedule from './Schedule/Schedule';
import Sponsors from './Sponsors/Sponsors';

function GirlsHooHack() {
  return (
    <div>
      <Header />
      <About />
      <JumpStart />
      <Schedule />
      <Prizes />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default GirlsHooHack;
