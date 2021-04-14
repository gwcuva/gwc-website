import React, { useState } from 'react';
import Logo from '../../../assets/images/peacock-logo.svg';
import ReactModal from 'react-modal';
import { Col, Row } from 'react-bootstrap';
import { X } from 'react-feather';
import Discord from '../../../assets/images/discord-logo.svg';
import Instagram from '../../../assets/images/instagram-logo.svg';

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
          <div className="pr-4 pt-5 pb-3">
            <Row className="justify-content-end pb-4">
              <a href='#stats' onClick={() => toggleModal()} className="mono text-peacock interactive">the gap</a>
            </Row>
            <Row className="justify-content-end pb-4">
              <a href='#about' onClick={() => toggleModal()} className="mono text-peacock interactive">the mission</a>
            </Row>
            <Row className="justify-content-end">
              <a href='#team' onClick={() => toggleModal()} className="mono text-peacock interactive">the team</a>
            </Row>
          </div>
          <Row className="justify-content-end pr-3 mt-3">
            <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noreferrer" onClick={() => toggleModal()}>
              <img src={Discord} width="28px" alt="Discord logo"/>
            </a>
            <a href="https://instagram.com/gwcuva" target="_blank" rel="noreferrer" onClick={() => toggleModal()}>
              <img src={Instagram} width="28px" alt="Instagram logo" className="ml-4"/>
            </a>
          </Row>
        </Col>
      </ReactModal>
    </nav>
  );
}

export default MobileNavbar;
