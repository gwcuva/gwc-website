import React from 'react';
import styled from 'styled-components';

interface Props {
  top: string;
  percent: string;
  color: string;
  fact: string;
}

function Percentage(props: Props) {
  return (
    <div className="col">
      <h3 className="text-peacock text-center font-weight-bold">{props.top}</h3>
      <div className={props.color}>
          <h1 className="text-center font-weight-bold">{props.percent}</h1>
      </div>
      <p className="text-dark-grey text-center">{props.fact}</p>
    </div>
  );
}

export default Percentage;
