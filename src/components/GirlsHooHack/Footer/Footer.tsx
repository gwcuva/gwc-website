import React from 'react';
import blueWaves from '../../../assets/images/footerWaveGHH.png';
import whiteLogo from '../../../assets/images/whitelogo.png';
import email from '../../../assets/images/envelope-solid.svg';
import instagram from '../../../assets/images/instagram-square-brands.svg';
import discord from '../../../assets/images/discord-brands.svg';
import facebook from '../../../assets/images/facebook-f-brands.svg';
import twitter from '../../../assets/images/twitter-brands.svg';
import {Row} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Image from 'react-bootstrap/Image';
 
function Footer() {
  return (
    <div className="bg-peacock">
      <img className={`${isMobile ? "footerLogoMobile" : "position-absolute footerLogoDesktop"}`} src={whiteLogo} 
        width={isMobile ? "125px" : "359px"} height={isMobile ? "39.7px" : "114px"} alt=""
      />
      <Row className={`position-absolute ${isMobile ? "footerIconRowMobile" : "footerIconRowDesktop"}`}>
        <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive"><img src={email} className={`${isMobile ? "mt-n1 footerIconMobile" : "footerIconDesktop"}`} alt="logo"/></a>
        <a href="https://www.instagram.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={instagram} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"}`} alt="logo"/></a>
        <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank" rel="noreferrer noopener"><img src={discord} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"}`} alt="logo"/></a>
        <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={facebook} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"}`} alt="logo"/></a>
        <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener"><img src={twitter} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"}`} alt="logo"/></a>
      </Row>
      <img className="w-100 position-relative" src={blueWaves} alt=""/>
    </div>
  );
}

export default Footer;
