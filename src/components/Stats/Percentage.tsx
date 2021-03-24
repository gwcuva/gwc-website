import React from 'react';
import styled from 'styled-components';

interface Props {
  top: string;
  percent: string;
  fact: string;
}

function Percentage(props: Props) {
  return (
    <div>
      <h4>{props.top}</h4>
      <h2>{props.percent}</h2>
      <p>{props.fact}</p>
    </div>
  );
}

export default Percentage;
