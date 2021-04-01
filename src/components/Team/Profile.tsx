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
      <h6>{props.name}</h6>
      <p>{props.position}</p>
    </div>
  );
}

export default Profile;
