import NavbarCF from './NavbarCF/NavbarCF';
import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
import About from './About/About';
import Location from './Location/Location';
import Signup from './Signup/Signup';
import FAQ from './FAQ/FAQ';
import Waves from '../../assets/images/hack-header-mobile-wave.svg';
import Footer from './Footer/Footer';
import {BrowserView, MobileView} from 'react-device-detect';

function CareerFair2023() {
  return (
    <div className="overflow-auto">
      <BrowserView>
        <NavbarCF />
        <Header id="Header"/>
      </BrowserView>
      <MobileView>
        <MobileHeader id="MobileHeader"/>
        <img src={Waves} style={{marginTop:"-215px", marginBottom:"-120px"}} width = "100%" alt="Orange wave" />
      </MobileView>
      <div className="overflow-hidden">
        <About />
        <Location />
        <Signup />
        {/*<Schedule />*/}
        {/*<OneOnOneSchedule />*/}
        {/*<Sponsors />*/}
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default CareerFair2023;
