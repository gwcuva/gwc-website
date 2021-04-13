import React from 'react';

function NotFound() {
  return (
    <div>
      <h1 className="text-peacock">Page Not Found</h1>
      <a href="/"><h2 className="text-orange">Go to Main Page</h2></a>
      <a href="/hack"><h2 className="text-orange">Go to Hackathon Page</h2></a>
    </div>
  );
}

export default NotFound;
