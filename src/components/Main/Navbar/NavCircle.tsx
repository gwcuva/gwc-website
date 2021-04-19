import React from 'react';
import circle from '../../../assets/images/circle.svg'
import NavContents from './NavContents';

function NavCircle() {
  return (
    <div style={{
      backgroundImage: `url(${circle})`, 
      width:'303px', 
      height:'303px', 
      position: 'fixed', 
      top: 200, 
      right: 100}}>
      <NavContents circle />
    </div>
  );
}

export default NavCircle;
