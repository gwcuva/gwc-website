import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function SponsorshipProspectus() {

  return (
    <Row className={`bg-hack-grey justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack">Sponsorship Prospectus</h2>
        <Row className={isMobile ? "" : "my-5"}>
          <Col md={10} xs={11} className={isMobile ? "my-3" : "mr-5"}>
            <h3 className="mono text-peach mt-4 mb-4">Interested in sponsoring us? Check out our Sponsorship Prospectus!</h3>
            <iframe className="sponsorshipProspectus" title="Sponsorship Prospectus" src="https://cdn.kutasoftware.com/Worksheets/Calc/01%20-%20Limits%20by%20Direct%20Evaluation.pdf"></iframe>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SponsorshipProspectus;
