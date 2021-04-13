import React from 'react';
import {Row, Col} from 'react-bootstrap';

function DiscordInvite() {
  return (
      <Row>
        <Col sm={12}>
          <h4 className="text-turq pl-5 ml-5">Want to join Girls Who Code at UVA?</h4>
          <a href="https://discord.gg/D8knkzNM8E" target="_blank"><h2 className="text-peacock discord pl-5 ml-5">Join our Discord <br />server ---{">"}</h2></a>
          <img src="get started.svg" alt="Orange wave saying 'Get Started'" />
        </Col>
      </Row>
  );
}

export default DiscordInvite;
