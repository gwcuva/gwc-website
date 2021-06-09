import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Waves from '../../../assets/images/hack-header-desktop-wave.svg';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import UVA from '../../../assets/images/uva.svg';
import SignUpText from '../../../assets/images/sign-up-text.svg';

interface Props {
  toggle? : () => void;
  id: string;
}

function Header(props: Props) {
  return (
    <div id={props.id} className="container-fluid m-0 bg-turq" 
    style={{backgroundImage: `url(${Waves})`, 
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px 325px",
              width:"100%" }}>

        <Row xs={12} className="pt-5"></Row>
        <Row xs={12} className="pt-5"></Row>

        <Row xs={12} className="pl-5">
            <Col xs={1}></Col>
            <Col md={8}><h1 className="text-white pl-5">GIRLS</h1></Col>         

            <Col xs={3} className="text-blue">
              <img src={UVA} alt="UVA text"/>
              <h3>November</h3>
              <h3>06-07</h3>
            </Col>
        </Row>

        <Row xs={12} className="mt-n5">
          <Col xs={1}></Col>
          <Col xs={3}><h1 className={isMobile ? "text-white":"text-white"}>HOO</h1></Col>
          <Col xs={4}><h2 className={isMobile ? "text-blue":"text-blue font-weight-bold pt-4"}>2021 VIRTUAL HACKATHON</h2></Col>
        </Row>

        <Row className="pt-0 mt-n5 pb-5">
          <Col xs={2}></Col>
          <Col xs={6}><h1 className="text-white">HACK</h1></Col>
          <Col 
          style={{backgroundImage: `url(${SignUpText})`, 
          backgroundRepeat:"no-repeat",
          backgroundPosition: "95px 100px"}}>
            <a href="https://forms.gle/ChhpzSwMjC8gZNm38" onClick={props.toggle}>
              <img src={SignUpCircle} alt="Sign Up Circle"/>
            </a>
          </Col>
        </Row>

        <Row xs={12} className="pt-5 pb-5"></Row>
        <Row xs={12} className="pt-5 pb-5"></Row>
        <Row xs={12} className="pt-5 pb-5"></Row>

    </div>
  );
}

export default Header;
