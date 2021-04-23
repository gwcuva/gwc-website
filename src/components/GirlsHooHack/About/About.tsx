import React from 'react';
import { Col, Row } from 'react-bootstrap';

function About() {
  return (
  <Row>
    <Col className="ml-5">
      <h3 className="text-orange">About</h3>
      <Row>
        <Col className="col-md-3 mb-5 mt-4">
          <h5 className="text-peach">Girls Hoo Hack</h5>
          <p>Girls Hoo Hack is a virtual 48-hour hackathon hosted by Girls Who Code at UVA that aims to foster a community of diverse thought and skill.</p> 
          <p>Coders of all levels of experience have the opportunity to work together with teams and mentors, attend educational workshops, and code action-oriented projects that reflect innovation, diverse perspectives, and empowerment.</p>
        </Col>
        <Col className="col-md-3 mb-5 mt-4">
          <h5 className="text-peach">GWC@UVA</h5>
          <p>Girls Who Code at the University of Virginia (UVA) is a College Loop of the nationwide Girls Who Code nonprofit organization. GWC at UVA aims to close the gender gap in technology by creating opportunities for young women to explore technology.</p>
        </Col>
      </Row>
    </Col>
  </Row>
  );
}

export default About;
