import { Col } from 'react-bootstrap';

interface Props {
    name: string;
    date: string;
    detail: string;
}

function Workshop(props: Props) {

    return (
      <Col xs={4} className="hack">
        <h4>{props.name}</h4>
        <h3>{props.date}</h3>
        <p>{props.detail}</p>
      </Col>
    );
  }
  
  export default Workshop;