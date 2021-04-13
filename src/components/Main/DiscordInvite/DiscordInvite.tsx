import React from 'react';
// import './discordstyle.css';
// TODO: Add text and link
// TODO: Add graphic at the end of the page

function DiscordInvite() {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <h4 className="text-turq join"><b>Want to join Girls Who Code at UVA?</b></h4>
        <a href="https://discord.gg/D8knkzNM8E" target="_blank"><h2 className="text-peacock discord"><b>Join our Discord <br />server ---{">"}</b></h2></a>
        <img src="get started.svg" alt="Orange wave saying 'Get Started'" />
      </div>
    </div>
  );
}

export default DiscordInvite;
