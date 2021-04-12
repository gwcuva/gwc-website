import React from 'react';
import styled from 'styled-components';
import CaptionedGraphic from './CaptionedGraphic';
import Percentage from './Percentage';
import Allcaps from './allcaps.svg';
// TODO: Add graphics

const FirstCaption = styled.p`
  font-size: 34px;
  font-weight: bold;
  color: $programmer-peacock;
  line-height: 1.2;
`

const FirstPercentage = styled.div`
  margin-top: -5px;
`

const SecondPercentage = styled.div`
  margin-top: -5px;
  margin-left: -120px;
`

const SecondCaption = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: $programmer-peacock;
  margin-top: 15px;
`

const L_GraphicWrapper = styled.section`
  width: 135px;
  margin-top: -10px;
`

const M_GraphicWrapper = styled.section`
  width: 135px;
  margin-top: -10px;
  margin-left: -25px;
`

const R_GraphicWrapper = styled.section`
  width: 135px;
  margin-top: -10px;
  margin-left: -45px;
`

function Stats() {
  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6">
          <h3>Let's reprogram the tech world.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-center">
          <Percentage top="1995" percent="37%" color="text-blue" fact="of programmers are women."/>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <Percentage top="2020" percent="24%" color="text-turq" fact="of programmers are women."/>
        </div>
      </div>
      <div className="row">
          <div className="col-2"></div>
          <div className="col-6">
            <h4>Together, we can close the gender gap in CS.</h4>
          </div>
      </div>
      <div className="row no-gutters">
        <div className="col-2"></div>
        <div className="col-2">
          <CaptionedGraphic img={Allcaps} alt="#" caption="3 out of 4 young girls are interested in CS." />
        </div>
        <div className="col-2">
            <CaptionedGraphic img={Allcaps} alt="#" caption="<20% of CS graduates at big universities in 2016 were women." />
        </div>
        <div className="col-2">
            <CaptionedGraphic img={Allcaps} alt="#" caption="Women in tech are paid 71 cents for the male dollar." />
        </div>
      </div>
    </div>
  );
}

export default Stats;
