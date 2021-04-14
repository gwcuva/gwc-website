import React from 'react';
import AboutList from './AboutList';

// TODO: Add Hello World asset on the top (also in branding guide on Google Drive)
// TODO: Add the copy
// TODO: Make sure that you're not just adding "#", make the bullets consistent

function About() {

  const socialEvents = ["Biweekly socials", "S'mores bonfire"]

  return (
    <div>
      <img src="#" alt="Hello World banner" />
      <h2>Girls Who Code at the University of Virginia...</h2>
      <p>Together, we're breaking down barriers...</p>

      <AboutList header="Social Events" items={socialEvents}/>
      <AboutList header="Social Events" items={socialEvents}/>
      <AboutList header="Social Events" items={socialEvents}/>
    </div>
  );
}

export default About;
