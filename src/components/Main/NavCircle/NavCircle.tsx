import React from 'react';

// TODO: Add circle background
// TODO: Add three links 
// TODO: Add social media links (done)
// TODO: (if needed in a future PR) depending on scroll position, change the color of circle border
// TODO: Make absolute on the page so it follows the screen


const Circle = () => {
  return (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width={303}
      height={303}
      viewBox="0 0 303 303"
      overflow="visible"
    >
      <circle
        cx={151.5}
        cy={151.5}
        r={150}
        fill="none"
        stroke="#43d6b9"
        strokeWidth={3}
        strokeMiterlimit={10}
      />
    </svg>

  )
}

function NavCircle() {
  return (

    <div className="float-right">
      <Circle />
      <a href="#" target="_blank">the gap</a>
      <a href="#" target="_blank">the mission</a>
      <a href="#" target="_blank">the team</a>
      <a href="https://www.instagram.com/gwcuva/?hl=en" target="_blank"><img src="#" alt="Instagram" /></a>
      <a href="https://discord.gg/PmER5Fvp" target="_blank"><img src="#" alt="Discord" /></a>
    </div>
  );
}

export default NavCircle;
