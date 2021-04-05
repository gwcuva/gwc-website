import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 16pt;
`

// TODO: Remove styled components and use bootstrap instead

function Navbar() {
  return (
    <nav className="bg-orange d-flex flex-row pr-2 pt-3 pb-3 pl-3 justify-content-between">
      {/* TODO: Make this image work, also replace with full-navy image */}
      <img src="../../assets/images/logo-black-white-horizontal.png" alt="Girls Who Code at the University of Virginia logo"/>
      <StyledLink href="#" target="_blank" className="mono text-white">Girls Hoo Hack</StyledLink>
    </nav>
  );
}

export default Navbar;
