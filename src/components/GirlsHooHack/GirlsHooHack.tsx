import React from 'react';
import About from './About/About';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
import JumpStart from './JumpStart/JumpStart';
import Prizes from './Prizes/Prizes';
import Schedule from './Schedule/Schedule';
import Sponsors from './Sponsors/Sponsors';
import {BrowserView, isMobile, MobileView} from 'react-device-detect';

function GirlsHooHack() {
  return (
    <div>
      <BrowserView>
        <Header id="Header"/>
      </BrowserView>
      <MobileView>
        <MobileHeader id="MobileHeader"/>
      </MobileView>
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
