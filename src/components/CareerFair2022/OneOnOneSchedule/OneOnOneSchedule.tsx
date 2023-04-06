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
        {oneOnOne.map((event) => 
          <Session key={event.id} name={event.eventName} detail={event.eventDetail} time={event.startTime} linkname="Join Zoom" link={event.zoomLink} inperson={event.inPerson}></Session>)}    
        {/*<Sessions />*/}
      </Col>
    </Row>
  );
}

export default OneOnOneSchedule;
