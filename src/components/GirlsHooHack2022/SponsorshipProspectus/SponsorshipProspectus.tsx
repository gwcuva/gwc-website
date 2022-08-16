import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function SponsorshipProspectus(): JSX.Element {

  return (
    <Row className={`bg-white justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack">Sponsorship Prospectus</h2>
        <Row className={isMobile ? "" : "mt-4 mb-5"}>
          <Col md={10} xs={11} className={isMobile ? "my-3" : "mr-5"}>
            <p>Coming Soon!</p>
            {/*<h3 className="mono text-peach mt-4 mb-4" white-space="pre">Interested in sponsoring us? Check out our&nbsp;
              <a href="https://drive.google.com/file/d/1zCGhSBKaAHCGX-zT2KnA7yCuNUpgtfoN/view" 
                target="_blank" rel="noreferrer noopener" className="hoverColor">
                Sponsorship Prospectus
              </a>
              !
  </h3>*/}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SponsorshipProspectus;
