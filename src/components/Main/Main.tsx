import React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Stats from './Stats/Stats';
import DiscordInvite from './DiscordInvite/DiscordInvite';
import Team from './Team/Team';
import About from './About/About';
import Footer from './Footer/Footer';
import NavCircle from './NavCircle/NavCircle';
import MobileNavbar from './Navbar/MobileNavbar';

function Main() {
  return (
    <div>
      <Navbar />
      <NavCircle />
      <BrowserView>
        <Navbar />
      </BrowserView>
      <MobileView>
        <MobileNavbar />
      </MobileView>
      <Header />
      <Stats />
      <About />
      <DiscordInvite />
      <Team />
      <Footer />
    </div>
  );
}

export default Main;
