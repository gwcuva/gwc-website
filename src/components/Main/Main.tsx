import React from 'react';
import {BrowserView, isMobile, MobileView} from 'react-device-detect';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Stats from './Stats/Stats';
import DiscordInvite from './DiscordInvite/DiscordInvite';
import Instagram from './Instagram/Instagram';
import Team from './Team/Team';
import About from './About/About';
import Footer from './Footer/Footer';
import NavCircle from './Navbar/NavCircle';
import MobileNavbar from './Navbar/MobileNavbar';
import HelloWorld from '../../assets/images/hello-world.svg';
import MobileHelloWorld from '../../assets/images/mobile-hello-world.svg';
import Waves from '../../assets/images/main-header-wave.svg';
import GetStarted from '../../assets/images/get started.svg';
import ScrollButton from './BackToTop/ScrollButton'
import Photos from './Photos/Photos';
import Newsletter from './Newsletter/Newsletter';

function Main() {
  return (
    <>
    <div>
      <BrowserView>
        <Navbar />
        <NavCircle />
      </BrowserView>
      <MobileView>
        <MobileNavbar />
      </MobileView>
      <div className="overflow-hidden">
        <Header id="header"/>
        <img src={Waves} className="mt-n2" width = "100%" alt="Orange wave" /> 
        <Stats id="stats"/>
        <img src={isMobile ? MobileHelloWorld : HelloWorld} alt="Hello World banner" />
        <About id="about"/>
        <DiscordInvite id="discord-invite"/>
        <Newsletter id="newsletter"/>
        <Photos id="photos" />
        <Instagram id="instagram"/>
        <img src={GetStarted} alt="Orange wave saying 'Get Started'" width="100%"/>
        <Team id="team"/>
        <Footer id="footer"/>
      </div>
    </div>
    <ScrollButton/>
    </>
  );
}

export default Main;
