import Contact from '../../Main/Footer/Contact'
import GWCLogo from '../../../assets/images/peacock-logo.svg';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
 
function Footer() {
  return (
      <div className="bg-turq d-flex flex-row pb-5 pt-5 overflow-x-hidden">
        <Col md={10}>
          <Row>
            <Col md={1} sm={2} className="text-white" style={{marginBottom:60}}>
            </Col>
            <Col md={isMobile ? 0 : 4} style={{textAlign:'center'}}>
              <img src={GWCLogo} width={isMobile ? "112px" : "150px"} height={isMobile ? "44px" : "82px"} className={isMobile ? "pl-2" : "pl-5"} alt="Girls Who Code at the University of Virginia logo"/>
            </Col>
            <Col md={2} sm={10} className="text-white" style={{marginBottom:60}}>
              <Contact />
            </Col>
            <Col md={2} sm={2} className="text-white" style={{marginBottom:60}}>
            </Col>
            <Col md={3} sm={2} className="text-white">
              <text> Although this organization has members who are University of Virginia 
                students and may have, University employees associated or engaged in its 
                activities and affairs, the organization is not a part of or an agency. 
                It is a separate and independent organization, which is responsible for 
                and manages its own activities and affairs. The University does not direct, supervise
                or control the organization and is not responsible for the organization’s contracts, acts or omissions. 
              </text>
            </Col>
          </Row>
        </Col>
      </div>
  );
}

export default Footer;
