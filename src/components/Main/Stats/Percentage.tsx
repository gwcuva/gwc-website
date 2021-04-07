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
      <TopWrapper>
        <h4>{props.top}</h4>
      </TopWrapper>
      <PercentWrapper>
        <h2>{props.percent}</h2>
      </PercentWrapper>
      <FactWrapper>
        <p>{props.fact}</p>
      </FactWrapper>
    </div>
  );
}

export default Percentage;
