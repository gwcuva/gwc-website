import { Col } from 'react-bootstrap';

interface Props {
  name: string;
  detail: string;
}

function PrizeItemDesktop(props: Props) {
  return (
    <Col xs={4} className="hack">
      <h4>{props.name}</h4>
      <p>{props.detail}</p>
    </Col>
  );
}

export default PrizeItemDesktop;
