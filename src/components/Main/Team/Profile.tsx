import React from 'react';

interface Props {
  name: string;
  img: string;
  position: string;
}

function Profile(props: Props) {
  return (
    <div>
      {props.img==="" ? <p></p> : <img className="teamImg d-block mx-auto" src={props.img} alt={`Headshot of ${props.name}`} />}
      <p className="text-peacock pt-2 text-center">{props.name}</p>
      <p className="p2 text-center">{props.position==="PR" ? "Public Relations" : props.position}</p>
    </div>
  );
}

export default Profile;
