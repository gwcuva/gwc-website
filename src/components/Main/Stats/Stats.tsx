import CaptionedGraphic from './CaptionedGraphic';
import Percentage from './Percentage';
import Circles from '../../../assets/images/circles.svg';
import Allcaps from '../../../assets/images/allcaps.svg';
import Dollar from '../../../assets/images/dollar.svg';
import {isMobile} from 'react-device-detect';
import {Row, Col} from 'react-bootstrap';

interface Props {
  id: string;
}

function Stats(props: Props) {
  return (
    <Row className="m-4 d-flex justify-content-center">
      <Col lg={6} md={8} sm={10}>
        <Row>
          <h2 className="text-peacock font-weight-bold">Let's reprogram the tech world.</h2>
        </Row>
        <Row>
          <Percentage top="1995" percent="37%" color="text-blue" fact="of programmers are women."/>
          <Percentage top="2020" percent="24%" color="text-turq" fact="of programmers are women."/>
        </Row>
        <Row className={isMobile ? "mt-1" : "mt-4 mb-4"}>
          <h3 className="text-peacock font-weight-bold">Together, we can close the gender gap in CS.</h3>
        </Row>
        <Row className="mb-4">
            <CaptionedGraphic img={Circles} alt="#" caption="3 out of 4 young girls are interested in CS." />
            <CaptionedGraphic img={Allcaps} alt="#" caption="<20% of CS graduates at big universities in 2016 were women." />
            <CaptionedGraphic img={Dollar} alt="#" caption="Women in tech are paid 71 cents for the male dollar." />
        </Row>
      </Col>
    </Row>
  );
}

export default Stats;
