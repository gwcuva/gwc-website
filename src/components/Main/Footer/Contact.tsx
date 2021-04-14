import React from 'react';
import discordSocial from '../../../assets/images/discord-icon.svg'
import instagramSocial from '../../../assets/images/instagram-icon.svg'
import facebookSocial from '../../../assets/images/facebook-icon.svg'
import twitterSocial from '../../../assets/images/twitter-icon.svg'
import {Row, Col} from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <h3 style={{paddingBottom: 10}}><strong>Contact</strong></h3>
      <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive">gwcuva@gmail.com</a>
      <Col md={10} style={{marginLeft:-15, marginTop:25}}>
          <a href="https://www.instagram.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={instagramSocial} alt="Instagram icon" style={{paddingRight:15, paddingBottom:15}}/></a>
          <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank" rel="noreferrer noopener"><img src={discordSocial} alt="Discord icon" style={{paddingRight:15, paddingBottom:15}}/></a>
          <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={facebookSocial} alt="Facebook icon" style={{paddingRight:15, paddingBottom:15}}/></a>
          <a href="https://twitter.com/gwcuva?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noreferrer noopener"><img src={twitterSocial} alt="Twitter icon" style={{paddingRight:15, paddingTop:5, paddingBottom:20}}/></a>
      </Col>
    </div>
  );
}

export default Contact;
