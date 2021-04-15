import {isMobile} from 'react-device-detect';
import {Row, Col} from 'react-bootstrap';

interface Props {
  time: string;
  name: string;
  detail?: string;
}

function Activity(props: Props) {
  return (
    <Row className="mb-1">
        <Col>
            <p className="text-dark-grey mono">{props.time}</p>
        </Col>
        <Col>
            <p className="mono font-weight-bold mb-0">{props.name}</p>
            <p className="text-dark-grey">{props.detail}</p>
        </Col>
    </Row>
  );
}

export default Activity;
