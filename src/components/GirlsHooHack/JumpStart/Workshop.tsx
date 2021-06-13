import { Col } from 'react-bootstrap';

interface Props {
    key: string;
    name: string;
    date: string;
    detail: string;
}

function Workshop(props: Props) {

    return (
      <div>
        <h4>{props.name}</h4>
        <h3>{props.date}</h3>
        <p>{props.detail}</p>
      </div>
      
      // <Col xs={4} className="hack">
        
      // </Col>
    );
  }
  
  export default Workshop;