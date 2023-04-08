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
import {Row, Col} from 'react-bootstrap';
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
        <a href="https://discord.gg/bFX5nTAxVz" target="_blank" rel="noreferrer noopener">
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
        {!isMobile &&  <Col className="text-white" style={{marginLeft:50}}>
          Contact
          <Row className="text-white">
            <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive">gwcuva@gmail.com</a>
          </Row>
          <Row className="text-white"> 
          <a href="mailto:girlshoohack@gmail.com" className="mono text-white interactive">girlshoohack@gmail.com</a>
          </Row>
        </Col>}
        {!isMobile && <Col className="text-white" style={{marginLeft:50}}> 
          <Row>
            GHH 2021 Website: 
          </Row>
          <Row>
            <a href="/hack2021" target="_blank" rel="noreferrer noopener" className="mono text-white interactive pr-5 pr-2">hack2021</a>
          </Row>
        </Col>}
      </Row>
      <Row className = {`${isMobile ? "footerMLHCodeMobile" : "footerMLHCodeDesktop"} position-absolute`}>
        <text className = "text-white p.hack">
        We abide by the &nbsp;
        </text>
        <a className = "footerLink text-white font-weight-bold p.hack" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer noopener"> 
          MLH Code of Conduct 
        </a>
        <text className = "text-white p.hack mt-3" >
            Although this organization has members who are University of Virginia students and may have, University employees associated or engaged in its activities and affairs,
        </text>
        <text className = "text-white p.hack mt-3" >
            the organization is not a part of or an agency. It is a separate and independent organization, which is responsible for and manages its own activities and affairs.
        </text>
        <text className = "text-white p.hack mt-3" >
            The University does not direct, supervise or control the organization and is not responsible for the organization’s contracts, acts or omissions.
        </text>
      </Row>
      {isMobile && <div className="footerEmailMobileColumn">
          Contact
          <div className="footerEmailMobile">  
            <a href="mailto:gwcuva@gmail.com" className="footerEmailMobile" style={{fontSize: "0.7rem"}}>gwcuva@gmail.com</a>
          </div>
          <div className="footerEmailMobile"> 
            <a href="mailto:girlshoohack@gmail.com" className="footerEmailMobile" style={{fontSize: "0.7rem"}}>girlshoohack@gmail.com</a>
          </div>
      </div>}
      {isMobile && <Row className="footerArchiveMobileRow"> 
          GHH 2021 Website: 
          <a href="/hack2021" target="_blank" rel="noreferrer noopener" className="footerArchiveMobile">hack2021</a>
      </Row>}
      {isMobile && <Row className="footerArchiveMobileRow"> 
        Although this organization has members who are University of Virginia students and may have, University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency. It is a separate and independent organization, which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization’s contracts, acts or omissions.
      </Row>}
      <img className="w-100 position-relative" src={blueWaves} alt="Blue waves"/>
    </div>
  );
}

export default Footer;
