import React from 'react';

interface Props {
  name: string;
  img: string;
  position: string;
}

function Profile(props: Props) {
  return (
    <div>
      <img src="#" alt={`Headshot of ${props.name}`} />
      <p>{props.name}</p>
      <p className="p2">{props.position}</p>
    </div>
  );
}

export default Profile;
