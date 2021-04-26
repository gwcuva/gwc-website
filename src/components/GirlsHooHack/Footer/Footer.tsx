import React from 'react';
import blueWaves from '../../../assets/images/ghh-footer-waves.svg';
import whiteLogo from '../../../assets/images/white-logo.svg';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
 
function Footer() {
  return (
    <div className="bg-peacock">
      <img src={whiteLogo} width="359px" height="114px" alt="logo"/>
      <img src={blueWaves} alt="" style={{width: "100%"}}/>
    </div>
  );
}

export default Footer;
