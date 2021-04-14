import React from 'react';

interface Props {
  header: string;
  items: string[];
}

function AboutList(props: Props) {
  return (
    <div>
      <h3>{props.header}</h3>
      {/* take in a list (items) and .map() through it to create the bulleted list ites */}
    </div>
  );
}

export default AboutList;
