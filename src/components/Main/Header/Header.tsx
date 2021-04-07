import React from 'react';

// TODO: Add orange code background (in branding tool-kit graphics)
// TODO: Add white waves graphic (might need PR help in adding a white background to the wave) -- assets/main-header-wave.svg

function Header() {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-12">
          <h5>HELLO WORLD</h5>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10">
          <h1>WE'RE</h1>
        </div>
      </div>

      <div className="row justify-content-end">
        <div className="col-10">
          <h1>MAKING</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10">
          <h1>WAVES</h1>
        </div>
      </div>

      <div className="row justify-content-end">
        <div className="col-8">
          <h5>GWC AT UVA</h5>
        </div>
      </div>

      <img src="../../assets/images/main-header-wave.svg" alt="Orange wave" />

    </div>
  );
}

export default Header;
