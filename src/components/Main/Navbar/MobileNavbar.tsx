import React from 'react';
import Logo from '../../../assets/images/peacock-logo.svg'

function MobileNavbar() {

  function toggleMenu() {
    console.log("Menu toggled");
  }

  return (
    <nav className="bg-orange d-flex flex-row pr-2 pt-3 pb-3 pl-3 justify-content-between align-items-center">
      <img src={Logo} width="112px" height="44px" alt="Girls Who Code at the University of Virginia logo"/>
      <button onClick={() => toggleMenu()} className="mono text-white interactive pr-3 button-unstyled">Menu</button>
    </nav>
  );
}

export default MobileNavbar;
