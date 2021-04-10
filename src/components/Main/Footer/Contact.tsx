import React from 'react';

// TODO: Add top graphic (should be same as header, but flipped)
// TODO: Add logo
// TODO: Add contact
// TODO: Add links (Brand Manual should redirect to Figma since we haven't coded it)

function Contact() {
  return (
    <div>
      <h5>Contact</h5>
      <p>gwcuva@gmail.com</p>
      <div className="row">
        <a href="https://www.instagram.com/gwcuva/" target="_blank"><img src="/src/assets/images/instagram-icon.svg" alt="Instagram icon"/></a>
        <a href="https://discord.com/invite/rKbWyuDNyG" target="_blank"><img src="/src/assets/images/discord-icon.svg" alt="Discord icon"/></a>
      </div>
      <div className="row">
        <a href="https://www.facebook.com/gwcuva/" target="_blank"><img src="/src/assets/images/facebook-icon.svg" alt="Facebook icon"/></a>
        <a href="https://twitter.com/gwcuva?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src="/src/assets/images/twitter-icon.svg" alt="Twitter icon"/></a>
      </div>
    </div>
  );
}

export default Contact;
