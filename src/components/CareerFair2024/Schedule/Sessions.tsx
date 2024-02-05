import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { Row } from 'react-bootstrap';
//import { isMobile } from 'react-device-detect';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faMinus } from '@fortawesome/free-solid-svg-icons'
// import { Collapse } from 'react-collapse';
import Activity from './Activity';

function Sessions() {
  const [sessions, setSessions] = useState([{'id': '', 'eventName': '', 'eventDetail': '', 'zoomLink': '', 'inPerson': ''}]);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchSessions = async () => {
      const { careerFairSessions } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            careerFairSessions
              id
              eventName
              eventDetail
              zoomLink
              inPerson
            }
          }
        `
      );
      setSessions(careerFairSessions);
    };
    fetchSessions();
  }, []);

  return (
    <Row>
      <h3 className="text-peach mono font-weight-bold">1:1 Sessions</h3>
      {sessions.map((session) => 
        <Activity key={session.id} name={session.eventName} detail={session.eventDetail} time="" linkname="Join Zoom" link={session.zoomLink} inperson={session.inPerson}></Activity>)}    
    </Row>
  );
}

export default Sessions;
