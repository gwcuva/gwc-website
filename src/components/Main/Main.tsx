import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Stats from './Stats/Stats';
import DiscordInvite from './DiscordInvite/DiscordInvite';
import Team from './Team/Team';
import About from './About/About';
import Footer from './Footer/Footer';
import MobileNavbar from './Navbar/MobileNavbar';

import GetStarted from '../../assets/images/get started.svg';
import {isMobile} from 'react-device-detect';

function Main() {
  return (
    <div>
      <BrowserView>
        <Navbar />
      </BrowserView>
      <MobileView>
        <MobileNavbar />
      </MobileView>
      <div className="overflow-auto">
        <Header id="header"/>
        <Stats id="stats"/>
        <About id="about"/>
        <DiscordInvite id="discord-invite"/>
        <img src={GetStarted} alt="Orange wave saying 'Get Started'" width={isMobile ? "150%" : "100%"}/>
        <Team id="team"/>
        <Footer id="footer"/>
      </div>
    </div>
  );
}

export default Main;
