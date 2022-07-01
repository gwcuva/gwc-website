import {Row} from 'react-bootstrap'
import Logo from '../../../assets/images/peacock-logo.svg'
import MLHBanner from '../../../assets/images/mlh-banner1.png';
import SignupBanner from '../../../assets/images/signup-banner.png';
import SignupBannerOrange from '../../../assets/images/signup-orange.png';

function NavbarGHH() {
  return (
    <nav className="bg-turq d-flex justify-content-between align-items-center Navbar">
      <img src={Logo} width="208px" height="60px" alt="Girls Who Code at the University of Virginia logo"/>
      <Row>
      <Row className = "navlinks">
        <a href="#About" className="mono text-white interactive pr-5 pr-2">About</a>
        <a href="#Jumpstart" className="mono text-white interactive pr-5 pr-2">Jumpstart</a>
        <a href="#Schedule" className="mono text-white interactive pr-5 pr-2">Schedule</a>
        <a href="#FAQ" className="mono text-white interactive pr-5 pr-2">FAQ</a>
        <a href="#Sponsors" className="mono text-white interactive pr-5 pr-2">Sponsors</a>
      </Row>
      <Row className="banners">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdP4XyRDDwPlux5zBcaM7BVx_LXkg0pTQh_ZhHu37cTsancOw/viewform" target="_blank" rel="noreferrer noopener">
            <img className="signupbanner pr-2" src={SignupBanner} alt="Signup banner" width="80" height="155"
            onMouseOver={e => (e.currentTarget.src = SignupBannerOrange)}
            onMouseOut={e => (e.currentTarget.src = SignupBanner)}
            />
          </a>
          <a href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank" rel="noreferrer noopener">
            <img className="MLHBANNER pr-2" src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" width="85" height="152"/> 
          </a>
        </Row>
      </Row>
  </nav>
  );
}

export default NavbarGHH;