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
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
 
function Footer() {
  return (
    <div className="bg-peacock">
      <Row className={`${isMobile ? "footerLogoMobile" : "footerLogoDesktop"} position-absolute`}>
        <img src={whiteLogo} 
          width={isMobile ? "125px" : "359px"} height={isMobile ? "39.7px" : "114px"} alt="Girls Who Code at the University of Virginia logo"
        />
      </Row>
      <Row className={`position-absolute ${isMobile ? "footerIconRowMobile" : "footerIconRowDesktop"}`}>
        <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive">
          <img src={email} className={`${isMobile ? "mt-n1 footerIconMobile" : "footerIconDesktop"} normIcon`} alt="Email icon"/>
          <img src={emailPeach} className={`${isMobile ? "mt-1 footerIconMobile" : "footerIconDesktop"} hovIcon`} alt="Email icon"/>
        </a>
        <a href="https://www.instagram.com/gwcuva/" target="_blank" rel="noreferrer noopener">
          <img src={instagram} className={`${isMobile ? "footerIconMobile" : "footerIconDesktop"} normIcon`} alt="Instagram icon"/>
          <img src={instagramPeach} className={`${isMobile ? "mt-1 footerIconMobile" : "footerIconDesktop"} hovIcon`} alt="Instagram icon"/>
        </a>
        <a href="https://discord.gg/a5EV32Jp" target="_blank" rel="noreferrer noopener">
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
        {!isMobile && <Col className="text-white" style={{marginLeft:50}}> 
          <Row>
            GWC Career Fair 2022 Website:
          </Row>
          <Row>
            <a href="/" target="_blank" rel="noreferrer noopener" className="mono text-white interactive pr-5 pr-2">careerfair2022</a>
          </Row>
        </Col>}
      </Row>
      {isMobile && <Row className="footerArchiveMobileRow"> 
          GWC Career Fair 2022 Website: 
          <a href="/" target="_blank" rel="noreferrer noopener" className="footerArchiveMobile">careerfair2022</a>
      </Row>}
      <img className="w-100 position-relative" src={blueWaves} alt="Blue waves"/>
    </div>
  );
}

export default Footer;
