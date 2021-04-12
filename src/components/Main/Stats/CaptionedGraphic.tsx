import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  alt: string;
  caption: string;
}

function CaptionedGraphic(props: Props) {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10 col-9">
          <img src={props.img} alt={props.alt} />
        </div>
      </div>
      <p className="text-dark-grey text-center">{props.caption}</p>
    </div>
  );
}

export default CaptionedGraphic;
