import { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { request } from 'graphql-request';

function Location() {
  
  const [location, setLocation] = useState({'virtual': '', 'inPerson': '', 'id': ''});

  useEffect(() => {
    const fetchLocation = async () => {
      const { careerFairLocation } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            careerFairLocation(where: {year: 2025}) {
              id
              virtual
              inPerson
            }
          }
        `
      );
      setLocation(careerFairLocation);
    };
    fetchLocation();
  }, []);

  return (
    <div id="Location" className="overflow-x-hidden">
        <Row className="bg-white justify-content-center pb-5 pt-5">
            <Col sm={10} xs={11} className={isMobile ? "ml-3" : "pl-2 ml-2"}>
                <h2 className="text-orange font-weight-bold pb-3">{isMobile ? "LOCATION" : "Location"}</h2>
                {location ?
                  <><h3 className="mono text-peach hack mb-4">{location.inPerson}</h3>
                  {location.virtual && <h3 className="mono text-peach hack mb-4">{location.virtual}</h3>}</> 
                  :
                  <h3>Coming Soon!</h3>
                } 
            </Col>
        </Row>
    </div>
  );
}

export default Location;
