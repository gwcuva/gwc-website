import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { request } from 'graphql-request';

// TODO: Make a profile component with photo, name, position
// TODO: Add beginning copy
// TODO: (can be separate PR), have an archive of old exec

function Team() {
  const [team, setTeam] = useState([]);
  console.log(process.env);

  // useEffect(() => {
  //   const fetchTeam = async () => {
  //     const { team } = await request(
  //       process.env.GRAPHCMS_URL,
  //       `
  //         { 
  //           ExecutiveMember {
  //             id
  //             name
  //             headshot
  //             position
  //             academicYear
  //           }
  //         }
  //       `
  //     );
  //     setTeam();
  //   };

  //   fetchTeam();
  // }, []);

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
