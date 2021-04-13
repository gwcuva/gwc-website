import React from 'react';
import {Col} from 'react-bootstrap';

interface Props {
  top: string;
  percent: string;
  color: string;
  fact: string;
}

function Percentage(props: Props) {
  return (
    <Col xs={6} className="mt-2 mb-4">
      <h3 className="text-peacock text-center font-weight-bold">{props.top}</h3>
      <div className={props.color}>
          <h1 className="text-center font-weight-bold">{props.percent}</h1>
      </div>
      <p className="text-dark-grey text-center">{props.fact}</p>
    </Col>
  );
}

export default Percentage;
