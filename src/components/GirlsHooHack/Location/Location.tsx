//import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Location() {
  return (
    <div>
        <Row className="bg-light-grey justify-content-center pb-5 pt-5">
            <Col xs={1}>
            </Col>
            <Col>
                <h2 className="text-orange font-weight-bold pb-3">Location</h2>
                <p className="mono font-weight-bold">3 Elliewood, Charlottesville, 22903</p>
            </Col>
        </Row>
    </div>
  );
}

export default Location;
