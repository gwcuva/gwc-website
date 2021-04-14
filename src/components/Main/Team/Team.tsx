import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

// TODO: Make a profile component with photo, name, position
// TODO: Add beginning copy
// TODO: (can be separate PR), have an archive of old exec
interface Props {
  id: string;
}

function Team(props: Props) {
  //const [team, setTeam] = useState([]);
  const [team, setTeam] = useState<any[]>([]);
  var arrays: any[][] = [];

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

  var count = 0;
  var empty = {
    name:"",
    id:"empty",
    position:"",
    academicYear:"",
    headshot: {
      url:"",
    }
  }
  console.log(arrays.length);
  while(team.length%3 !== 0) {
    team.push(empty);
  }
  for(let i = 0; i<team.length; i+=3) {
    arrays[count] = [team[i],team[i+1],team[i+2]];
  }

  return (
    <div id={props.id}>
      <Row className="m-3 d-flex justify-content-center">
        <Col lg={6} md={8} sm={10}>
          <h2 className="text-peacock font-weight-bold">The best work is produced when diverse voices help create it.</h2>
          <p className="text-dark-grey pt-3">Our leadership team works together to disrupt the image of stereotypical programmer. Meet our wave-makers!</p>
        </Col>
      </Row>
      {/* iterate through team for the profile. hint: console.log() to see what the data structure looks like and how you can use it */}
      {arrays.map(mem => 
        <div className={isMobile ? "container pt-1 pb-1" : "container pt-3 pb-3"}>
          <Row className="pl-4 justify-content-center">
            <Col xs={4} lg={3} md={4} sm={5}>
              <Profile name={mem[0].name} img={mem[0].headshot.url} position={mem[0].position}></Profile>
            </Col>
            <Col xs={4} lg={3} md={4} sm={5}>
              <Profile name={mem[1].name} img={mem[1].headshot.url} position={mem[1].position}></Profile>
            </Col>
            <Col xs={4} lg={3} md={4} sm={5}>
              <Profile name={mem[2].name} img={mem[2].headshot.url} position={mem[2].position}></Profile>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default Team;
