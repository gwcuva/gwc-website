import Logo from '../../../assets/images/peacock-logo.svg';
import ReactModal from 'react-modal';
import { Col, Row } from 'react-bootstrap';
import { X } from 'react-feather';
import MobileNavContents from './MobileNavContents'
import SignupBanner from '../../../assets/images/signup-banner.png';
import HamburgerIcon from '../../../assets/images/hamburgericon.svg';
import { useEffect,useState } from 'react';
import { request } from 'graphql-request';

function MobileNavbarGHHs() {

    const [menuOpen, setMenuOpen] = useState(false);
  
    function toggleModal() {
      setMenuOpen(!menuOpen)
    }

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
    <nav className="bg-turq d-flex justify-content-between align-items-center">
      <img src={Logo} width="112px" height="44px" alt="Girls Who Code at the University of Virginia logo" className={menuOpen ? "hidden" : "pl-3"}/>

      <Row className='mr-0 pr-0'>
        <Col xs={12} className='mr-0 pr-0'>
          <button className= {`pr-2 button-unstyled ${menuOpen && "hidden"}`} onClick={() => toggleModal()}>
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
              <button className="mono text-white button-unstyled pr-2" onClick={() => toggleModal()}><X color="white" size={40}/></button>
            </Col>
            <Col xs={3}>
              <a className="pr-5" href={navbar.registration} target="_blank" rel="noreferrer noopener">
                  <img className="mobilesignupbanner" src={SignupBanner} alt="Signup banner" width="55" height="110"/>
              </a>
            </Col>
          </Row>
          <MobileNavContents toggle={() => toggleModal()} />
        </Col>
      </ReactModal>
    </nav>
    );
}

export default MobileNavbarGHHs;