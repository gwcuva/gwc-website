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
      {/*<div className={`${!isMobile && "pt-6 bg-white"}`}>
        <div className={isMobile ? "ml-3" : "ml-4"}>
          <img 
            src={whiteLogo} className={`${!isMobile && "mb-4"}`} width={isMobile ? "125px" : "359px"} height={isMobile ? "39.7px" : "114px"} 
            alt="logo" style={ isMobile ? {position:'relative', top:'75px'} : {position:'relative', zIndex: 100, top:'370px', left:'100px'} }
          />
          {/*<Image 
            src={whiteLogo} className={`${!isMobile ? "" : ""} position-relative left-50`} width={isMobile ? "125px" : "359px"} 
            height={isMobile ? "39.7px" : "114px"} alt="logo"
          />
          <Row style={ isMobile ? {position:'relative', zIndex: 100, top:'85px', left:'15px'} : {position:'relative', zIndex: 100, top:'370px', left:'115px'} }>
            <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive"><img src={email} className={isMobile ? "w-75 pr-1" : "mr-4"} alt="logo"/></a>
            <a href="https://www.instagram.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={instagram} className={isMobile ? "w-75 mt-1 pr-1" : "mr-4"} alt="logo"/></a>
            <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank" rel="noreferrer noopener"><img src={discord} className={isMobile ? "w-75 mt-1 pr-1" : "mr-4"} alt="logo"/></a>
            <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={facebook} className={isMobile ? "w-75 mt-1 pr-1" : "mr-4"} alt="logo"/></a>
            <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener"><img src={twitter} className={isMobile ? "w-75 mt-1" : "mr-4 pr-1"} alt="logo"/></a>
          </Row>
        </div>
      </div>
      <img className="w-100" src={blueWaves} alt=""/>*/}
      <img className="position-absolute footerLogo" src={whiteLogo} width={isMobile ? "125px" : "359px"} 
        height={isMobile ? "39.7px" : "114px"} alt=""
      />
      <Row className="position-absolute footerIconRow">
        <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive"><img src={email} className={isMobile ? "w-75 pr-1" : "mr-4"} alt="logo"/></a>
        <a href="https://www.instagram.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={instagram} className="mr-4" alt="logo"/></a>
        <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank" rel="noreferrer noopener"><img src={discord} className="mr-4" alt="logo"/></a>
        <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={facebook} className="mr-4" alt="logo"/></a>
        <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener"><img src={twitter} className="mr-4" alt="logo"/></a>
      </Row>
      <img className="w-100 position-relative" src={blueWaves} alt=""/>
    </div>
  );
}

export default Footer;
