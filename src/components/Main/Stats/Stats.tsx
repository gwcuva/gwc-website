import React from 'react';
import styled from 'styled-components';
import CaptionedGraphic from './CaptionedGraphic';
import Percentage from './Percentage';
//import 'src/index.scss';
// TODO: Add graphics

const FirstCaption = styled.h3`
  font-size: 40px;
  color: $programmer-peacock;
`

const FirstPercentage = styled.div`
  color: $binary-blue;
`

const SecondPercentage = styled.div`
  color: $tuple-turquoise;
`

const SecondCaption = styled.h4`
  font-size: 20px;
  color: $programmer-peacock;
`

function Stats() {
  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <FirstCaption>
            <h3>Let's reprogram the tech world.</h3>
          </FirstCaption>
        </div>
        <div className="col-3"></div>
      </div>
      
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3 d-flex justify-content-center">
          <FirstPercentage>
            <Percentage top="1995" percent="37%" fact="of programmers are women"/>
          </FirstPercentage>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <SecondPercentage>
            <Percentage top="2020" percent="24%" fact="of programmers are women"/>
          </SecondPercentage>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <SecondCaption>
              <h4>Together, we can close the gender gap in CS.</h4>
            </SecondCaption>
          </div>
          <div className="col-3"></div>
      </div>
      <div className="row">
        
      </div>
      

      
      
      <CaptionedGraphic img="src/assets/images/circles.svg" alt="#" caption="3 out of 4 young girls are interested in CS" />
      <CaptionedGraphic img="src/assets/images/allcaps.svg" alt="#" caption="<20% of CS graduates at big universities in 2016 were women" />
      <CaptionedGraphic img="src/assets/images/dollar.svg" alt="#" caption="Women in tech are paid 71 cents for the male dollar" />
    </div>
  );
}

export default Stats;
