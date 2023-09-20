import Logo from '../../../assets/images/peacock-logo.svg';
import ReactModal from 'react-modal';
import { Col, Row } from 'react-bootstrap';
import { X } from 'react-feather';
import SignupBanner from '../../../assets/images/signup-banner.png';
import HamburgerIcon from '../../../assets/images/hamburgericon.svg';
import { useEffect,useState } from 'react';
import { request } from 'graphql-request';

import email from '../../../assets/images/envelope-solid.svg';
import instagram from '../../../assets/images/instagram-square-brands.svg';
import discord from '../../../assets/images/discord-brands.svg';
import facebook from '../../../assets/images/facebook-f-brands.svg';
import twitter from '../../../assets/images/twitter-brands.svg';

function MobileNavbarGHHs() {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuClosedHandler = () => {
      setMenuOpen(false);
      document.body.style.overflow = 'unset';
    }
    const menuOpenHandler = () => {
      setMenuOpen(true);
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }
  }

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
    <nav className="bg-turq d-flex justify-content-between align-items-center">
      <img src={Logo} width="112px" height="44px" alt="Girls Who Code at the University of Virginia logo" className={menuOpen ? "hidden" : "pl-3"}/>


      <Row className='mr-0 pr-0'>
        <Col xs={12} className='mr-0 pr-0'>
          <button className= {`pr-2 button-unstyled ${menuOpen && "hidden"}`} onClick={() => menuOpenHandler()}>
            <img className="mobilehamburgericon" src={HamburgerIcon} alt="HamburgerIcon" width="50" height="70"/>
          </button>
          
          <a href={navbar.registration} target="_blank" rel="noreferrer noopener">
              <img className="signupbannermobile" src={SignupBanner} alt="Signup banner" width="55" height="110"/>
          </a>

          <a href={navbar.mlhwebsite} target="_blank" rel="noreferrer noopener">
            <img className="mlhbannermobile pr-0 mr-0" src={navbar.mlhbanner.url} alt="Major League Hacking 2023 Hackathon Season" width="85" height="110"/> 
          </a>
        </Col>
      </Row>

      <ReactModal 
        appElement={document.getElementById('root') as HTMLElement}
        isOpen={menuOpen} 
        className="bg-turq full-screen" 
        contentLabel="Menu">

        <Col>
          <Row className="align-items-center">
            <Col>
              <img src={Logo} width="112px" height="44px" alt="Girls Who Code at the University of Virginia logo" className="back"/>
            </Col>
            <Col xs={2.5}>
              <button className="mono text-white button-unstyled pr-2" onClick={() => {menuClosedHandler()}}><X color="white" size={40}/></button>
            </Col>
            <Col xs={3}>
              <a className="pr-5" href={navbar.registration} target="_blank" rel="noreferrer noopener">
                  <img className="mobilesignupbanner" src={SignupBanner} alt="Signup banner" width="55" height="110"/>
              </a>
            </Col>
          </Row>
          
          <div>
            <div className="mobilelinks">
              <Row className="pb-4">
                <a href="#About" onClick={() => {menuClosedHandler()}} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>About</a>
              </Row>
              <Row className="pb-4">
                <a href="#Jumpstart" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Jumpstart</a>
              </Row>
              <Row className="pb-4">
                <a href="#Schedule" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Schedule</a>
              </Row>
              <Row className="pb-4">
                <a href="#Prizes" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Prizes</a>
              </Row>
              <Row className="pb-4">
                <a href="#Speakers" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Speakers</a>
              </Row>
              <Row className="pb-4">
                <a href="#Location" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Location</a>
              </Row>
              <Row className="pb-4">
                <a href="#FAQ" onClick={() => {menuClosedHandler()}} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>FAQ</a>
              </Row>
              <Row className="pb-4">
                <a href="#Sponsors" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Sponsors</a>
              </Row>
              <Row className="pb-4" >
                <a href="#SponsorshipProspectus" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Sponsorship</a>
              </Row>
              <Row className="pb-4">
                <a href="#Newsletter" onClick={() => {menuClosedHandler()}}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Newsletter</a>
              </Row>
            </div>

            <div className="mobilenavfooter pt-4">
              <a href="mailto:girlshoohack@gmail.com" className="mono text-white interactive pl-3" target="_blank" rel="noreferrer noopener" onClick={() => {menuClosedHandler()}}>
                <img src={email} width="28px" alt="Email icon"/>
              </a>
              <a href="https://www.instagram.com/girlshoohack/" target="_blank" rel="noreferrer noopener" onClick={() => {menuClosedHandler()}}>
                <img src={instagram} width="28px" alt="Instagram logo" className="ml-4"/>
              </a>
              <a href="https://discord.gg/bFX5nTAxVz" target="_blank" rel="noreferrer noopener" onClick={() => {menuClosedHandler()}}>
                <img src={discord} width="28px" alt="Discord logo" className="ml-4"/>
              </a>
              <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener" onClick={() => {menuClosedHandler()}}>
                <img src={facebook} width="20px" alt="Facebook logo" className="ml-4"/>
              </a>
              <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener" onClick={() => {menuClosedHandler()}}>
                <img src={twitter} width="28px" alt="Twitter logo" className="ml-4"/>
              </a>
            </div>
          </div>

        </Col>
      </ReactModal>
    </nav>
    );
}

export default MobileNavbarGHHs;