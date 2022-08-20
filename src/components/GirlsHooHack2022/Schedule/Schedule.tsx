import React, {useEffect, useState} from 'react';
import Activity from './Activity';
import { request } from 'graphql-request';
import { isMobile } from 'react-device-detect';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import {Collapse } from 'react-collapse';

function Schedule() {
  const [events, setEvents] = useState([{'eventName': '', 'link': '', 'time': '', 'description': '', 'day': 0, 'linkText': ''}]);
  const [hackDates, setDates] = useState([{'dayOfWeek': '', 'month': '', 'date': 0}]);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const { hackathonEvents } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonEvents(where: { year: 2022 }) {
              eventName
              link
              time
              description
              day
              linkText
            }
          }
        `
      );

      const { hackathonDates } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonDates(where: { year: 2022 }) {
              dayOfWeek
              month
              date
            }
          }
        `
      );
      
      setEvents(hackathonEvents);
      setDates(hackathonDates);
    };

    fetchEvents();
  }, []);

  let dates = hackDates;

  if(dates.length === 2) {
    const date1 = dates[0];
    const date2 = dates[1];
    if((date1.month !== date2.month && date1.date < date2.date) || (date1.date > date2.date)) {
      dates[1] = date1;
      dates[0] = date2;
    }
  }

  events.sort(function(a, b) {
    let atime = a.time.toLowerCase();
    let btime = b.time.toLowerCase();
    if(atime.includes("am") && btime.includes("pm")) {
      return -1;
    }
    else if(atime.includes("pm") && btime.includes("am")) {
      return 1;
    }
    else {
      atime = atime.replace(/\D/g, '');
      btime = btime.replace(/\D/g, '');
      return (parseInt(atime)-parseInt(btime));
    }
  });

  const day1events = events.filter(function(event) {
    if(event.day === 1) return true;
    return false;
  });
  const day2events = events.filter(function(event) {
    if(event.day === 2) return true;
    return false;
  });

  return (
    <div className="container-fluid bg-hack-grey pt-4 pb-4" id="Schedule">
      {isMobile ? 
        <Row>
          <Col xs={12} className="ml-1">
            <h2 className="text-orange font-weight-bold">SCHEDULE</h2>

            {dates.length>0 && 
              <Row className="mt-4">
                <Col xs={9} className="d-flex justify-content-start">
                  <h3 className="text-peach mono font-weight-bold">{dates[0].dayOfWeek}, {dates[0].month} {dates[0].date}</h3>
                </Col>
                <Col xs={2} className="d-flex justify-content-end text-peach ml-3">
                  <div onClick={() => setOpen1(!open1)} 
                    aria-controls="collapse-day1" aria-expanded={open1}>
                      {open1 ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                  </div>
                </Col>
              </Row>
            }

            {dates.length>0 && <Collapse isOpened={open1}>
              {day1events.map((event, index) =>
                <Activity key={index} time={event.time} name={event.eventName} link={event.link} linkname={event.linkText} detail={event.description} />
              )}
              {day1events.length === 0 && <p>Coming Soon!</p>}
            </Collapse>}

            {dates.length===0 && <p>Coming Soon!</p>}

            {dates.length>1 && 
              <Row className="mt-4">
                <Col xs={9} className="d-flex justify-content-start">
                  <h3 className="text-peach mono font-weight-bold">{dates[1].dayOfWeek}, {dates[1].month} {dates[1].date}</h3>
                </Col>
                <Col xs={2} className="d-flex justify-content-end text-peach ml-3">
                  <div onClick={() => setOpen2(!open2)} 
                    aria-controls="collapse-day2" aria-expanded={open2}>
                      {open2 ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                  </div>
                </Col>
              </Row>
            }

            {dates.length>1 && <Collapse isOpened={open2}>
              {day2events.map((event, index) =>
                <Activity key={index} time={event.time} name={event.eventName} link={event.link} linkname={event.linkText} detail={event.description} />
              )}
              {day2events.length === 0 && <p>Coming Soon!</p>}
            </Collapse>}
          </Col>
        </Row>

        : 

        <Row className="m-5 pt-5 pb-5">
          <Col md={7} sm={10} xs={12} className="ml-5">
            <h2 className="text-orange font-weight-bold">Schedule</h2>
            {dates.length>0 && <h3 className="text-peach mono font-weight-bold mt-4">{dates[0].dayOfWeek}, {dates[0].month} {dates[0].date}</h3>}
            {dates.length>0 && 
              day1events.map((event, index) =>
                <Activity key={index} time={event.time} name={event.eventName} link={event.link} linkname={event.linkText} detail={event.description} />
              )
            }
            {(dates.length===0 || (dates.length>0 && day1events.length===0))&& <p>Coming Soon!</p>}

            {dates.length>1 && <h3 className="text-peach mono font-weight-bold mt-4">{dates[1].dayOfWeek}, {dates[1].month} {dates[1].date}</h3>}
            {dates.length>1 &&
              day2events.map((event, index) =>
                <Activity key={index} time={event.time} name={event.eventName} link={event.link} linkname={event.linkText} detail={event.description} />
              )
            }
            {(dates.length>1 && day2events.length===0) && <p>Coming Soon!</p>}
          </Col>
      </Row>
    }
    </div>
  );
}

export default Schedule;
