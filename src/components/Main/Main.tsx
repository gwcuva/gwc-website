import React from 'react';
import {BrowserView, isMobile, MobileView} from 'react-device-detect';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Stats from './Stats/Stats';
import DiscordInvite from './DiscordInvite/DiscordInvite';
import Team from './Team/Team';
import About from './About/About';
import Footer from './Footer/Footer';
import NavCircle from './Navbar/NavCircle';
import MobileNavbar from './Navbar/MobileNavbar';
import HelloWorld from '../../assets/images/hello-world.svg';
import MobileHelloWorld from '../../assets/images/mobile-hello-world.svg';

function Main() {
  return (
    <div>
      <BrowserView>
        <Navbar />
        <NavCircle />
      </BrowserView>
      <MobileView>
        <MobileNavbar />
      </MobileView>
      <div className="overflow-auto">
        <Header id="header"/>
        <Stats id="stats"/>
        <img src={isMobile ? MobileHelloWorld : HelloWorld} alt="Hello World banner" />
        <About id="about"/>
        <DiscordInvite id="discord-invite"/>
        <Team id="team"/>
        <Footer id="footer"/>
      </div>
    </div>
  );
}

export default Main;
