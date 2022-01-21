import React, {useState} from 'react';
import Activity from './Activity';
//import { request } from 'graphql-request';
import { isMobile } from 'react-device-detect';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import {Collapse } from 'react-collapse';

function Schedule() {
  // const [events, setEvents] = useState([{'id': '', 'eventName': '', 'link': '', 'time': '', 'description': ''}]);
  // const [dates, setDates] = useState(['']);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const { hackathonEvents } = await request(
  //       process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
  //       `
  //         { 
  //           hackathonEvents {
  //             id
  //             eventName
  //             link
  //             time
  //             description
  //           }
  //         }
  //       `
  //     );
      
      
  //     // let uniqueDates = [];
  //     for (let i = 0; i < hackathonEvents.length; i++) {
  //       console.log(hackathonEvents[i].eventName);
  //       // if (uniqueDates.indexOf(hackathonEvents[i].time) === -1) {
  //       //   uniqueDates.push(hackathonEvents[i].time)
  //       // }
  //     }
  //     setEvents(hackathonEvents);
  //     // setDates([...uniqueDates]);
  //   };

  //   fetchEvents();
  // }, []);

  // // console.log(events);
  // console.log("num events: " + events.length);
  // for (let i = 0; i < events.length; i++) {
  //   console.log(events[i].eventName);
  // }

  return (
    <div className="container-fluid bg-hack-grey pt-4 pb-4">
      {isMobile ? 
        <Row>
          <Col xs={12} className="ml-1">
            <h2 className="text-orange font-weight-bold">Schedule</h2>

            <Row className="mt-4">
              <Col xs={9} className="d-flex justify-content-start">
                <h3 className="text-peach mono font-weight-bold">Saturday, Nov 6</h3>
              </Col>
              <Col xs={2} className="d-flex justify-content-end text-peach ml-3">
                <div onClick={() => setOpen1(!open1)} 
                  aria-controls="collapse-day1" aria-expanded={open1}>
                    {open1 ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                </div>
              </Col>
            </Row>

            <Collapse isOpened={open1}>
              {/*<text>TBD</text>
              <Activity time="9am - 10am" name="Check-in" link="Join Discord"></Activity>
              <Activity time="10am - 11am" name="Opening Ceremony"></Activity>
              <Activity time="11am" name="Hacking starts" detail="Team formation"></Activity>
              <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
              <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
              <Activity time="12pm - 1pm" name="Intro to Hacking Workshop"></Activity>
              <Activity time="1:30pm - 2:30pm" name="Sponsorship Fair" detail="Google Cloud, Wolfram"></Activity>*/}
              <Activity time="9am" name="Opening Ceremony + Keynote Speech (Hybrid)"></Activity>
              <Activity time="10am" name="Hacking Begins + Pitch a Thon (Hybrid)"></Activity>
              <Activity time="12pm" name="Intro to Python I (Hybrid)"></Activity>
              <Activity time="1pm" name="Intro to Python II (Hybrid)"></Activity>
              <Activity time="2pm" name="Poker 101 Social Event (Virtual)" detail="w/ Poker Power"></Activity>
              <Activity time="3pm" name="Intro to Cloud Agnostic Design (Virtual)" detail="w/ Booz Allen"></Activity>
              <Activity time="4pm" name="Interview Advice (Hybrid)" detail="w/ HooHacks"></Activity>
              <Activity time="5pm" name="Sponsor Networking Event (Virtual)"></Activity>
              <Activity time="6pm" name="U.S. Airforce Cybsersecurity Challenge (Virtual)" detail="w/ MLH"></Activity>
              <Activity time="7pm" name="Building a Personal Website (Hybrid)" detail="w/ Forge"></Activity>
              <Activity time="8pm" name="Infrastructure as Code: Terraforming (Hybrid)" detail="w/ UVA ACM"></Activity>
              <Activity time="10pm" name="Late Night Podcast Recording (Hybrid)" detail="w/ Girl Hoo Code: the Podcast"></Activity>
            </Collapse>
            
            <Row className="mt-4">
              <Col xs={9} className="d-flex justify-content-start">
                <h3 className="text-peach mono font-weight-bold">Sunday, Nov 7</h3>
              </Col>
              <Col xs={2} className="d-flex justify-content-end text-peach ml-3">
                <div onClick={() => setOpen2(!open2)} 
                  aria-controls="collapse-day2" aria-expanded={open2}>
                    {open2 ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                </div>
              </Col>
            </Row>

            <Collapse isOpened={open2}>
              {/* <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
              <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
              <Activity time="1pm" name="Hacking ends"></Activity> */}
              <Activity time="8am" name="Guided Meditation De-stressor (Virtual)"></Activity>
              <Activity time="10am" name="Three Powerful Google Cloud Products for Your Project (Virtual)" detail="w/ Google Cloud"></Activity>
              <Activity time="11am" name="Intro to AI (Virtual)" detail="w/ Maxar"></Activity>
              <Activity time="12pm" name="Women in Industry Panel (Virtual)"></Activity>
              <Activity time="1pm" name="Resume & Cover Letters Workshop (Hybrid)" detail="w/ UVA Career Center"></Activity>
              <Activity time="2pm" name="Strangers to Best Friends in 45 Minutes (Hybrid)"></Activity>
              <Activity time="3pm" name="Introduction to How and Why to Invest (Virtual)" detail="w/ YieldStreet"></Activity>
              <Activity time="4pm" name="Bob Ross MS Paint (Virtual)" detail="w/ MLH"></Activity>
              <Activity time="6pm" name="Hacking Ends (Virtual)"></Activity>
              <Activity time="7pm" name="Live Demos (Virtual)"></Activity>
              <Activity time="9pm" name="Closing Ceremony + Keynote Speech (Hybrid)"></Activity>
            </Collapse>
          </Col>
        </Row> : 

        <Row className="m-5 pt-5 pb-5">
          <Col md={7} sm={10} xs={12} className="ml-5">
            <h2 className="text-orange font-weight-bold">Schedule</h2>
            {/* <h2>{events[0].eventName}</h2>
            <h2>{events[0].time}</h2>
            <h3>{events[0].description}</h3>

            <h2>{events[1].eventName}</h2>
            <h2>{events[1].time}</h2>
            <h3>{events[1].description}</h3>

            <h2>{events[2].eventName}</h2>
            <h2>{events[2].time}</h2>
            <h3>{events[2].description}</h3> */}

            <h3 className="text-peach mono font-weight-bold mt-4">Saturday, Nov 6</h3>
            {/*<Activity time="9am - 10am" name="Check-in" linkname="Join Discord" link="https://discord.gg/rKbWyuDNyG"></Activity>
            <Activity time="10am - 11am" name="Opening Ceremony"></Activity>
            <Activity time="11am" name="Hacking starts" detail="Team formation"></Activity>
            <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
            <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
            <Activity time="12pm - 1pm" name="Intro to Hacking Workshop"></Activity>
          <Activity time="1:30pm - 2:30pm" name="Sponsorship Fair" detail="Google Cloud, Wolfram"></Activity>*/}
            
            <Activity time="9am" name="Opening Ceremony + Keynote Speech (Hybrid)"></Activity>
            <Activity time="10am" name="Hacking Begins + Pitch a Thon (Hybrid)"></Activity>
            <Activity time="12pm" name="Intro to Python I (Hybrid)"></Activity>
            <Activity time="1pm" name="Intro to Python II (Hybrid)"></Activity>
            <Activity time="2pm" name="Poker 101 Social Event (Virtual)" detail="w/ Poker Power"></Activity>
            <Activity time="3pm" name="Intro to Cloud Agnostic Design (Virtual)" detail="w/ Booz Allen"></Activity>
            <Activity time="4pm" name="Interview Advice (Hybrid)" detail="w/ HooHacks"></Activity>
            <Activity time="5pm" name="Sponsor Networking Event (Virtual)"></Activity>
            <Activity time="6pm" name="U.S. Airforce Cybsersecurity Challenge (Virtual)" detail="w/ MLH"></Activity>
            <Activity time="7pm" name="Building a Personal Website (Hybrid)" detail="w/ Forge"></Activity>
            <Activity time="8pm" name="Infrastructure as Code: Terraforming (Hybrid)" detail="w/ UVA ACM"></Activity>
            <Activity time="10pm" name="Late Night Podcast Recording (Hybrid)" detail="w/ Girl Hoo Code: the Podcast"></Activity>
            
            <h3 className="text-peach mono font-weight-bold mt-5">Sunday, Nov 7</h3>
            {/*
            <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
            <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
            <Activity time="1pm" name="Hacking ends"></Activity>
            */}
            <Activity time="8am" name="Guided Meditation De-stressor (Virtual)"></Activity>
            <Activity time="10am" name="Three Powerful Google Cloud Products for Your Project (Virtual)" detail="w/ Google Cloud"></Activity>
            <Activity time="11am" name="Intro to AI (Virtual)" detail="w/ Maxar"></Activity>
            <Activity time="12pm" name="Women in Industry Panel (Virtual)"></Activity>
            <Activity time="1pm" name="Resume & Cover Letters Workshop (Hybrid)" detail="w/ UVA Career Center"></Activity>
            <Activity time="2pm" name="Strangers to Best Friends in 45 Minutes (Hybrid)"></Activity>
            <Activity time="3pm" name="Introduction to How and Why to Invest (Virtual)" detail="w/ YieldStreet"></Activity>
            <Activity time="4pm" name="Bob Ross MS Paint (Virtual)" detail="w/ MLH"></Activity>
            <Activity time="6pm" name="Hacking Ends (Virtual)"></Activity>
            <Activity time="7pm" name="Live Demos (Virtual)"></Activity>
            <Activity time="9pm" name="Closing Ceremony + Keynote Speech (Hybrid)"></Activity>
          </Col>
        </Row>
      }
    </div>
  );
}

export default Schedule;
