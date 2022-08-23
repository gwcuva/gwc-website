import {Row} from 'react-bootstrap'
import Logo from '../../../assets/images/peacock-logo.svg'
import SignupBanner from '../../../assets/images/signup-banner.png';
import SignupBannerOrange from '../../../assets/images/signup-orange.png';
import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

function NavbarGHH() {

  const [navbar, setNavbar] = useState({'registration': '', 'mlhbanner': {'url': ''}, 'mlhwebsite': ''});

  useEffect(() => {
    const fetchNavbar = async () => {
      const { hackathonNavbar } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonNavbar(where:{year:2022}) {
              registration
              mlhbanner{
                url
              }
              mlhwebsite
            }
          }
        `
      );
      setNavbar(hackathonNavbar);
    };

    fetchNavbar();
  }, []);

  return (
    <nav className="bg-turq d-flex justify-content-between align-items-center Navbar">
      <img src={Logo} width="208px" height="60px" alt="Girls Who Code at the University of Virginia logo"/>
      <Row>
      <Row className = "navlinks">
        <a href="#About" className="mono text-white interactive pr-5 pr-2">About</a>
        <a href="#Jumpstart" className="mono text-white interactive pr-5 pr-2">Jumpstart</a>
        <a href="#Schedule" className="mono text-white interactive pr-5 pr-2">Schedule</a>
        <a href="#Prizes" className="mono text-white interactive pr-5 pr-2">Prizes</a>
        <a href="#Speakers" className="mono text-white interactive pr-5 pr-2">Speakers</a>
        <a href="#Location" className="mono text-white interactive pr-5 pr-2">Location</a>
        <a href="#FAQ" className="mono text-white interactive pr-5 pr-2">FAQ</a>
        <a href="#Sponsors" className="mono text-white interactive pr-5 pr-2">Sponsors</a>
      </Row>
      <Row className="banners">
          <a href={navbar.registration} target="_blank" rel="noreferrer noopener">
            <img className="signupbanner pr-2" src={SignupBanner} alt="Signup banner" width="80" height="155"
            onMouseOver={e => (e.currentTarget.src = SignupBannerOrange)}
            onMouseOut={e => (e.currentTarget.src = SignupBanner)}
            />
          </a>
          <a href={navbar.mlhwebsite} target="_blank" rel="noreferrer noopener">
            <img className="mlhbanner" src={navbar.mlhbanner.url} alt="Major League Hacking 2023 Hackathon Season" width="85" height="170"/> 
          </a>
        </Row>
      </Row>
  </nav>
  );
}

export default NavbarGHH;