import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { Collapse } from 'react-collapse';
import Workshop from './Workshop';

function JumpStart() {
  const [workshops, setWorkshops] = useState([{'id': '', 'workshopName': '', 'workshopDate': '', 'description': ''}]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const { hackathonWorkshops } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonWorkshops {
              id
              workshopName
              workshopDate
              description
            }
          }
        `
      );
      setWorkshops(hackathonWorkshops);
    };
    fetchWorkshops();
  }, []);

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  for (let i = 0; i < workshops.length; i++) {
    let secondDash = workshops[i].workshopDate.lastIndexOf('-');
    let year = workshops[i].workshopDate.substring(0, 4);
    let month = months[parseInt(workshops[i].workshopDate.substring(5, secondDash))-1];
    let dayOfMonth = workshops[i].workshopDate.substring(secondDash+1);

    let day = new Date(month + " " + dayOfMonth + ", " + year + " 23:15:30");
    
    switch(day.toString().substring(0, 3)) {
      case "Sun":
        workshops[i].workshopDate = "Sunday";
        break;
      case "Mon":
        workshops[i].workshopDate = "Monday";
        break;
      case "Tue":
        workshops[i].workshopDate = "Tuesday";
        break;
      case "Wed":
        workshops[i].workshopDate = "Wednesday";
        break;
      case "Thu":
        workshops[i].workshopDate = "Thursday";
        break;
      case "Fri":
        workshops[i].workshopDate = "Friday";
        break;
      case "Sat":
        workshops[i].workshopDate = "Saturday";
        break;
    }

    workshops[i].workshopDate += ", " + day.toString().substring(4, 10);
  }

  return (
  <Row className={`bg-white justify-content-center py-5`}>
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
      <Row className={isMobile ? "" : "my-5"}>
        <Col className="hack">
          <h2 className="text-orange">JUMPSTART</h2>
          <h3 className="mono text-peach mt-4 mb-4">What is it?</h3>
          <Row>
            <Col xs={8}>
            <p>JumpStart is a beginner’s guide to hackathons for GWC @ UVA members. We’re offering a 1-4 hour workshop each day from October 12 through October 16. There will be recorded and live options for each workshop.</p>
            </Col>
          </Row>
          
          {isMobile? 
            <div>
              <Row className="mt-4">
                <Col xs={9} className="d-flex justify-content-start">
                  <h3 className="mono text-peach mb-4">Workshops</h3>
                </Col>
                <Col xs={2} className="d-flex justify-content-end text-peach ml-3">
                  <div onClick={() => setDropdownOpen(!dropdownOpen)} 
                    aria-controls="collapse-workshops" aria-expanded={dropdownOpen}>
                      {dropdownOpen ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                  </div>
                </Col>
              </Row>
              <Collapse isOpened={dropdownOpen}>
              {workshops.map((workshop) => 
                  <Workshop key={workshop.id} name={workshop.workshopName} date={workshop.workshopDate.substring(0, workshop.workshopDate.length - 24)} detail={workshop.description} ></Workshop>)}
              </Collapse>
            </div>
            :
            <div>
              <h3 className="text-peach mt-4">Workshops</h3>
              <Row className="pt-2">                
                {workshops.map((workshop) => 
                  <Col xs={4} className="hack">
                    <Workshop key={workshop.id} name={workshop.workshopName} date={workshop.workshopDate.substring(0, workshop.workshopDate.length - 8)} detail={workshop.description}></Workshop>
                  </Col>)}
              </Row>
            </div>
          }
        </Col>
      </Row>
    </Col>
  </Row>
  );
}

export default JumpStart;
