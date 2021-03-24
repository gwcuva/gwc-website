import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-family: Roboto Mono;
  font-size: 16pt;
`

function Navbar() {
  return (
    <Navigation>
      {/* TODO: Make this image work, also replace with full-navy image */}
      <img src="../../assets/logo-black-white-horizontal.png" alt="Girls Who Code at the University of Virginia logo"/>
      <StyledLink href="#" target="_blank" className="mono text-white">Girls Hoo Hack</StyledLink>
    </Navigation>
  );
}

export default Navbar;
