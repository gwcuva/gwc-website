import React from 'react';
import discordSocial from '../../../assets/images/discord-icon.svg';
import instagramSocial from '../../../assets/images/instagram-icon.svg';
import facebookSocial from '../../../assets/images/facebook-icon.svg';
import twitterSocial from '../../../assets/images/twitter-icon.svg';
import {isMobile} from 'react-device-detect';

function Contact() {
  return (
    <div>
      <h3 className="pb-2"><strong>Contact</strong></h3>
      <a href="mailto:gwcuva@gmail.com" className="mono text-white interactive">gwcuva@gmail.com</a>
      <div className={isMobile ? "row pl-3 pt-4" : "pt-3"}>
          <div className={isMobile ? "" : "row pt-2 pl-3"}>
            <a href="https://www.instagram.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={instagramSocial} alt="Instagram icon" className={isMobile ? "pr-3 pb-3" : "pr-3 pb-3"}/></a>
            <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank" rel="noreferrer noopener"><img src={discordSocial} alt="Discord icon" className={isMobile ? "pr-3 pb-3" : "pr-3 pb-3"}/></a>
          </div>
          <div className={isMobile ? "" : "row pt-2 pl-3"}>
            <a href="https://www.facebook.com/gwcuva/" target="_blank" rel="noreferrer noopener"><img src={facebookSocial} alt="Facebook icon" className={isMobile ? "pr-3 pb-3" : "pr-3 pb-3"}/></a>
            <a href="https://twitter.com/gwcuva" target="_blank" rel="noreferrer noopener"><img src={twitterSocial} alt="Twitter icon" className={isMobile ? "pb-3" : "pr-3 pb-3"}/></a>
          </div>
      </div>
    </div>
  );
}

export default Contact;
