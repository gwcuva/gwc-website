import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { request } from 'graphql-request';
import { Collapse } from 'react-collapse';


function Newsletter() {
  const [name, setName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`You have signed up for the newsletter!`)
  }
  // const buttonStyle = {
  //   border: 0,
  //   backgroundColor: "#43D6B9",
  //   fontFamily: 'Roboto Mono',
  //   color: "#FFF",
  //   fontWeight: 550,
  // }
  // style={buttonStyle}
  
  return (
    <form>
      <Row className="bg-hack-grey justify-content-center py-5"id="Newsletter">
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
          <h2 className="text-orange hack" >Newsletter</h2>
          <Row className={isMobile ? "" : "mt-4 mb-5"}>
            <Col md={10} xs={5} className={isMobile ? "my-3" : "mr-5"}>
            <label>
              <h3 className="mono text-peach mt-4 mb-4">Enter your email:</h3>
            </label >
              <input className="ml-5"
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
            <button onClick={handleSubmit} className="submit-button ml-5" type="submit" >
              Submit
            </button>
            </Col>
            </Row>
          </Col>
      </Row>
    </form>
  )
}


export default Newsletter;

