// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
// import { request } from 'graphql-request';

function Location() {
  
  // const [location, setLocation] = useState({'location': ''});

  useEffect(() => {
    const fetchLocation = async () => {
      // const { hackathonLocation } = await request(
      //   process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
      //   `
      //     { 
      //       hackathonLocation(where: {year: 2022}) {
      //         location
      //       }
      //     }
      //   `
      // );
      // setLocation(hackathonLocation);
    };

    fetchLocation();
  }, []);

  return (
    <div id="Location">
        <Row className="bg-white justify-content-center pb-5 pt-5">
            <Col sm={10} xs={11} className={isMobile ? "ml-3" : "pl-2 ml-2"}>
                <h2 className="text-orange font-weight-bold pb-3">{isMobile ? "LOCATION" : "Location"}</h2>
                <p>Coming Soon!</p>
                {/* {location ?
                  <p>{location.location}</p> :
                  <p>Coming Soon!</p>
                }  */}
            </Col>
        </Row>
    </div>
  );
}

export default Location;
