import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

// TODO: Make a profile component with photo, name, position
// TODO: Add beginning copy
// TODO: (can be separate PR), have an archive of old exec

function Team() {

  return (
    <div>
      <h4>The best work...</h4>
      <p>Our leadership team...</p>
      {/* Create a list of some sort and iterate through for the profile */}
      <Profile name="Emily" img="" position="President" />
    </div>
  );
}

export default Team;
