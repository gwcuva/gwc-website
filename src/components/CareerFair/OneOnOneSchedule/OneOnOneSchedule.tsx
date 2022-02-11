import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';
//import { isMobile } from 'react-device-detect';
import Session from './Session';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faMinus } from '@fortawesome/free-solid-svg-icons'
// import { Collapse } from 'react-collapse';
//import Activity from './Activity';

function OneOnOneSchedule() {
    const [oneOnOne, setOneOnOne] = useState([{'id': '', 'eventName': '', 'eventDetail': '', 'startTime': '', 'zoomLink': '', 'inPerson': ''}]);
    // const [dropdownOpen, setDropdownOpen] = useState(false);
  
    useEffect(() => {
      const fetchOneOnOne = async () => {
        const { careerFair1on1s } = await request(
          process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
          `
            { 
              careerFair1on1s {
                id
                eventName
                eventDetail
                startTime
                zoomLink
                inPerson
              }
            }
          `
        );
        setOneOnOne(careerFair1on1s);
      };
      fetchOneOnOne();
    }, []);

  return (
    <Row className={`justify-content-center pt-n5`}>
      <Col sm={10} xs={11} >
        <h3 className="text-peach mono font-weight-bold">1:1 Sessions, sign up below!</h3>
          <p>Join this Teams link and navigate to the channel for the company you are meeting with: https://teams.microsoft.com/l/channel/19%3a94666252906d4437b9d3d5f6bc38da5c%40thread.tacv2/Group%2520Sessions?groupId=7558c8bb-ad7a-440b-b862-1164149cc016&tenantId=7b3480c7-3707-4873-8b77-e216733a65ac</p>
      </Col>
    </Row>
  );
}

export default OneOnOneSchedule;
