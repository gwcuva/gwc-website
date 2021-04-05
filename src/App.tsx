import React from 'react';
import Navbar from './components/Main/Navbar/Navbar';
import Header from './components/Main/Header/Header';
import Stats from './components/Main/Stats/Stats';
import DiscordInvite from './components/Main/DiscordInvite/DiscordInvite';
import Team from './components/Main/Team/Team';
import About from './components/Main/About/About';
import Footer from './components/Main/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Stats />
      <About />
      <DiscordInvite />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
