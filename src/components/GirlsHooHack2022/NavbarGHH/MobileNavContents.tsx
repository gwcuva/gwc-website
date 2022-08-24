import { Row } from 'react-bootstrap';
import email from '../../../assets/images/envelope-solid.svg';
import instagram from '../../../assets/images/instagram-square-brands.svg';
import discord from '../../../assets/images/discord-brands.svg';
import facebook from '../../../assets/images/facebook-f-brands.svg';
import twitter from '../../../assets/images/twitter-brands.svg';

interface Props {
  toggle? : () => void;
  circle? : boolean;
}

function MobileNavContents(props: Props) {

  return (
    <div>
      <div className="mobilelinks">
        <Row className="pb-5">
          <a href="#About" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>About</a>
        </Row>
        <Row className="pb-5">
          <a href="#Jumpstart" onClick={props.toggle}  className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Jumpstart</a>
        </Row>
        <Row className="pb-5">
          <a href="#Schedule" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Schedule</a>
        </Row>
        <Row className="pb-5">
          <a href="#Prizes" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Prizes</a>
        </Row>
        <Row className="pb-5">
          <a href="#Speakers" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Speakers</a>
        </Row>
        <Row className="pb-5">
          <a href="#Location" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Location</a>
        </Row>
        <Row className="pb-5">
          <a href="#FAQ" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>FAQ</a>
        </Row>
        <Row className="pb-5">
          <a href="#Sponsors" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Sponsors</a>
        </Row>
        <Row className="pb-5" >
          <a href="#SponsorshipProspectus" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Sponsorship</a>
        </Row>
        <Row className="pb-5">
          <a href="#Newsletter" onClick={props.toggle} className="mono text-white interactive pr-5 pr-2" style={{fontSize: 35, fontWeight: 'bold'}}>Newsletter</a>
        </Row>
      </div>

      <div className="mobilenavfooter pt-4">
        <a href="mailto:girlshoohack@gmail.com" className="mono text-white interactive pl-3" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
          <img src={email} width="28px" alt="Email icon"/>
        </a>
        <a href="https://www.instagram.com/girlshoohack/" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
          <img src={instagram} width="28px" alt="Instagram logo" className="ml-4"/>
        </a>
        <a href="https://discord.gg/bFX5nTAxVz" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
          <img src={discord} width="28px" alt="Discord logo" className="ml-4"/>
        </a>
        <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
          <img src={facebook} width="20px" alt="Facebook logo" className="ml-4"/>
        </a>
        <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
          <img src={twitter} width="28px" alt="Twitter logo" className="ml-4"/>
        </a>
      </div>
    </div>
  );
}

export default MobileNavContents;