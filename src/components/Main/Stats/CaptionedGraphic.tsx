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
`;

function CaptionedGraphic(props: Props) {
  return (
    <div>
      <img src={props.img} alt={props.alt} />
      <CaptionWrapper>
        <p>{props.caption}</p>
      </CaptionWrapper>
      
    </div>
  );
}

export default CaptionedGraphic;
