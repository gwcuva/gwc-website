import React from 'react';
import {isMobile} from 'react-device-detect';
import {Col} from 'react-bootstrap';

interface Props {
  img: string;
  alt: string;
  caption: string;
}

function CaptionedGraphic(props: Props) {
  return (
    <Col md={4} xs={6}>
      <div className="d-flex justify-content-center">
        <img src={props.img} width={isMobile ? "100px" : "140px"} height={isMobile ? "100px" : "140px"} alt={props.alt} style={{objectFit: "contain"}}/>
      </div>
      <p className="text-dark-grey text-center">{props.caption}</p>
    </Col>
  );
}

export default CaptionedGraphic;
