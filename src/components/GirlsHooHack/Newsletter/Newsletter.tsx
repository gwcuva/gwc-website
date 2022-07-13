import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { request } from 'graphql-request';

function Newsletter() {
  const [name, setName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`You have signed up for the newsletter!`)
  }

  return (
    <form>
      <Row className="justify-content-center bg-hack-grey py-5" id="FAQ">
          <Col md={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
            <h2 className="text-orange hack">Newsletter</h2>
            <label>
              <p className="mono font-weight-bold">Enter your email:
              <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              </p>
            </label>
            <button onClick={handleSubmit} className="link-button" type="submit">
              Submit
            </button>
          </Col>
      </Row>
    </form>
  )
}


export default Newsletter;

