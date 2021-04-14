import React from 'react';
import Contact from './Contact';
import Links from './Links';
import footerWaves from '../../../assets/images/footer-wave.svg';
import logo from '../../../assets/images/peacock-logo.svg';
import {Row, Col} from 'react-bootstrap';

interface Props {
  id: string;
}


function Footer(props: Props) {
  return (
    <div id={props.id}>
      <img src={footerWaves} style={{ transform: 'rotate(180deg)', marginBottom:-1}}/>
      <div className="bg-orange d-flex flex-row" style={{paddingBottom: 50, paddingTop: 60}}>
        <Col md={4} sm={3}>
          <img src={logo} width="50%" style={{paddingLeft:"10%"}} alt="Girls Who Code at the University of Virginia logo"/>
        </Col>
        <Col md={10}>
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
