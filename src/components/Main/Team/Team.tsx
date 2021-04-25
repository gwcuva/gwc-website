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
        <Col xs={11} lg={6} md={8} sm={10}>
          <h2 className="text-peacock font-weight-bold">The best work is produced when diverse voices help create it.</h2>
          <p className="text-peacock pt-3">Our leadership team works together to disrupt the image of stereotypical programmer. Meet our wave-makers!</p>
        </Col>
      </Row>
      <Row className={isMobile ? "mt-3 d-flex justify-content-center" : "mt-5 d-flex justify-content-center"}>
        <Col xs={11} lg={6} md={8} sm={10}>
          <Row className="pl-1 justify-content-center">
            {team.map(mem => 
              <Col xs={6} md={4}>
                <Profile name={mem.name} img={mem.headshot.url} position={mem.position}></Profile>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Team;
