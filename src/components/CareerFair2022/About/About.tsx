import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function About() {
  return (
  <Row className="bg-hack-grey justify-content-center py-5"id="CFAbout">
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
      <h2 className="text-orange hack">About</h2>
      <Row className={isMobile ? "" : "my-5"}>
        <Col md={4} xs={12} className={isMobile ? "my-3" : "mr-5"}>
          <h3 className="mono text-peach hack mb-4">Girls Hoo Code Career Fair</h3>
          <p>The Girls Hoo Code Career Fair is a hybrid 4 hour Career Fair hosted by Girls Who Code at UVA that aims to help students network with companies looking for interns/part-time/full-time employees. We will have a career panel and 1:1 sessions for students to connect with company representatives.</p> 
          <p>Students of all majors, years, and gender identities that are interested in tech, commerce/business, UI/UX design, game development, data science, software/hardware engineering, and more are welcome to attend. We plan to have companies like JP Morgan Chase, Epic, IDExcel, and AWS attending. </p>
        </Col>
        <Col md={4} xs={12}>
          <h3 className="mono text-peach hack mb-4">GWC @ UVA</h3>
          <p>Girls Who Code at the University of Virginia (UVA) is a College Loop of the nationwide Girls Who Code nonprofit organization. GWC at UVA aims to close the gender gap in technology by creating opportunities for young women to explore technology.</p>
        </Col>
      </Row>
    </Col>
  </Row>
  );
}

export default About;
