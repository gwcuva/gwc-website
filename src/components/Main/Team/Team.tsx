import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

// TODO: (can be separate PR), have an archive of old exec
interface Props {
  id: string;
}

function Team(props: Props) {
  //const [team, setTeam] = useState([]);
  const [team, setTeam] = useState<any[]>([]);

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

  
  var empty = {
    name:"",
    id:"empty",
    position:"",
    academicYear:"",
    headshot: {
      url:"",
    }
  }
  if(!isMobile) {
    while(team.length%3 !== 0) {
      team.push(empty);
    }
  }
  else {
    while(team.length%2 !== 0) {
      team.push(empty);
    }
  }

  return (
    <div id={props.id}>
      <Row className="mt-5 d-flex justify-content-center">
        <Col lg={6} md={8} sm={10} xs={11}>
          <h2 className="text-peacock font-weight-bold">The best work is produced when diverse voices help create it.</h2>
          <p className="text-peacock pt-3">The best work is produced when diverse voices help create it. Our leadership team works together to disrupt the image of the stereotypical programmer. Meet our wave-makers!</p>
        </Col>
      </Row>
      <Row className={`${isMobile ? "mt-3" : "mt-5"} d-flex justify-content-center`}>
        <Col lg={6} md={8} sm={10} xs={11}>
          <Row className="justify-content-around">
            {team.map(mem => 
              <Profile name={mem.name} img={mem.headshot.url} position={mem.position}></Profile>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Team;
