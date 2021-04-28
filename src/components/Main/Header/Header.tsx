import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Waves from '../../../assets/images/main-header-wave.svg';
import Htmlbg from '../../../assets/images/html-bg-header.svg';
// TODO: Add orange code background (in branding tool-kit graphics)
// TODO: Add white waves graphic (might need PR help in adding a white background to the wave) -- assets/main-header-wave.svg

interface Props {
  id: string;
}

function Header(props: Props) {
  return (
    <div id={props.id}> 

    <div className="container-fluid m-0 bg-orange"
      style={{backgroundImage: `url(${Htmlbg})`, 
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px 50px",
              height: "100%"}}>

        <Row xs={12} className={isMobile ? "pt-3":"pt-4"}>
          <Col xs={isMobile ? 1 : 1}></Col>
          <h2 className={isMobile ? "text-peach ml-n3":"text-peach pl-5 ml-5"}>HELLO WORLD</h2>
        </Row>

        <Row xs={12} className={isMobile ? "pb-0":"pb-0"}>
          <Col xs={2}></Col>
          <Col xs={5}><h1 className={isMobile ? "text-white ml-n3":"text-white"}> WE'RE</h1></Col>
        </Row>

        <Row xs={3} className={isMobile ? "pt-0 mt-n4":"pt-0 mt-n5"}>
          <Col xs={3}></Col>
          <h1 className="text-white">MAKING</h1>
        </Row>

        <Row xs={3} className={isMobile ? "pt-0 mt-n4":"pt-0 mt-n5"}>
          <Col xs={2}></Col>
          <h1 className="text-white">WAVES</h1>
        </Row>

        <Row xs={3} className={isMobile ? "mb-0":"mb-0"}>
          <Col xs={4}></Col>
          <Col xs={8}><h2 className={isMobile ? "text-peach pl-4":"text-peach"}>GWC AT UVA</h2></Col>
        </Row>
        
    </div>
    <img src={Waves} className="mt-n2" width = "100%" alt="Orange wave" /> 
         
  </div>
  );
}

export default Header;
