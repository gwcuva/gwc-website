import {isMobile} from 'react-device-detect';
import {Col} from 'react-bootstrap';

interface Props {
  img: string;
  alt: string;
  caption: string;
}

function CaptionedGraphic(props: Props) {
  return (
    <Col md={4} xs={6}>
      <div className="d-flex justify-content-center mb-1">
        <img src={props.img} width={isMobile ? "100px" : "120px"} height={isMobile ? "100px" : "120px"} alt={props.alt} style={{objectFit: "contain"}}/>
      </div>
      <p className="text-dark-grey text-center mb-0 pb-0">{props.caption}</p>
    </Col>
  );
}

export default CaptionedGraphic;
