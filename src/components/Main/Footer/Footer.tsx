import React from 'react';
import Contact from './Contact';
import Links from './Links';
import footerWaves from '../../../assets/images/footer-wave.svg'
import logo from '../../../assets/images/gwcuva-logo.png'
//import {isMobile} from 'react-device-detect';

// TODO: Add top graphic (should be same as header, but flipped)
// TODO: Add logo
// TODO: Add contact
// TODO: Add links (Brand Manual should redirect to Figma since we haven't coded it)


function Footer() {
  return (
    <div>
      <img src={footerWaves} style={{ transform: 'rotate(180deg)', marginBottom:-1}}/>
      <div className="bg-orange d-flex flex-row" style={{paddingBottom: 100, paddingTop: 60}}>
        <div className="col-4">
          <img src={logo} style={{ height: 80, paddingLeft:50 }}alt="Girls Who Code at the University of Virginia logo"/>
        </div>
        <div className="col-2 text-white">
          <Contact />
        </div>
        <div className="col-2 text-white">
          <Links />
        </div>
      </div>
    </div>
  
   
  );
}

export default Footer;
