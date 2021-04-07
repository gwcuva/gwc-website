import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  alt: string;
  caption: string;
}

// const SVGWrapper = styled.img`
//   width: 20px;
// `

const CaptionWrapper = styled.p`
  color: gray;
  font-size: 10px;
  text-align: center;
`;

function CaptionedGraphic(props: Props) {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          <img src={props.img} alt={props.alt} />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-10 d-flex justify-content-center">
            <CaptionWrapper>
              <p>{props.caption}</p>
            </CaptionWrapper>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="d-flex justify-content-center">
            <img src={props.img} alt={props.alt} />
            
          </div>
          <div className="d-flex justify-content-center">
            <CaptionWrapper>
              <p>{props.caption}</p>
            </CaptionWrapper>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default CaptionedGraphic;
