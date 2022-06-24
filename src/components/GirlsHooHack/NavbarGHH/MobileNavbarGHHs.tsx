import React, { useState } from 'react';
import Logo from '../../../assets/images/peacock-logo.svg';
import ReactModal from 'react-modal';
import { Col, Row } from 'react-bootstrap';
import { X } from 'react-feather';
import MobileNavContents from './MobileNavContents'
import SignupBanner from '../../../assets/images/signup-banner.png';
import HamburgerIcon from '../../../assets/images/hamburgericon.svg';

function MobileNavbarGHHs() {

    const [menuOpen, setMenuOpen] = useState(false);
  
    function toggleModal() {
      setMenuOpen(!menuOpen)
    }
    return (
    <nav className="bg-turq d-flex justify-content-between align-items-center">
      <img src={Logo} width="112px" height="44px" alt="Girls Who Code at the University of Virginia logo" className={menuOpen ? "hidden" : "pl-3"}/>

      <Row>
        <Col xs={16}>
          <a className={`pr-2 ${menuOpen && "hidden"}`} onClick={() => toggleModal()}>
              <img className="mobilehamburgericon" src={HamburgerIcon} alt="HamburgerIcon" width="50" height="70"/>
          </a>
          
          <a className="pr-5" href="https://girls-hoo-hack-2021.devpost.com/" target="_blank" rel="noreferrer noopener">
              <img className="mobilesignupbanner" src={SignupBanner} alt="Signup banner" width="55" height="110"/>
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
              <a className="pr-5" href="https://girls-hoo-hack-2021.devpost.com/" target="_blank" rel="noreferrer noopener">
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