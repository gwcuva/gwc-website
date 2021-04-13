import React from 'react';
import discordSocial from '../../../assets/images/discord-icon.svg'
import instagramSocial from '../../../assets/images/instagram-icon.svg'
import facebookSocial from '../../../assets/images/facebook-icon.svg'
import twitterSocial from '../../../assets/images/twitter-icon.svg'

// TODO: Add top graphic (should be same as header, but flipped)
// TODO: Add logo
// TODO: Add contact
// TODO: Add links (Brand Manual should redirect to Figma since we haven't coded it)

function Contact() {
  return (
    <div>
      <h5 style={{paddingBottom: 10}}><strong>Contact</strong></h5>
      <p className="mono">gwcuva@gmail.com</p>
      <div style={{ paddingLeft: 15}}>
        <div className="row" style={{paddingBottom:20, paddingTop:10}}>
          <a href="https://www.instagram.com/gwcuva/" target="_blank"><img src={instagramSocial} alt="Instagram icon" style={{paddingRight:20}}/></a>
          <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank"><img src={discordSocial} alt="Discord icon"/></a>
        </div>
        <div className="row">
          <a href="https://www.facebook.com/gwcuva/" target="_blank"><img src={facebookSocial} alt="Facebook icon" style={{paddingRight:20}}/></a>
          <a href="https://twitter.com/gwcuva?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src={twitterSocial} alt="Twitter icon"/></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
