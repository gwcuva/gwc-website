import React from 'react';
import { isMobile } from 'react-device-detect';

interface Props {
  question: string;
  answer: string;
}

function FAQComponent(props: Props) {
  return (
    <div className="mt-4">
      <p className="mono font-weight-bold">{props.question}</p>
      <p className="text-dark-grey">{props.answer}</p>
    </div>
  );
}

export default FAQComponent;
