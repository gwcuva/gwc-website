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
            hackathonNavbar(where:{year:2023}) {
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
        <a href="#About" className="navbartext" >About</a>
        <a href="#Jumpstart" className="navbartext" >Jumpstart</a>
        <a href="#Schedule" className="navbartext">Schedule</a>
        <a href="#Prizes" className="navbartext">Prizes</a>
        <a href="#Speakers" className="navbartext">Speakers</a>
        <a href="#Location" className="navbartext">Location</a>
        <a href="#FAQ" className="navbartext">FAQ</a>
        <a href="#Sponsors" className="navbartext">Sponsors</a>
        <a href="#SponsorshipProspectus" className="navbartext">Sponsorship</a>
        <a href="#Newsletter" className="navbartext">Newsletter</a>
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