import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Arrow from '../../../assets/images/arrow-right.svg';
import {isMobile} from 'react-device-detect';

interface Props {
  id: string;
}

function DiscordInvite(props: Props) {
  return (
    <Row id={props.id} className="justify-content-center">
      <Col lg={6} md={8} sm={10} xs={11}>
        <h3 className="text-turq">Want to join Girls Who Code at UVA?</h3>
        <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noopener noreferrer" className = "remove-underline">
          <h4 className="text-peacock mono discordinvite">
            Join our Discord server <img src={Arrow} width={isMobile ? "41px" : "72px"} alt="Orange wave saying 'Get Started'" />
          </h4>
        </a>
      </Col>
    </Row>
  );
}

export default DiscordInvite;
