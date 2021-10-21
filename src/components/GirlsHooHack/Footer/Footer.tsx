import blueWaves from '../../../assets/images/footerWaveGHH.png';
import whiteLogo from '../../../assets/images/whitelogo.png';
import GHHLogo from '../../../assets/images/logo_ghh.svg';
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
      <Row className={`${isMobile ? "footerLogoMobile" : "footerLogoDesktop"} position-absolute`}>
        <img src={whiteLogo} 
          width={isMobile ? "125px" : "359px"} height={isMobile ? "39.7px" : "114px"} alt="Girls Who Code at the University of Virginia logo"
        />
        <img src={GHHLogo} className = "pl-n5"
          width={isMobile ? "75px" : "125px"} height={isMobile ? "40px" : "100px"} alt="GHH at the University of Virginia logo"
        />
      </Row>
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
      <Row className = {`${isMobile ? "footerMLHCodeMobile" : "footerMLHCodeDesktop"} position-absolute`}>
        <text className = "text-white p.hack">
        We abide by the &nbsp;
        </text>
        <a className = "footerLink text-white font-weight-bold p.hack" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer noopener"> 
          MLH Code of Conduct 
        </a>
      </Row>
      <img className="w-100 position-relative" src={blueWaves} alt="Blue waves"/>
    </div>
  );
}

export default Footer;
