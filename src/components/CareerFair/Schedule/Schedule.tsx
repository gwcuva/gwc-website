// import React, {useState} from 'react';
// import Activity from './Activity';
//import { request } from 'graphql-request';
import { isMobile } from 'react-device-detect';
import { Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faMinus } from '@fortawesome/free-solid-svg-icons'
// import {Collapse } from 'react-collapse';

function Schedule() {
  return (
    <Row className={`justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack">Schedule</h2>
        <h3 className="text-peach mono font-weight-bold">TBA in early February</h3>
      </Col>
    </Row>
  // // const [events, setEvents] = useState([{'id': '', 'eventName': '', 'link': '', 'time': '', 'description': ''}]);
  // // const [dates, setDates] = useState(['']);

  // const [open1, setOpen1] = useState(false);
  // const [open2, setOpen2] = useState(false);

  // // useEffect(() => {
  // //   const fetchEvents = async () => {
  // //     const { hackathonEvents } = await request(
  // //       process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
  // //       `
  // //         { 
  // //           hackathonEvents {
  // //             id
  // //             eventName
  // //             link
  // //             time
  // //             description
  // //           }
  // //         }
  // //       `
  // //     );
      
      
  // //     // let uniqueDates = [];
  // //     for (let i = 0; i < hackathonEvents.length; i++) {
  // //       console.log(hackathonEvents[i].eventName);
  // //       // if (uniqueDates.indexOf(hackathonEvents[i].time) === -1) {
  // //       //   uniqueDates.push(hackathonEvents[i].time)
  // //       // }
  // //     }
  // //     setEvents(hackathonEvents);
  // //     // setDates([...uniqueDates]);
  // //   };

  // //   fetchEvents();
  // // }, []);

  // // // console.log(events);
  // // console.log("num events: " + events.length);
  // // for (let i = 0; i < events.length; i++) {
  // //   console.log(events[i].eventName);
  // // }

  // return (
  //   <div className="container-fluid bg-hack-grey pt-4 pb-4">
  //     {isMobile ? 
  //       <Row>
  //         <Col xs={12} className="ml-1">
  //           <h2 className="text-orange font-weight-bold">Schedule</h2>

  //           <Row className="mt-4">
  //             <Col xs={9} className="d-flex justify-content-start">
  //               <h3 className="text-peach mono font-weight-bold">Saturday, Nov 6</h3>
  //             </Col>
  //             <Col xs={2} className="d-flex justify-content-end text-peach ml-3">
  //               <div onClick={() => setOpen1(!open1)} 
  //                 aria-controls="collapse-day1" aria-expanded={open1}>
  //                   {open1 ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
  //                   <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
  //               </div>
  //             </Col>
  //           </Row>

  //           <Collapse isOpened={open1}>
  //             <text>TBD</text>
  //             {/* <Activity time="9am - 10am" name="Check-in" link="Join Discord"></Activity>
  //             <Activity time="10am - 11am" name="Opening Ceremony"></Activity>
  //             <Activity time="11am" name="Hacking starts" detail="Team formation"></Activity>
  //             <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
  //             <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
  //             <Activity time="12pm - 1pm" name="Intro to Hacking Workshop"></Activity>
  //             <Activity time="1:30pm - 2:30pm" name="Sponsorship Fair" detail="Google Cloud, Wolfram"></Activity> */}
  //           </Collapse>
            
  //           <Row className="mt-4">
  //             <Col xs={9} className="d-flex justify-content-start">
  //               <h3 className="text-peach mono font-weight-bold">Sunday, Nov 7</h3>
  //             </Col>
  //             <Col xs={2} className="d-flex justify-content-end text-peach ml-3">
  //               <div onClick={() => setOpen2(!open2)} 
  //                 aria-controls="collapse-day2" aria-expanded={open2}>
  //                   {open2 ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
  //                     <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
  //               </div>
  //             </Col>
  //           </Row>

  //           <Collapse isOpened={open2}>
  //             <text>TBD</text>
  //             {/* <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
  //             <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
  //             <Activity time="1pm" name="Hacking ends"></Activity> */}
  //           </Collapse>
  //         </Col>
  //       </Row> : 

  //       <Row className="m-5 pt-5 pb-5">
  //         <Col md={7} sm={10} xs={12} className="ml-5">
  //           <h2 className="text-orange font-weight-bold">Schedule</h2>
  //           {/* <h2>{events[0].eventName}</h2>
  //           <h2>{events[0].time}</h2>
  //           <h3>{events[0].description}</h3>

  //           <h2>{events[1].eventName}</h2>
  //           <h2>{events[1].time}</h2>
  //           <h3>{events[1].description}</h3>

  //           <h2>{events[2].eventName}</h2>
  //           <h2>{events[2].time}</h2>
  //           <h3>{events[2].description}</h3> */}

  //           <h3 className="text-peach mono font-weight-bold mt-4">Saturday, Nov 6: TBD</h3>
  //           {/*<Activity time="9am - 10am" name="Check-in" linkname="Join Discord" link="https://discord.gg/rKbWyuDNyG"></Activity>
  //           <Activity time="10am - 11am" name="Opening Ceremony"></Activity>
  //           <Activity time="11am" name="Hacking starts" detail="Team formation"></Activity>
  //           <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
  //           <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
  //           <Activity time="12pm - 1pm" name="Intro to Hacking Workshop"></Activity>
  //           <Activity time="1:30pm - 2:30pm" name="Sponsorship Fair" detail="Google Cloud, Wolfram"></Activity>
  //           */}
            
  //           <h3 className="text-peach mono font-weight-bold mt-5">Sunday, Nov 7: TBD</h3>
  //           {/*
  //           <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
  //           <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
  //           <Activity time="1pm" name="Hacking ends"></Activity>
  //           */}
  //         </Col>
  //       </Row>
  //     }
  //   </div>
  );
}

export default Schedule;
