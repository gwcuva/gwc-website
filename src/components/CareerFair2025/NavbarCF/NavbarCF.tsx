import { Row } from 'react-bootstrap';
import Logo from '../../../assets/images/peacock-logo.svg';
import SignupBanner from '../../../assets/images/signup-banner.png';
import SignupBannerOrange from '../../../assets/images/signup-orange.png';

function NavbarCF() {
  return (
    <nav
      className="bg-transparent d-flex justify-content-between align-items-center position Navbar"
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <img
          src={Logo}
          style={{ marginTop: '1%' }}
          width="208px"
          height="60px"
          alt="Girls Who Code at the University of Virginia logo"
        />
        <div style={{ marginTop: '1%', paddingLeft: '20px' }}>
          <a href="#About" className="navbartext">
            About
          </a>
          <a href="#Location" className="navbartext" style={{ marginLeft: '20px' }}>
            Location
          </a>
          <a href="#FAQ" className="navbartext" style={{ marginLeft: '20px' }}>
            FAQ
          </a>
          <a href="#Sponsors" className="navbartext" style={{ marginLeft: '20px' }}>
            Sponsors
          </a>
        </div>
      </div>
      <div className="d-flex align-items-center" style={{ paddingRight: '20px' }}>
        <Row className="banners">
          <a
            href="https://forms.gle/K5bZvcLtMzQ5q9Nq5"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="signupbanner"
              src={SignupBanner}
              alt="Signup banner"
              width="80"
              height="155"
              onMouseOver={(e) => (e.currentTarget.src = SignupBannerOrange)}
              onMouseOut={(e) => (e.currentTarget.src = SignupBanner)}
            />
          </a>
        </Row>
      </div>
    </nav>
  );
}

export default NavbarCF;
