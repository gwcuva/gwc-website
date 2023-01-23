import {Row, Col} from 'react-bootstrap';

interface Props {
  time: string;
  name: string;
  detail?: string;
  linkname?: string;
  link?: string;
  inperson?: string;
}

function Session(props: Props): JSX.Element {
  return (
    <Row className="mb-2">
        <Col xs={2}>
            <p className="text-dark-grey mono">{props.time}</p>
        </Col>
        <Col xs={4}>
            <p className="mono font-weight-bold mb-0">{props.name}</p>
            {props.detail && <p className="text-dark-grey interactive mb-0">{props.detail}</p>}
        </Col>
        <Col>
            {props.link && <a href={props.link} target="_blank" rel="noreferrer" className="text-blue interactive mb-0"><u>{props.linkname}</u> &#8599;</a>}
            {props.inperson && <p className="text-dark-grey interactive mb-0">{props.inperson}</p>}
        </Col>
    </Row>
  );
}

export default Session;
