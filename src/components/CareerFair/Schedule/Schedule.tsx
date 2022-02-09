import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
//import Session from './Session';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faMinus } from '@fortawesome/free-solid-svg-icons'
// import { Collapse } from 'react-collapse';
import Activity from './Activity';

function Schedule() {
  const [workshops, setWorkshops] = useState([{'id': '', 'eventName': '', 'eventDetail': '', 'startTime': '', 'zoomLink': '', 'inPerson': ''}]);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const { careerFairSchedules } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            careerFairSchedules {
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
      setWorkshops(careerFairSchedules);
    };
    fetchWorkshops();
  }, []);


  console.log("num events: " + workshops.length);
  for (let i = 0; i < workshops.length; i++) {
    console.log(workshops[i].eventName);
    console.log(workshops[i].zoomLink);
  }

  return (
    <Row className={`justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack">Career Panels and 1:1 Sessions</h2>
        <h3 className="text-peach mono font-weight-bold">Career Panels: February 11th</h3>
        {workshops.map((workshop) => 
          <Activity key={workshop.id} name={workshop.eventName} detail={workshop.eventDetail} time={workshop.startTime} linkname="Join Zoom" link={workshop.zoomLink} inperson={workshop.inPerson}></Activity>)}    
        {/*<Sessions />*/}
      </Col>
    </Row>
  );
}

export default Schedule;
