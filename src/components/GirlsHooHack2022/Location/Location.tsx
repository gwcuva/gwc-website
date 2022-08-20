import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';


function Location() {
  return (
    <div>
        <Row className="bg-white justify-content-center pb-5 pt-5">
            <Col sm={10} xs={11} className={isMobile ? "ml-3" : "pl-2 ml-2"}>
                <h2 className="text-orange font-weight-bold pb-3">{isMobile ? "LOCATION" : "Location"}</h2>
                <p>Coming Soon!</p>
            </Col>
        </Row>
    </div>
  );
}

export default Location;
