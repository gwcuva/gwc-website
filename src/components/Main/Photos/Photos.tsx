import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import image1 from '../../../assets/images/main-photo-1.png';
import image2 from '../../../assets/images/main-photo-2.png';
import image3 from '../../../assets/images/main-photo-3.png';
import image4 from '../../../assets/images/main-photo-4.png';

interface Props {
  id: string;
}

function Photos(props: Props) {
  
  return (
      <Row id={props.id} className="mt-5 pt-5 mb-5 pb-5 d-flex justify-content-center">
        <Col lg={6} md={8} sm={10} xs={11}>
          <Row className="d-flex justify-content-center">
            <img src={image1} alt="image1 goes here" className="border-turq" width={isMobile ? "130px" : "300px"} height={isMobile ? "100px" : "230px"} />
            <img src={image2} alt="image1 goes here" className="border-blue" width={isMobile ? "130px" : "300px"} height={isMobile ? "100px" : "230px"} />
          </Row>
          <Row className="d-flex justify-content-center">
            <img src={image3} alt="image1 goes here" className="border-orange" width={isMobile ? "130px" : "300px"} height={isMobile ? "100px" : "230px"} />
            <img src={image4} alt="image1 goes here" className="border-peach" width={isMobile ? "130px" : "300px"} height={isMobile ? "100px" : "230px"} />
          </Row>
        </Col>
      </Row>
  );
}

export default Photos;
