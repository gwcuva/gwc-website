import React from 'react';
import Contact from './Contact';
import Links from './Links';
import footerWaves from '../../../assets/images/footer-wave.svg';
import logo from '../../../assets/images/peacock-logo.svg';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

interface Props {
  id: string;
}


function Footer(props: Props) {
  return (
    <div id={props.id}>
      <img src={footerWaves} style={{transform: 'rotate(180deg)', marginBottom:-1}} alt="Orange wave"/>
      <div className="bg-orange d-flex flex-row pb-5 pt-5">
        <Col md={isMobile ? 0 : 4}>
          <img src={logo} width={isMobile ? "112px" : "208px"} height={isMobile ? "44px" : "82px"} className={isMobile ? "pl-1" : "pl-5"} alt="Girls Who Code at the University of Virginia logo"/>
        </Col>
        <Col md={10} sm={6}>
          <Row>
            <Col md={2} sm={10} className="text-white" style={{marginBottom:60}}>
              <Contact />
            </Col>
            <Col md={3} sm={4} className="text-white" style={{marginBottom:60}}>
              <Links />
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
}

export default Footer;
