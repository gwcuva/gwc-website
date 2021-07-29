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

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for (let i = 0; i < workshops.length; i++) {
    console.log(workshops[i].workshopDate);
    console.log(workshops[i].workshopDate.substring(0, 4) + "/ " + 
      workshops[i].workshopDate.substring(5, workshops[i].workshopDate.lastIndexOf('-')) + "/ " + 
      workshops[i].workshopDate.substring(workshops[i].workshopDate.lastIndexOf('-') + 1));
    const day = new Date(parseInt(workshops[i].workshopDate.substring(0, 4)),
                          parseInt(workshops[i].workshopDate.substring(5, workshops[i].workshopDate.lastIndexOf('-'))) - 1,
                          parseInt(workshops[i].workshopDate.substring(workshops[i].workshopDate.lastIndexOf('-') + 1)));
    
    console.log(day.getDay());
    workshops[i].workshopDate = weekdays[day.getDay()];

    // switch(day.toString().substring(0, 3)) {
    //   case "Sun":
    //     workshops[i].workshopDate = "Sunday";
    //     break;
    //   case "Mon":
    //     workshops[i].workshopDate = "Monday";
    //     break;
    //   case "Tue":
    //     workshops[i].workshopDate = "Tuesday";
    //     break;
    //   case "Wed":
    //     workshops[i].workshopDate = "Wednesday";
    //     break;
    //   case "Thu":
    //     workshops[i].workshopDate = "Thursday";
    //     break;
    //   case "Fri":
    //     workshops[i].workshopDate = "Friday";
    //     break;
    //   case "Sat":
    //     workshops[i].workshopDate = "Saturday";
    //     break;
    // }
    console.log(workshops[i].workshopDate);
    console.log(day.toString().substring(4, 10) + ".....");
    workshops[i].workshopDate += ", " + day.toString().substring(4, 10);
    console.log(workshops[i].workshopDate + "***");
  }

  console.log("_______");
  for (let i = 0; i < workshops.length; i++) {
    console.log(workshops[i].workshopName + " " + workshops[i].workshopDate);
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
                  <Workshop key={workshop.id} name={workshop.workshopName} date={workshop.workshopDate} detail={workshop.description} ></Workshop>)}
              </Collapse>
            </div>
            :
            <div>
              <h3 className="text-peach mt-4">Workshops</h3>
              <Row className="pt-2">                
                {workshops.map((workshop) => 
                  <Col xs={4} className="hack" key={workshop.id}>
                    <Workshop name={workshop.workshopName} date={workshop.workshopDate} detail={workshop.description}></Workshop>
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
