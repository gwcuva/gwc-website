import React from 'react';
import styled from 'styled-components';
import { isPropertySignature } from 'typescript';
import CaptionedGraphic from './CaptionedGraphic';
import Percentage from './Percentage';

// TODO: Add graphics
interface Props {
  id: string;
}

function Stats(props: Props) {
  return (
    <div id={props.id}>
      <h2>Let's reprograming the tech world.</h2>
      <Percentage top="1995" percent="37%" fact="of programmers are women"/>
      <Percentage top="2020" percent="24%" fact="of programmers are women"/>

      <h3>Together, we can close the gender gap in CS.</h3>
      <CaptionedGraphic img="#" alt="#" caption="Filler" />
      <CaptionedGraphic img="#" alt="#" caption="Filler" />
      <CaptionedGraphic img="#" alt="#" caption="Filler" />
    </div>
  );
}

export default Stats;
