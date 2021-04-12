import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { request } from 'graphql-request';

// TODO: Make a profile component with photo, name, position
// TODO: Add beginning copy
// TODO: (can be separate PR), have an archive of old exec

function Team() {
  const [team, setTeam] = useState([]);
  
  useEffect(() => {
    const fetchTeam = async () => {
      const { executiveMembers } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            executiveMembers {
              id
              name
              position
              academicYear
              headshot {
                url
              }
            }
          }
        `
      );
      setTeam(executiveMembers);
    };

    fetchTeam();
  }, []);

  return (
    <div>
      <h2>The best work...</h2>
      <p>Our leadership team...</p>
      {/* iterate through team for the profile. hint: console.log() to see what the data structure looks like and how you can use it */}
      <Profile name="Emily" img="" position="President" />
    </div>
  );
}

export default Team;
