import React from 'react';
import Activity from './Activity';
import {isMobile} from 'react-device-detect';
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

function Schedule() {
  return (
    <div className="container-fluid bg-light-grey pt-4 pb-4">
      {isMobile ? 
        <Row>
          <Col xs={11} className="ml-1">
            <h2 className="text-orange font-weight-bold">Schedule</h2>

            <Row className="mt-4">
              <Col className="d-flex justify-content-start">
                <h3 className="text-peach mono font-weight-bold">Saturday, Oct 17</h3>
              </Col>
              <Col className="d-flex justify-content-end text-peach">
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col className="d-flex justify-content-start">
                <h3 className="text-peach mono font-weight-bold">Sunday, Oct 18</h3>
              </Col>
              <Col className="d-flex justify-content-end text-peach">
                <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
              </Col>
            </Row>
            
            <Activity time="9am - 10am" name="Check-in" link="Join Discord"></Activity>
            <Activity time="10am - 11am" name="Opening Ceremony"></Activity>
            <Activity time="11am" name="Hacking starts" detail="Team formation"></Activity>
            <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
            <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
            <Activity time="12pm - 1pm" name="Intro to Hacking Workshop"></Activity>
            <Activity time="1:30pm - 2:30pm" name="Sponsorship Fair" detail="Google Cloud, Wolfram"></Activity>

            <h3 className="text-peach mono font-weight-bold mt-5">Sunday, Oct 18</h3>
            <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
            <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
            <Activity time="1pm" name="Hacking ends"></Activity>
          </Col>
        </Row> : 
        <Row className="m-5 pt-5 pb-5">
          <Col md={7} sm={10} xs={12} className="ml-5">
            <h2 className="text-orange font-weight-bold">Schedule</h2>

            <h3 className="text-peach mono font-weight-bold mt-4">Saturday, Oct 17</h3>
            <Activity time="9am - 10am" name="Check-in" link="Join Discord"></Activity>
            <Activity time="10am - 11am" name="Opening Ceremony"></Activity>
            <Activity time="11am" name="Hacking starts" detail="Team formation"></Activity>
            <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
            <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
            <Activity time="12pm - 1pm" name="Intro to Hacking Workshop"></Activity>
            <Activity time="1:30pm - 2:30pm" name="Sponsorship Fair" detail="Google Cloud, Wolfram"></Activity>

            <h3 className="text-peach mono font-weight-bold mt-5">Sunday, Oct 18</h3>
            <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
            <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
            <Activity time="1pm" name="Hacking ends"></Activity>
          </Col>
        </Row>
      }
      
    </div>
    
  );
}

export default Schedule;
