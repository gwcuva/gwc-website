import React from 'react';
import styled from 'styled-components';
import CaptionedGraphic from './CaptionedGraphic';
import Percentage from './Percentage';

// TODO: Add graphics

const FirstCaption = styled.h3`
  font-size: 40px;
  color: green;
`

const SecondCaption = styled.h4`
  font-size: 20px;
  color: green;
`

function Stats() {
  return (
    <div>
      <FirstCaption>
        <h3>Let's reprogram the tech world.</h3>
      </FirstCaption>
      
      <Percentage top="1995" percent="37%" fact="of programmers are women"/>
      <Percentage top="2020" percent="24%" fact="of programmers are women"/>

      <SecondCaption>
        <h4>Together, we can close the gender gap in CS.</h4>
      </SecondCaption>
      
      <CaptionedGraphic img="src/assets/images/circles.svg" alt="#" caption="3 out of 4 young girls are interested in CS" />
      <CaptionedGraphic img="src/assets/images/allcaps.svg" alt="#" caption="<20% of CS graduates at big universities in 2016 were women" />
      <CaptionedGraphic img="src/assets/images/dollar.svg" alt="#" caption="Women in tech are paid 71 cents for the male dollar" />
    </div>
  );
}

export default Stats;
