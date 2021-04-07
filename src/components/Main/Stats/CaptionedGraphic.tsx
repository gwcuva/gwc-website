import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  alt: string;
  caption: string;
}

const CaptionWrapper = styled.p`
  color: gray;
  font-size: 12px;
  text-align: center;
`;

function CaptionedGraphic(props: Props) {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="d-flex justify-content-center">
        <CaptionWrapper>
          <p>{props.caption}</p>
        </CaptionWrapper>
      </div>
    </div>
  );
}

export default CaptionedGraphic;
