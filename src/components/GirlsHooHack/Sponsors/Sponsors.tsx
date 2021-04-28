import React from 'react';
import googleCloud from '../../../assets/images/google-cloud.svg';
import stickerMule from '../../../assets/images/sticker-mule.svg';
import wolfram from '../../../assets/images/wolfram.svg';
import hackerearth from '../../../assets/images/hackerearth.svg';
import uvads from '../../../assets/images/uva-datascience.svg';

function Sponsors() {
  return (
    <div>
      <img src={googleCloud} alt=""/>
      <img src={stickerMule} alt=""/>
      <img src={wolfram} alt=""/>
      <img src={hackerearth} alt=""/>
      <img src={uvads} alt=""/>
    </div>
  );
}

export default Sponsors;
