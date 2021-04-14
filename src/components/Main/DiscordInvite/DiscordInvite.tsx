import React from 'react';
import {Row, Col} from 'react-bootstrap';
import GetStarted from '../../../assets/images/get started.svg';
import Arrow from '../../../assets/images/arrow-right.svg';
import {isMobile} from 'react-device-detect';

// TODO: Add text and link
// TODO: Add graphic at the end of the page
interface Props {
  id: string;
}

function DiscordInvite(props: Props) {
  return (
    <div id={props.id}>
      <Row>
        <Col>
          <h3 className="text-turq pl-5 ml-5">Want to join Girls Who Code at UVA?</h3>
          <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noopener noreferrer"><h4 className="text-peacock pl-5 ml-5">
            Join our Discord <br />server <img src={Arrow} alt="Orange wave saying 'Get Started'" /></h4></a>
          <img src={GetStarted} alt="Orange wave saying 'Get Started'" />
        </Col>
      </Row>
    </div>
  );
}

export default DiscordInvite;
