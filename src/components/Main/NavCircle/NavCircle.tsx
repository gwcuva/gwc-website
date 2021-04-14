import React from 'react';
import styled from 'styled-components';
import instaLogo from '../../../assets/images/instagram-logo.svg'
import discordLogo from '../../../assets/images/discord-logo.svg'

// TODO: Add three links 
// TODO: (if needed in a future PR) depending on scroll position, change the color of circle border

const Circle = () => {
  return (
<svg  
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 303 303"
      overflow="visible"
      preserveAspectRatio="xMinYMin meet"
      
    >
      <circle
        cx={151.5}
        cy={151.5}
        r={125}
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
    <div id = "navCircle" className = "img sticky-top float-right " >
      
      <Circle/>
    
      <a href="../Stats/Stats.tsx" target="_blank"  className="mono row text-peacock">the gap</a><br/>
      <a href="../About/About.tsx" target="_blank"  className="mono row text-peacock">the mission</a><br/>
      <a href="../Team/Team.tsx" target="_blank"  className="mono row text-peacock">the team</a><br/>
      <a href="https://www.instagram.com/gwcuva/?hl=en" target="_blank" rel="noreferrer"><img src={instaLogo} alt="Instagram"/>
      </a>
      <a href="https://discord.gg/PmER5Fvp" target="_blank" rel="noreferrer"><img src={discordLogo} alt="Discord" />
      </a>
      </div>
      
    </div>
  );
}

export default NavCircle;
