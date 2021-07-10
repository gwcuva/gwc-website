import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function About() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
  <Row className={`bg-hack-grey justify-content-center py-5`}>
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
      <h2 className="text-orange hack">About</h2>
      <Row className={isMobile ? "" : "my-5"}>
        <Col md={4} xs={12} className={isMobile ? "my-3" : "mr-5"}>
          <h3 className="mono text-peach hack mb-4">Girls Hoo Hack</h3>
          <p>Girls Hoo Hack is a virtual 48-hour hackathon hosted by Girls Who Code at UVA that aims to foster a community of diverse thought and skill.</p> 
          <p>Coders of all levels of experience have the opportunity to work together with teams and mentors, attend educational workshops, and code action-oriented projects that reflect innovation, diverse perspectives, and empowerment.</p>
        </Col>
        <Col md={4} xs={12}>
          <h3 className="mono text-peach hack mb-4">GWC @ UVA</h3>
          <p className="hack">Girls Who Code at the University of Virginia (UVA) is a College Loop of the nationwide Girls Who Code nonprofit organization. GWC at UVA aims to close the gender gap in technology by creating opportunities for young women to explore technology.</p>
        </Col>
      </Row>
    </Col>
  </Row>
  );
}

export default About;
