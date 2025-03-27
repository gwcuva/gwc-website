import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';


function Signup() {
  return (
    <div className="overflow-x-hidden">
        <Row className="justify-content-center pb-5 pt-5 bg-hack-grey" id = "CFRegistration">
            <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
                <h2 className="text-orange font-weight-bold pb-3">Registration</h2>
                <h3 className="mono text-peach hack mb-4"> <a className="mono text-peach hack mb-4"
                    href="https://forms.gle/HZcyKkTsB493XBnr5" target="_blank" rel="noreferrer noopener"> <u>
                   REGISTER</u></a> to save your spot and submit your resume to our sponsors!</h3>
            </Col>
        </Row>
    </div>
  );
}

export default Signup;