import React from 'react';
import blueWaves from '../../../assets/images/footerWaveGHH.png';
import whiteLogo from '../../../assets/images/whitelogo.png';
import email from '../../../assets/images/envelope-solid.svg';
import emailPeach from '../../../assets/images/envelope-solid-peach.svg';
import instagram from '../../../assets/images/instagram-square-brands.svg';
import instagramPeach from '../../../assets/images/instagram-square-brands-peach.svg';
import discord from '../../../assets/images/discord-brands.svg';
import discordPeach from '../../../assets/images/discord-brands-peach.svg';
import facebook from '../../../assets/images/facebook-f-brands.svg';
import facebookPeach from '../../../assets/images/facebook-f-brands-peach.svg';
import twitter from '../../../assets/images/twitter-brands.svg';
import twitterPeach from '../../../assets/images/twitter-brands-peach.svg';
import {Row} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
 
function Footer() {
  return (
    <div className="bg-peacock">
      <img className={`${isMobile ? "footerLogoMobile" : "position-absolute footerLogoDesktop"}`} src={whiteLogo} 
        width={isMobile ? "125px" : "359px"} height={isMobile ? "39.7px" : "114px"} alt="Girls Who Code at the University of Virginia logo"
      />
      <Row className={`position-absolute ${isMobile ? "footerIconRowMobile" : "footerIconRowDesktop"}`}>
        <a href="mailto:girlshoohack@gmail.com" className="mono text-white interactive">
          <img src={email} className={`${isMobile ? "mt-n1 footerIconMobile" : "footerIconDesktop"} normIcon`} alt="Email icon"/>
          <img src={emailPeach} className={`${isMobile ? "mt-1 footerIconMobile" : "footerIconDesktop"} hovIcon`} alt="Email icon"/>
        </a>
        <a href="https://www.instagram.com/girlshoohack/" target="_blank" rel="noreferrer noopener">
          <img src={instagram} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"} normIcon`} alt="Instagram icon"/>
          <img src={instagramPeach} className={`${isMobile ? "mt-1 footerIconMobile" : "footerIconDesktop"} hovIcon`} alt="Instagram icon"/>
        </a>
        <a href="https://discord.com/invite/VwGgsvnbKd" target="_blank" rel="noreferrer noopener">
          <img src={discord} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"} normIcon`} alt="Discord icon"/>
          <img src={discordPeach} className={`${isMobile ? "mt-1 footerIconMobile" : "footerIconDesktop"} hovIcon`} alt="Discord icon"/>
        </a>
        <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener">
          <img src={facebook} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"} normIcon`} alt="Facebook icon"/>
          <img src={facebookPeach} className={`${isMobile ? "mt-1 footerIconMobile" : "footerIconDesktop"} hovIcon`} alt="Facebook icon"/>
        </a>
        <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener">
          <img src={twitter} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"} normIcon`} alt="Twitter icon"/>
          <img src={twitterPeach} className={`${isMobile ? "mt-1 footerIconMobile" : "footerIconDesktop"} hovIcon`} alt="Twitter icon"/>
        </a>
      </Row>
      <img className="w-100 position-relative" src={blueWaves} alt="Blue waves"/>
    </div>
  );
}

export default Footer;
