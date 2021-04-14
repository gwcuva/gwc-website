import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Waves from '../../../assets/images/main-header-wave.svg'
// TODO: Add orange code background (in branding tool-kit graphics)
// TODO: Add white waves graphic (might need PR help in adding a white background to the wave) -- assets/main-header-wave.svg

interface Props {
  id: string;
}

function Header(props: Props) {
  return (
    <div id={props.id}> 

    <div className="container-fluid m-0 bg-orange">
      <Row lg={2}>
      <Col lg={1}><h4></h4></Col>
      </Row>
      <Row lg={3}>
        <Col lg={1}></Col>
        <Col lg={10}><h2 className="text-light-grey">HELLO WORLD</h2></Col>
      </Row>

      <Row lg={3}>
        <Col lg={2}></Col>
        <Col lg={5}><h1 className="text-white">WE'RE</h1></Col>
      </Row>

      <Row lg={3}>
        <Col lg={3}></Col>
        <h1 className="text-white">MAKING</h1>
      </Row>

      <Row lg={3}>
        <Col lg={2}></Col>
        <h1 className="text-white">WAVES</h1>
      </Row>

      <Row lg={3}>
        <Col lg={4}></Col>
        <Col lg={4}><h2 className="text-light-grey">GWC AT UVA</h2></Col>
      </Row>
    </div>
    
    <div className="img-fluid">
      <Row>
        <img src={Waves} alt="Orange wave" />
      </Row>
    </div>
    
    </div>
  );
}

export default Header;
