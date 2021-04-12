import React from 'react';
import styled from 'styled-components';

interface Props {
  top: string;
  percent: string;
  color: string;
  fact: string;
}

const TopWrapper = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: $programmer-peacock;
  text-align: center;
  margin-bottom: -15px;
`

const PercentWrapper = styled.p`
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  margin-top: -13px;
  margin-bottom: -22px;
`

const FactWrapper = styled.p`
  color: gray;
  font-size: 10px;
  text-align: center;
  margin-top: -13px;
`;

function Percentage(props: Props) {
  return (
    <div>
      <h3 className="text-peacock text-center font-weight-bold">{props.top}</h3>
      <div className={props.color}>
          <h1 className="text-center font-weight-bold">{props.percent}</h1>
      </div>
      <p className="text-dark-grey text-center">{props.fact}</p>
      {/* <div className="row d-flex justify-content-center">
        <h3 className="text-peacock text-center font-weight-bold">{props.top}</h3>
      </div>
      <div className="row d-flex justify-content-center">
        <div className={props.color}>
          <h1 className="text-center font-weight-bold">{props.percent}</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
          <p className="text-dark-grey text-center">{props.fact}</p>
      </div> */}
    </div>
  );
}

export default Percentage;
