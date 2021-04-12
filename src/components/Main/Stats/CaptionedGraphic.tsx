import React from 'react';
import styled from 'styled-components';

interface Props {
  img: string;
  alt: string;
  caption: string;
}

function CaptionedGraphic(props: Props) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="d-flex justify-content-center">
        <img src={props.img} width="140px" height="140px" alt={props.alt} style={{objectFit: "contain"}}/>
      </div>
      <p className="text-dark-grey text-center">{props.caption}</p>
    </div>
    // <div className="col-sm-4 col-6">
    //   <div className="row d-flex justify-content-center">
    //     <div className="col-sm-10 col-9">
    //       <img src={props.img} alt={props.alt} />
    //     </div>
    //   </div>
    //   <p className="text-dark-grey text-center">{props.caption}</p>
    // </div>
  );
}

export default CaptionedGraphic;
