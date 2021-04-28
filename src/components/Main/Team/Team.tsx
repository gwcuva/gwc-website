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
  const [team, setTeam] = useState([{'id': '', 'name': '', 'position': '', 'academicYear': '', 'headshot': {'url': ''}}]);
  const [academicYear, setAcademicYear] = useState('second2122');
  const [boardYears, setBoardYears] = useState(['']);

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
      let uniqueYears = [];
      for (let i = 0; i < executiveMembers.length; i++) {
        if (uniqueYears.indexOf(executiveMembers[i].academicYear) === -1) {
          uniqueYears.push(executiveMembers[i].academicYear)
        }
      }
      console.log(uniqueYears)
      setBoardYears(uniqueYears);
    };

    fetchTeam();
  }, []);

  return (
    <div id={props.id}>
      <Row className="mt-5 d-flex justify-content-center">
        <Col lg={6} md={8} sm={10} xs={11}>
          <h2 className="text-peacock font-weight-bold">The best work is produced when diverse voices help create it.</h2>
          <p className="text-peacock pt-3">The best work is produced when diverse voices help create it. Our leadership team works together to disrupt the image of the stereotypical programmer. Meet our wave-makers!</p>

          {boardYears.map((year, index) => 
            <button className="interactive text-orange button-unstyled" onClick={() => setAcademicYear(year)}>
              {year && 
                (year === "first2021" ? "Founding Board (2020-2021)" 
                : ("20" + year.substring(year.length-4, year.length-2) + "-20" + year.substring(year.length-2, year.length)))} 
              {index !== boardYears.length - 1 && <span className="px-1 text-peacock">|</span>}
            </button>)}
        </Col>
      </Row>
      <Row className={`${isMobile ? "mt-3" : "mt-5"} d-flex justify-content-center`}>
        <Col lg={6} md={8} sm={10} xs={11}>
          <Row className="justify-content-around">
            {team.filter((mem) => mem.academicYear === academicYear).map(mem => 
              <Profile name={mem.name} img={mem.headshot.url} position={mem.position} />
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Team;
