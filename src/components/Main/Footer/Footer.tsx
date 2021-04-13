import React from 'react';
import Contact from './Contact';
import Links from './Links';

// TODO: Add top graphic (should be same as header, but flipped)
// TODO: Add logo
// TODO: Add contact
// TODO: Add links (Brand Manual should redirect to Figma since we haven't coded it)
interface Props {
  id: string;
}

function Footer(props: Props) {
  return (
    <div id={props.id}>
      <img src="#" alt="Girls Who Code at the University of Virginia logo" />
      <Contact />
      <Links />
    </div>
  );
}

export default Footer;
