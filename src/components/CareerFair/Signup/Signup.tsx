import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';


function Location() {
  return (
    <div>
        <Row className="justify-content-center pb-5 pt-5 bg-hack-grey" id = "CFRegistration">
            <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
                <h2 className="text-orange font-weight-bold pb-3">Registration</h2>
                <h3 className="mono text-peach hack mb-4"> <a className="mono text-peach hack mb-4"
                 href="https://forms.gle/JbkndWdHQCLwDuo68" target="_blank" rel="noreferrer noopener"> <u>
                   REGISTER</u> </a> to save your spot and submit a resume </h3>
                   <h3 className="mono text-peach hack mb-4"> <a className="mono text-peach hack mb-4"
                 href="https://www.signupgenius.com/go/10C0E4DADAD2FA5F9CE9-signupcf" target="_blank" rel="noreferrer noopener"> <u>
                   SIGN UP</u> </a> for career panels and 1:1 sessions </h3> 
            </Col>
        </Row>
    </div>
  );
}

export default Location;
