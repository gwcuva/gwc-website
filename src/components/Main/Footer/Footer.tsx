import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Links from './Links';

// TODO: Add top graphic (should be same as header, but flipped)
// TODO: Add logo
// TODO: Add contact
// TODO: Add links (Brand Manual should redirect to Figma since we haven't coded it)

const FooterSection =  styled.section`
  background-image: url(/src/assets/images/main-header-wave.svg);
`;

function Footer() {
  return (
    <FooterSection>
      <div className="row ml-2">
        <div className="col-4">
          <img src="/src/assets/images/logo-black-white-horizontal.png" alt="Girls Who Code at the University of Virginia logo"/>
        </div>
        <div className="col-2">
          <Contact />
        </div>
        <div className="col-2">
          <Links />
        </div>
      </div>
    </FooterSection>
  
   
  );
}

export default Footer;
