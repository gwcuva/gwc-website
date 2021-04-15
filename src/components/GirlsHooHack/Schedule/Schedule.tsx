import React from 'react';
import Activity from './Activity';
import {Row, Col} from 'react-bootstrap';

function Schedule() {
  return (
    <div className="container-fluid bg-light-grey">
      <Row className="m-5">
        <Col xs={7} className="ml-5">
          <h2 className="text-orange font-weight-bold">Schedule</h2>

          <h3 className="text-peach mono font-weight-bold mt-4">Saturday, Oct 17</h3>
          <Activity time="9am - 10am" name="Check-in" detail="Join Discord"></Activity>
          <Activity time="10am - 11am" name="Opening Ceremony"></Activity>
          <Activity time="11am" name="Hacking starts" detail="Team formation"></Activity>
          <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
          <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
          <Activity time="12pm - 1pm" name="Intro to Hacking Workshop"></Activity>
          <Activity time="1:30pm - 2:30pm" name="Sponsorship Fair" detail="Google Cloud, Wolfram"></Activity>

          <h3 className="text-peach mono font-weight-bold mt-4">Sunday, Oct 18</h3>
          <Activity time="11am - 12pm" name="Sustainability workshop"></Activity>
          <Activity time="11am - 12pm" name="How to Work from Home and Virtual Pair Programming Workshop"></Activity>
          <Activity time="1pm" name="Hacking ends"></Activity>
        </Col>
      </Row>
      
    </div>
    
  );
}

export default Schedule;
