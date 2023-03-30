import {Row} from 'react-bootstrap'
import Logo from '../../../assets/images/peacock-logo.svg'
import SignupBanner from '../../../assets/images/signup-banner.png';
import SignupBannerOrange from '../../../assets/images/signup-orange.png';

function NavbarCF() {
  return (
    <nav className="bg-turq d-flex justify-content-between align-items-center Navbar">
      <img src={Logo} width="208px" height="60px" alt="Girls Who Code at the University of Virginia logo"/>
      <Row>
      <Row className = "navlinks">
        <a href="#CFAbout" className="mono text-white interactive pr-5 pr-2">About</a>
        <a href="#CFLocation" className="mono text-white interactive pr-5 pr-2">Location</a>
        <a href="#CFRegistration" className="mono text-white interactive pr-5 pr-2">Registration</a>
        {/*<a href="#CFSessions" className="mono text-white interactive pr-5 pr-2">Sessions</a>*/}
        {/*<a href="#CFSponsors" className="mono text-white interactive pr-5 pr-2">Sponsors</a>*/}
        <a href="#CFFAQ" className="mono text-white interactive pr-5 pr-2">FAQ</a>
      </Row>
      <Row className="banners">
          <a href="https://forms.gle/tDtGrw5dkKPNB8LG9" target="_blank" rel="noreferrer noopener">
            <img className="signupbanner pr-2" src={SignupBanner} alt="Signup banner" width="80" height="155"
            onMouseOver={e => (e.currentTarget.src = SignupBannerOrange)}
            onMouseOut={e => (e.currentTarget.src = SignupBanner)}
            />
          </a>
        </Row>
      </Row>
  </nav>
  );
}

export default NavbarCF;