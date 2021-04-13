import React from 'react';

interface Props {
  top: string;
  percent: string;
  fact: string;
}

function Percentage(props: Props) {
  return (
    <div>
      <h3>{props.top}</h3>
      <h1>{props.percent}</h1>
      <p>{props.fact}</p>
    </div>
  );
}

export default Percentage;
