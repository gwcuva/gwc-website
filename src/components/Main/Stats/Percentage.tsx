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
      <div className="row d-flex justify-content-center">
        {/* <TopWrapper> */}
        <strong>
          <h4 className="text-peacock">{props.top}</h4>
        </strong>
        
          {/* <p>{props.top}</p> */}
        {/* </TopWrapper> */}
      </div>
      <div className="row d-flex justify-content-center">
        {/* <PercentWrapper> */}
        <h2 className={props.color}>{props.percent}</h2>
          {/* <p className={props.color}>{props.percent}</p> */}
        {/* </PercentWrapper> */}
      </div>
      <div className="row d-flex justify-content-center">
        <FactWrapper>
          <p className="text-dark-grey">{props.fact}</p>
        </FactWrapper>
      </div>
    </div>
  );
}

export default Percentage;
