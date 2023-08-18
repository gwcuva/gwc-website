import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

interface Props {
  id: string;
}

function Photos(props: Props) {
  const [photos, setPhotos] = useState([{'id': '', 'name': '', 'headshot': {'url': ''}}]);

  useEffect(() => {
    const fetchTeam = async () => {
      const { images } = await request(
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
              linkedin
            }
          }
        `
      );
      
      setPhotos(images);
    };

    fetchTeam();
  }, []);

  return (
    <div id={props.id}>
        aaa
      {/* <Row className="mt-5 d-flex justify-content-center">
        <Col lg={6} md={8} sm={10} xs={11}>
          <h2 className="text-peacock font-weight-bold">The best work is produced when diverse voices help create it.</h2>
          <p className="text-peacock pt-3">The best work is produced when diverse voices help create it. Our leadership team works together to disrupt the image of the stereotypical programmer. Meet our wave-makers!</p>

          {boardYears.map((year, index) => 
            <button 
              className={`interactive ${year === academicYear ? 'text-blue' : 'text-orange'} button-unstyled `} 
              onClick={() => setAcademicYear(year)} 
              disabled={year === academicYear}
              >
              {year && 
                (year === "first2021" ? "Founding Board (2020-2021)" 
                : ("20" + year.substring(year.length-4, year.length-2) + "-20" + year.substring(year.length-2, year.length)))} 
              {(index !== boardYears.length - 1) && <span className="px-1 text-peacock">|</span>}
            </button>)}
        </Col>
      </Row>
      <Row className={`${isMobile ? "mt-3" : "mt-5"} d-flex justify-content-center`}>
        <Col lg={6} md={8} sm={10} xs={11}>
          <Row className="justify-content-around">
            {team.filter((mem) => mem.academicYear === academicYear).map(mem => 
              <Profile mem={mem} />
            )}
          </Row>
        </Col>
      </Row> */}
    </div>
  );
}

export default Photos;
