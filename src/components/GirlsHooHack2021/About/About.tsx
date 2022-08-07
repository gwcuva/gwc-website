import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { request } from 'graphql-request';

function About() {
  const [description, setDescription] = useState([{'id': '', 'ghhDescription': '', 'gwcDescription': ''}]);
  let ghhDescription = [];
  let gwcDescription = [];
  
  useEffect(() => {
    const fetchDescriptions = async () => {
      const { hackathonAbouts } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonAbouts(where: { year: 2021 }) {
              id
              ghhDescription
              gwcDescription
              year
            }
          }
        `
      );
      setDescription(hackathonAbouts);
    };
    fetchDescriptions();
  }, []);

  ghhDescription = description[0].ghhDescription.split("\n");
  gwcDescription = description[0].gwcDescription.split("\n");

  return (
  <Row className="bg-hack-grey justify-content-center py-5"id="About">
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
      <h2 className="text-orange hack" >About</h2>
      <Row className={isMobile ? "" : "my-5"}>
        <Col md={4} xs={12} className={isMobile ? "my-3" : "mr-5"}>
          <h3 className="mono text-peach hack mb-4">Girls Hoo Hack</h3>
          {ghhDescription.map((description, index) => 
                    <p key={index}>{description}</p>)}
        </Col>
        <Col md={4} xs={12}>
          <h3 className="mono text-peach hack mb-4">GWC @ UVA</h3>
          {gwcDescription.map((description, index) => 
                    <p key={index}>{description}</p>)}
        </Col>
      </Row>
    </Col>
  </Row>
  );
}

export default About;
