import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import logo from '../../../assets/images/peacock-logo.svg';
import Waves from '../../../assets/images/hack-header-waves.svg';
import SignUp from '../../../assets/images/sign-up-hack.svg';
import UVA from '../../../assets/images/uva.svg';

interface Props {
  id: string;
}

function Header(props: Props) {
  return (
    <div id={props.id} className="container-fluid m-0 bg-turq"
    style={{backgroundImage: `url(${Waves})`, 
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px 375px",
              width:"100%" }}>

        <Col xs={isMobile ? 0 : 4} className="pt-2">
          <img src={logo} width={isMobile ? "112px" : "208px"} height={isMobile ? "44px" : "82px"} className={isMobile ? "pl-2" : "pl-5"} alt="Girls Who Code at the University of Virginia logo"/>
        </Col>

        <Row xs={12} className={isMobile ? "pt-3":"pt-5"}></Row>
        <Row xs={12} className={isMobile ? "pt-3":"pt-5"}></Row>

        <Row xs={12} className={isMobile ? "pt-3":"pt-5"}>
          <Row>
            <Col xs={1}></Col>
            <Col xs={3}><h1 className={isMobile ? "text-white ml-n3":"text-white pl-5 ml-5"}>GIRLS</h1></Col>         
          </Row>

          <Row xs={12} className="pl-5 pr-5 text-right">
            <Row>
              <Col xs={12} className="pl-5">
                <img src={UVA}/>
                <h3>November</h3>
                <h3>6-7</h3>
              </Col>
            </Row>
            
          </Row>

        </Row>

        

        <Row xs={12} className="mt-n5">
          <Col xs={1}></Col>
          <Col xs={3}><h1 className={isMobile ? "text-white":"text-white"}>HOO</h1></Col>
          <Col xs={4}><h2 className={isMobile ? "text-blue":"text-blue font-weight-bold pt-4"}>2020 VIRTUAL HACKATHON</h2></Col>
        </Row>

        <Row className={isMobile ? "pt-0 mt-n4":"pt-0 mt-n5"}>
          <Col xs={2}></Col>
          <h1 className="text-white">HACK</h1>
        </Row>
        
        <Row xs={12} className="pt-5 pb-5"></Row>
        <Row xs={12} className="pt-5 pb-5"></Row>
        <Row xs={12} className="pt-5 pb-5"></Row>
        <Row xs={12} className="pt-5 pb-5"></Row>

    </div>
  );
}

export default Header;
