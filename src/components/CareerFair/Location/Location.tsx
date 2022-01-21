import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';


function Location() {
  return (
    <div>
        <Row className="justify-content-center pb-5 pt-5">
            <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
                <h2 className="text-orange font-weight-bold pb-3">Location</h2>
                <h3 className="mono text-peach hack mb-4">TBA as University COVID guidelines evolve</h3>
            </Col>
        </Row>
    </div>
  );
}

export default Location;
