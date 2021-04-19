import React from 'react';
import { Col } from 'react-bootstrap';

interface Props {
  header: string;
  items: string[];
}

function AboutList(props: Props) {
  return (
    <Col sm={6}>
      <h3 className="text-orange">{props.header}</h3>
      {props.items.map((item) => <p className="text-peacock"># {item}</p>)}
    </Col>
  );
}

export default AboutList;
