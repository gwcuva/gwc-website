import React from 'react';

// TODO: Add orange code background (in branding tool-kit graphics)
// TODO: Add white waves graphic (might need PR help in adding a white background to the wave) -- assets/main-header-wave.svg

interface Props {
  id: string;
}

function Header(props: Props) {
  return (
    <div id={props.id}>
      <h2>HELLO WORLD</h2>
      <h1>WE'RE MAKING WAVES</h1>
      <h2>GWC at UVA</h2>
      <img src="../../assets/images/main-header-wave.svg" alt="Orange wave" />
    </div>
  );
}

export default Header;
