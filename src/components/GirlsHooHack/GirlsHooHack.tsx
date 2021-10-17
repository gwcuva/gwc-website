import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
import About from './About/About';
import JumpStart from './JumpStart/JumpStart';
import Schedule from './Schedule/Schedule';
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
        <FAQ />
        <Sponsors />
        <SponsorshipProspectus />
        <Footer />
      </div>
    </div>
  );
}

export default GirlsHooHack;
