import React from 'react';
import './discordstyle.css';

// TODO: Add text and link
// TODO: Add graphic at the end of the page

function DiscordInvite() {
  return (
    <div>
      <h4 className="join"><b>Want to join Girls Who Code at UVA?</b></h4>
      <a href="https://discord.gg/D8knkzNM8E" target="_blank"><h2 className="discord"><b>Join our Discord <br/>server ---{">"}</b></h2></a>
      <img src="get started.svg" alt="Orange wave saying 'Get Started'"/>
    </div>
  );
}

export default DiscordInvite;
