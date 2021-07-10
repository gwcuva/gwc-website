import React from 'react';
import { useState } from 'react';


function Links() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);
  return (
    <div>
      <h3 className="pb-2"><strong>Links</strong></h3>
      <p><a href="/hack" target="_blank" rel="noreferrer noopener" className={hovered ?  "mono text-peacock interactive" : "mono text-white interactive"}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      >Girls Hoo Hack</a></p>
      <p><a href="https://www.figma.com/file/eb9ExHXT0yGgo4RkK8FG65/Brand-Manual-Identity-Iterations?node-id=251%3A92" target="_blank" rel="noreferrer noopener" className={hovered2 ?  "mono text-peacock interactive" : "mono text-white interactive"}
      onMouseEnter={toggleHover2}
      onMouseLeave={toggleHover2}
      >Brand Manual</a></p>
    </div>
  );
}

export default Links;
