//import React from 'react';
import About from './About/About';
import FAQ from './FAQ/FAQ';
//import Footer from './Footer/Footer';
import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
//import JumpStart from './JumpStart/JumpStart';
//import Prizes from './Prizes/Prizes';
//import Schedule from './Schedule/Schedule';
//import Sponsors from './Sponsors/Sponsors';
import {BrowserView, MobileView} from 'react-device-detect';
import Waves from '../../assets/images/hack-header-mobile-wave.svg';

function GirlsHooHack() {
  return (
    <div className="overflow-auto">
      <BrowserView>
        <Header id="Header"/>
      </BrowserView>
      <MobileView>
        <MobileHeader id="MobileHeader"/>
        <img src={Waves} style={{marginTop:"-215px", marginBottom:"-120px"}} width = "100%" alt="Orange wave" />
      </MobileView>
      <About />
      <FAQ />
      {/*
      <JumpStart />
      <Schedule />
      <Prizes />
      <FAQ />
      <Sponsors />
      <Footer />
      */}
    </div>
  );
}

export default GirlsHooHack;
