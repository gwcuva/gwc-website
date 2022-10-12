import { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { request } from 'graphql-request';



function Registration() {
  const [registration, setRegistration] = useState({'registrationLink': '','signUpLink': ''});

  useEffect(() => {
    const fetchRegistration= async () => {
      const { careerFairRegistration } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            careerFairRegistration(where: {year: 2022}) {
              signUpLink
              registrationLink
            }
          }
        `
      );
      setRegistration(careerFairRegistration);
    };

    fetchRegistration();
  }, []);
  return (
    <div>
        <Row className="justify-content-center pb-5 pt-5 bg-hack-grey">
            <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
                <h2 className="text-orange font-weight-bold pb-3">Registration</h2>
                <h3 className="mono text-peach hack mb-4"> <a className="mono text-peach hack mb-4"
                 href={registration.registrationLink} target="_blank" rel="noreferrer noopener"> <u>
                   REGISTER</u> </a> to save your spot and submit a resume </h3>
                   <h3 className="mono text-peach hack mb-4"> <a className="mono text-peach hack mb-4"
                 href={registration.signUpLink} target="_blank" rel="noreferrer noopener"> <u>
                   SIGN UP</u> </a> for career panels and 1:1 sessions </h3> 
            </Col>
        </Row>
    </div>
  );
}

export default Registration;
