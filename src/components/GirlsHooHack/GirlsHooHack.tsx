import Header from './Header/Header';
import NavbarGHH from './NavbarGHH/NavbarGHH';
import MobileHeader from './Header/MobileHeader';
import About from './About/About';
import JumpStart from './JumpStart/JumpStart';
//import Prizes from './Prizes/Prizes';
import Schedule from './Schedule/Schedule';
import Speakers from './Speakers/Speakers';
import Location from './Location/Location';
import FAQ from './FAQ/FAQ';
import Sponsors from './Sponsors/Sponsors';
import SponsorshipProspectus from './SponsorshipProspectus/SponsorshipProspectus';
//import Prizes from './Prizes/Prizes';
import {BrowserView, MobileView} from 'react-device-detect';
import Waves from '../../assets/images/hack-header-mobile-wave.svg';
import Footer from './Footer/Footer';

function GirlsHooHack() {
  return (
    <div className="overflow-auto">
      <BrowserView>
        <NavbarGHH />
        <Header id="Header"/>
      </BrowserView>
      <MobileView>
        <MobileHeader id="MobileHeader"/>
        <img src={Waves} style={{marginTop:"-215px", marginBottom:"-120px"}} width = "100%" alt="Orange wave" />
      </MobileView>
      <div  className="overflow-hidden">
        <About />
        <JumpStart />
        <Schedule />
        <Speakers />
        <Location />
        <FAQ />
        <Sponsors />
        <SponsorshipProspectus />
        <Footer />
      </div>
    </div>
  );
}

export default GirlsHooHack;
