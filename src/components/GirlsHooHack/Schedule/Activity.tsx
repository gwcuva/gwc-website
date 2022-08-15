import {Row, Col} from 'react-bootstrap';

interface Props {
  time: string;
  name: string;
  detail?: string;
  linkname?: string;
  link?: string;
}

function Activity(props: Props): JSX.Element {
  return (
    <Row className="mb-2">
        <Col>
            <p className="text-dark-grey mono">{props.time}</p>
        </Col>
        <Col>
            <p className="mono font-weight-bold mb-0">{props.name}</p>
            {props.detail && <p className="text-dark-grey interactive mb-0">{props.detail}</p>}
            {props.link && <a href={props.link} target="_blank" rel="noreferrer" className="text-blue interactive mb-0"><u>{props.linkname}</u> &#8599;</a>}
        </Col>
    </Row>
  );
}

export default Activity;
