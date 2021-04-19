import React from 'react';
import AboutList from './AboutList';
import HelloWorld from '../../../assets/images/hello-world.svg'

// TODO: Add Hello World asset on the top (also in branding guide on Google Drive)
// TODO: Add the copy
// TODO: Make sure that you're not just adding "#", make the bullets consistent
interface Props {
  id: string;
}

function About(props: Props) {

  const socialEvents = ["Biweekly socials", "S'mores bonfire"]

  return (
    <div id={props.id}>
      <img src={HelloWorld} alt="Hello World banner" />
      <h2>Girls Who Code at the University of Virginia is an empowering and inclusive team of the next leaders in CS.</h2>
      <p>Together, we're breaking down barriers in the tech industry due to resource inequality, race, and gender biases. All skill levels welcome. Come for the coding, stay for the community!</p>

      <AboutList header="Social Events" items={socialEvents}/>
      <AboutList header="Social Events" items={socialEvents}/>
      <AboutList header="Social Events" items={socialEvents}/>
    </div>
  );
}

export default About;
