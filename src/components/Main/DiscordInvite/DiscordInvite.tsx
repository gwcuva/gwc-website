import React from 'react';

// TODO: Add text and link
// TODO: Add graphic at the end of the page
interface Props {
  id: string;
}

function DiscordInvite(props: Props) {
  return (
    <div id={props.id}>
      <h3>Want to join Girls Who Code at UVA?</h3>
      <a href="#" target="_blank"><h4>Join our Discord server (arrow)</h4></a>
      <img src="#" alt="Orange wave saying 'Get Started'" />
    </div>
  );
}

export default DiscordInvite;
