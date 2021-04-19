import React, { useState } from 'react';
import Logo from '../../../assets/images/peacock-logo.svg';
import ReactModal from 'react-modal';
import { Col, Row } from 'react-bootstrap';
import { X } from 'react-feather';
import NavContents from './NavContents';

function MobileNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleModal() {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-orange d-flex flex-row pr-2 pt-3 pb-3 pl-3 justify-content-between align-items-center">
      <img src={Logo} width="112px" height="44px" alt="Girls Who Code at the University of Virginia logo" className={menuOpen ? "hidden" : ""}/>
      <button className={`mono text-white interactive pr-3 button-unstyled ${menuOpen && "hidden"}`} onClick={() => toggleModal()}>Menu</button>
      <ReactModal 
        appElement={document.getElementById('root') as HTMLElement}
        isOpen={menuOpen} 
        className="bg-orange full-screen" 
        contentLabel="Menu">
        <Col>
          <Row className="pr-2 pt-3 pb-4 pl-3 justify-content-between align-items-center">
            <img src={Logo} width="112px" height="44px" alt="Girls Who Code at the University of Virginia logo" className="back"/>
            <button className="mono text-white pr-3 button-unstyled" onClick={() => toggleModal()}><X color="white" size={24} /></button>
          </Row>
          <NavContents toggle={() => toggleModal()} />
        </Col>
      </ReactModal>
    </nav>
  );
}

export default MobileNavbar;
