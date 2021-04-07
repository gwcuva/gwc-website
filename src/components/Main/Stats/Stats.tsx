import React from 'react';
import styled from 'styled-components';
import CaptionedGraphic from './CaptionedGraphic';
import Percentage from './Percentage';
//import 'src/index.scss';
// import Allcaps from '/src/assets/images/allcaps.svg';
// TODO: Add graphics

const FirstCaption = styled.p`
  font-size: 37px;
  font-weight: bold;
  // color: $programmer-peacock;
  color: #003046;
  line-height: 1.2;
`

const FirstPercentage = styled.div`
  color: $binary-blue;
`

const SecondPercentage = styled.div`
  color: $tuple-turquoise;
`

const SecondCaption = styled.p`
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
            {/* <h3>Let's reprogram the tech world.</h3> */}
            <p>Let's reprogram the tech world.</p>
          </FirstCaption>
        </div>
        <div className="col-3"></div>
      </div>
      
      <div className="row">
        <div className="col-3"></div>
        <div className="col-3 d-flex justify-content-center">
          <FirstPercentage>
            <Percentage top="1995" percent="37%" darkBlue="true" fact="of programmers are women."/>
          </FirstPercentage>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <SecondPercentage>
            <Percentage top="2020" percent="24%" darkBlue="false" fact="of programmers are women."/>
          </SecondPercentage>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <SecondCaption>
              {/* <h4>Together, we can close the gender gap in CS.</h4> */}
              <p>Together, we can close the gender gap in CS.</p>
            </SecondCaption>
          </div>
          <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-2">
          {/* <CaptionedGraphic img={Allcaps} alt="#" caption="3 out of 4 young girls are interested in CS" /> */}
          <CaptionedGraphic img="images/circles.svg" alt="#" caption="3 out of 4 young girls are interested in CS" />
        </div>
        <div className="col-2">
          <CaptionedGraphic img="src/assets/images/allcaps.svg" alt="#" caption="<20% of CS graduates at big universities in 2016 were women" />
        </div>
        <div className="col-2">
          <CaptionedGraphic img="src/assets/images/dollar.svg" alt="#" caption="Women in tech are paid 71 cents for the male dollar" />
        </div>
        <div className="col-3"></div>
      </div>
      

      
      
      
      
      
    </div>
  );
}

export default Stats;
