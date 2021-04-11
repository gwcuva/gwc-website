import React from 'react';

function Navbar() {
  return (
    <nav className="bg-orange d-flex flex-row pr-2 pt-3 pb-3 pl-3 justify-content-between">
      {/* TODO: Make this image work, also replace with full-navy image */}
      <img src="../../assets/images/logo-black-white-horizontal.png" alt="Girls Who Code at the University of Virginia logo"/>
      <a href="/hack" target="_blank" className="mono text-white interactive">Girls Hoo Hack</a>
    </nav>
  );
}

export default Navbar;
