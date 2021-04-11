import React from 'react';

// TODO: Add text and link
// TODO: Add graphic at the end of the page

function DiscordInvite() {
  return (
    <div>
      <h4 className="text-turq text-center"><b>Want to join Girls Who Code at UVA?</b></h4>
      <a href="https://discord.gg/D8knkzNM8E" target="_blank"><h2 className="text-peacock text-center"><b>Join our Discord <br/>server ---{">"}</b></h2></a>
      <img src="get started.svg" alt="Orange wave saying 'Get Started'" />
    </div>
    );
}
// render(<ReactSVG src="get started.svg" />, document.getElementById('image'))


export default DiscordInvite;
