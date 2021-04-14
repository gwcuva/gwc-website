import React from 'react';
import {Row, Col} from 'react-bootstrap'
import styled from 'styled-components';
import instaLogo from '../../../assets/images/instagram-logo.svg'
import discordLogo from '../../../assets/images/discord-logo.svg'
import circle from '../../../assets/images/circle.svg'

// TODO: Add three links 
// TODO: (if needed in a future PR) depending on scroll position, change the color of circle border


function NavCircle() {
  return (
    <div id = "navCircle" className = "img sticky-top float-right" >
      <div style={{ backgroundImage:`url(${circle})`, width:'303px', height:'303px', position: 'sticky',}} className = "img sticky-top float-right">
      <Col className="">
        <Row  className="pt-20 pb-3 d-flex justify-content-center">
        <a href="./Stats/Stats.tsx" target="_blank"  rel='noreferrer noopener' className="mono row text-peacock">the gap</a>
        </Row>
        <Row className="pb-3 d-flex justify-content-center">
        <a href="./About/About.tsx" target="_blank" rel='noreferrer noopener' className="mono row text-peacock">the mission</a><br/>
        </Row>
        <Row className="pb-3 d-flex justify-content-center"> 
        <a href="./Team/Team.tsx" target="_blank" rel='noreferrer noopener' className="mono row text-peacock">the team</a><br/>
        </Row>
        <Row className="pb-3 d-flex justify-content-center">
        <a href="https://www.instagram.com/gwcuva/?hl=en" target="_blank" rel="noreferrer noopener"><img src={instaLogo} alt="Instagram"/>
      </a>
      <a href="https://discord.gg/PmER5Fvp" target="_blank" rel="noreferrer noopener"><img src={discordLogo} alt="Discord" />
      </a>
        </Row>
      </Col>
      
      </div>
      
    </div>
  );
}

export default NavCircle;
