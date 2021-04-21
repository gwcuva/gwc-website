import React from 'react';
import { isMobile } from 'react-device-detect';

interface Props {
  name: string;
  img: string;
  position: string;
}

function Profile(props: Props) {
  var keys = [
    "VP",
    "PR",
    "Hackathon",
    "Secretary",
    "Treasurer",
    "President",
    "Curriculum",
    "Membership",
  ]
  var values = [
    "Vice President",
    "Public Relations",
    "Director of Hackathon",
    "Secretary",
    "Treasurer",
    "President",
    "Director of Curriculum",
    "Director of Membership",
  ];

  var positions = new Map();

  for(var i = 0; i < keys.length; i++){
    positions.set(keys[i], values[i]);
  }

  return (
    <div>
      {props.img && <img width={isMobile ? "120px" : "185px"} height={isMobile ? "120px" : "185px"} className="teamImg d-block mx-auto" src={props.img} alt={`Headshot of ${props.name}`} />}
      <p className="text-peacock pt-2 text-center">{props.name}</p>
      <p className="p2 text-center">{positions.get(props.position)}</p>
    </div>
  );
}

export default Profile;
