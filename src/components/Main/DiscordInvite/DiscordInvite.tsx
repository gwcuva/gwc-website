import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Arrow from '../../../assets/images/arrow-right.svg';
import {isMobile} from 'react-device-detect';

interface Props {
  id: string;
}

function DiscordInvite(props: Props) {
  return (
    <Row id={props.id} className="ml-1 justify-content-center">
      <Col sm={10} xs={12}>
        <h3 className="text-turq">Want to join Girls Who Code at UVA?</h3>
        <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noopener noreferrer">
          <h4 className="text-peacock mono">
            Join our Discord server <img src={Arrow} width={isMobile ? "41px" : "72px"} alt="Orange wave saying 'Get Started'" />
          </h4>
        </a>
      </Col>
    </Row>
  );
}

export default DiscordInvite;
