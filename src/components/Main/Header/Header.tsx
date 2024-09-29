import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Htmlbg from '../../../assets/images/html-bg-header.svg';

interface Props {
  id: string;
}

function Header(props: Props) {
  return (
    <div id={props.id} className="container-fluid m-0 bg-orange"
      style={{backgroundImage: `url(${Htmlbg})`, 
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px 50px",
              backgroundSize: "contain" }}>

    <Row xs={12} className={isMobile ? "pt-3" : "pt-4"}>
      <Col xs={isMobile ? 1 : 1}></Col>
      <Col>
        <h2 className={isMobile ? "text-peach ml-n3" : "text-peach pl-5 ml-5"}>HELLO WORLD</h2>
      </Col>
    </Row>

    <Row xs={12} className="pb-0">
      <Col xs={2}></Col>
      <Col xs={5}>
        <h1 className={isMobile ? "text-white ml-n3 mt-0 mb-0" : "text-white mt-0 mb-0"}>WE'RE</h1>
      </Col>
    </Row>

    <Row xs={12} className={isMobile ? "pt-0 mt-n4" : "pt-0 mt-n5"}>
      <Col xs={3}></Col>
      <Col>
        <h1 className="text-white mt-0 mb-0">MAKING</h1>
      </Col>
    </Row>

    <Row xs={12} className={isMobile ? "pt-0 mt-n4" : "pt-0 mt-n5"}>
      <Col xs={2}></Col>
      <Col>
        <h1 className="text-white mt-0 mb-0">WAVES</h1>
      </Col>
    </Row>

    <Row xs={12} className="mb-0">
      <Col xs={4}></Col>
      <Col xs={8}>
        <h2 className={isMobile ? "text-peach pl-4" : "text-peach"}>GWC AT UVA</h2>
      </Col>
    </Row>
        
    </div>
  );
}

export default Header;
