import React from 'react';
import styled from 'styled-components';

interface Props {
  top: string;
  percent: string;
  fact: string;
}

const TopWrapper = styled.h4`
  color: black;
  font-size: 18px;
`

const PercentWrapper = styled.h2`
  // color: cyan;
  font-size: 50px;
  font-weight: 600;
`

const FactWrapper = styled.p`
  color: gray;
  font-size: 12px;
`;

function Percentage(props: Props) {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <TopWrapper>
          <h4>{props.top}</h4>
        </TopWrapper>
      </div>
      <div className="row d-flex justify-content-center">
        <PercentWrapper>
          <h2>{props.percent}</h2>
        </PercentWrapper>
      </div>
      <div className="row d-flex justify-content-center">
        <FactWrapper>
          <p>{props.fact}</p>
        </FactWrapper>
      </div>
    </div>
  );
}

export default Percentage;
