import React from 'react';
import styled from 'styled-components';
import CaptionedGraphic from './CaptionedGraphic';
import Percentage from './Percentage';
import Circles from 'src/assets/images/circles.svg';
import Allcaps from './allcaps.svg';
// TODO: Add graphics

function Stats() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-2 col-1"></div>
        <div className="col-sm-6 col-10">
          <div className="row">
            <h2 className="text-peacock font-weight-bold">Let's reprogram the tech world.</h2>
          </div>
          <div className="row mb-5">
            <div className="col">
              <Percentage top="1995" percent="37%" color="text-blue" fact="of programmers are women."/>
            </div>
            <div className="col">
              <Percentage top="2020" percent="24%" color="text-turq" fact="of programmers are women."/>
            </div>
          </div>
          <div className="row">
            <h3 className="text-peacock font-weight-bold">Together, we can close the gender gap in CS.</h3>
          </div>
          <div className="row">
            <div className="col-sm-4 col-6">
              <CaptionedGraphic img={Circles} alt="#" caption="3 out of 4 young girls are interested in CS." />
            </div>
            <div className="col-sm-4 col-6">
                <CaptionedGraphic img={Allcaps} alt="#" caption="<20% of CS graduates at big universities in 2016 were women." />
            </div>
            <div className="col-sm-4 col-6">
                <CaptionedGraphic img={Allcaps} alt="#" caption="Women in tech are paid 71 cents for the male dollar." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
