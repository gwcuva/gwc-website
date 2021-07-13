import React from 'react';
import blueWaves from '../../../assets/images/footerWaveGHH.png';
import whiteLogo from '../../../assets/images/whitelogo.png';
import email from '../../../assets/images/envelope-solid.svg';
import instagram from '../../../assets/images/instagram-square-brands.svg';
import discord from '../../../assets/images/discord-brands.svg';
import facebook from '../../../assets/images/facebook-f-brands.svg';
import twitter from '../../../assets/images/twitter-brands.svg';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
 
function Footer() {
  return (
    <div>
      <div className="bg-peacock" style={{width:"100%"}}>
        <div className={isMobile ? "" : "pt-6 bg-white"}>
          <div className="ml-4">
            <img src={whiteLogo} className="mb-4" width={isMobile ? "112px" : "359px"} height={isMobile ? "35.57px" : "114px"} alt="logo" style={{position:'relative', zIndex: 100, top:'370px', left:'100px'}}/>
            <Row style={{position:'relative', top:'370px', left:'115px'}}>
              <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive"><img src={email} className="mr-4" alt="logo"/></a>
              <a href="https://www.instagram.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={instagram} className="mr-4" alt="logo"/></a>
              <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank" rel="noreferrer noopener"><img src={discord} className="mr-4" alt="logo"/></a>
              <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={facebook} className="mr-4" alt="logo"/></a>
              <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener"><img src={twitter} className="mr-4" alt="logo"/></a>
            </Row>
          </div>
        </div>
        <img src={blueWaves} alt="" style={{width: "100%", position: 'relative'}}/>
      </div>
    </div>
  );
}

export default Footer;
