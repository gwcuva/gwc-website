import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Arrow from '../../../assets/images/arrow-right.svg';
import {isMobile} from 'react-device-detect';

interface Props {
  id: string;
}

function Newsletter(props: Props) {
  return (
    <Row id={props.id} className="justify-content-center mt-5">
      <Col lg={6} md={8} sm={10} xs={11}>
        <a href="https://forms.gle/jvkNitwhQ932gxBy6" target="_blank" rel="noopener noreferrer">
          <h4 className="text-peacock mono newsletter">
            Sign up for our newsletter <img src={Arrow} width={isMobile ? "41px" : "72px"} alt="Arrow saying Sign up for our newsletter" />
          </h4>
        </a>
      </Col>
    </Row>
  );
}

export default Newsletter;
