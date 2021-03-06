import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Navbar() {
  return (
    <Navigation>
      {/* TODO: Make this image work, also replace with full-navy image */}
      <img src="../../assets/logo-black-white-horizontal.png" alt="Girls Who Code at the University of Virginia logo"/>
      <a href="#" target="_blank">Girls Hoo Hack</a>
    </Navigation>
  );
}

export default Navbar;
