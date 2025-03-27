import NavbarCF from './NavbarCF/NavbarCF';
import Header from './Header/Header';
import MobileHeader from './Header/MobileHeader';
import About from './About/About';
import Location from './Location/Location';
import Signup from './Signup/Signup';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';
import {BrowserView, MobileView} from 'react-device-detect';
import Sponsors from './Sponsors/Sponsors';

function CareerFair2025() {
  return (
    <div className="overflow-x-hidden">
      <BrowserView>
        <NavbarCF />
        <Header id="Header"/>
      </BrowserView>
      <MobileView>
        <MobileHeader id="MobileHeader"/>
      </MobileView>
      <div className="overflow-hidden">
        <About />
        <Location />
        <Signup />
        <Sponsors />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default CareerFair2025;
