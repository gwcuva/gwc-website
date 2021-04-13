import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Stats from './Stats/Stats';
import DiscordInvite from './DiscordInvite/DiscordInvite';
import Team from './Team/Team';
import About from './About/About';
import Footer from './Footer/Footer';
import NavCircle from './NavCircle/NavCircle';

function Main() {
  return (
    <div>
      <Navbar />
      <NavCircle />
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
