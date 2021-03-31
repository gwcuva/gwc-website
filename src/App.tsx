import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Stats from './components/Stats/Stats';
import DiscordInvite from './components/DiscordInvite/DiscordInvite';
import Team from './components/Team/Team';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

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
