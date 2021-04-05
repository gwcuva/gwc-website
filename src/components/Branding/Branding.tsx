import React from 'react';
import Applications from './Applications/Applications';
import BrandIdentity from './BrandIdentity/BrandIdentity';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SocialMedia from './SocialMedia/SocialMedia';
import Typography from './Typography/Typography';
import VerbalIdentity from './VerbalIdentity/VerbalIdentity';
import VisualIdentity from './VisualIdentity/VisualIdentity';

function Branding() {
  return (
    <div>
      <Header />
      <BrandIdentity />
      <VerbalIdentity />
      <VisualIdentity />
      <Typography />
      <SocialMedia />
      <Applications />
      <Footer />
    </div>
  );
}

export default Branding;
