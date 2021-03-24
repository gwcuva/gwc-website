import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Links from './Links';

// TODO: Add top graphic (should be same as header, but flipped)
// TODO: Add logo
// TODO: Add contact
// TODO: Add links (Brand Manual should redirect to Figma since we haven't coded it)

function NavCircle() {
  return (
    <div>
      <img src="#" alt="Girls Who Code at the University of Virginia logo" />
      <Contact />
      <Links />
    </div>
  );
}

export default NavCircle;
