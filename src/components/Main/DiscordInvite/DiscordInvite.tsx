import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Arrow from '../../../assets/images/arrow-right.svg';

// TODO: Add text and link
// TODO: Add graphic at the end of the page
interface Props {
  id: string;
}

function DiscordInvite(props: Props) {
  return (
    <Row id={props.id} className="m-4">
      <Col lg={6} md={8} sm={10}>
        <h3 className="text-turq">Want to join Girls Who Code at UVA?</h3>
        <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noopener noreferrer">
          <h4 className="text-peacock mono">
            Join our Discord server <img src={Arrow} alt="Orange wave saying 'Get Started'" />
          </h4>
        </a>
      </Col>
    </Row>
  );
}

export default DiscordInvite;
