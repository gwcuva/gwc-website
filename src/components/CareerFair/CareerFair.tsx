import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
import About from './About/About';
import Schedule from './Schedule/Schedule';
import Location from './Location/Location';
import FAQ from './FAQ/FAQ';
import Sponsors from './Sponsors/Sponsors';
import Waves from '../../assets/images/hack-header-mobile-wave.svg';
import Footer from './Footer/Footer';
import {BrowserView, MobileView} from 'react-device-detect';

function CareerFair() {
  return (
    <div className="overflow-auto">
      <BrowserView>
        <Header id="Header"/>
      </BrowserView>
      <MobileView>
        <MobileHeader id="MobileHeader"/>
        <img src={Waves} style={{marginTop:"-215px", marginBottom:"-120px"}} width = "100%" alt="Orange wave" />
      </MobileView>
      <div className="overflow-hidden">
        <About />
        <Location />
        <Sponsors />
        <Schedule />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default CareerFair;
