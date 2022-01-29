import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';


function Location() {
  return (
    <div>
        <Row className="justify-content-center pb-5 pt-5 bg-hack-grey">
            <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
                <h2 className="text-orange font-weight-bold pb-3">Registration</h2>
                <h3 className="mono text-peach hack mb-4"> <a className="mono text-peach hack mb-4"
                 href="https://forms.gle/JbkndWdHQCLwDuo68" target="_blank" rel="noreferrer noopener"> <u>
                   REGISTER</u> </a> to save your spot and submit a resume </h3>
                <h3 className="mono text-peach hack mb-4">Sign-ups for career panels and 1:1 sessions TBA in early Feb</h3>
            </Col>
        </Row>
    </div>
  );
}

export default Location;
