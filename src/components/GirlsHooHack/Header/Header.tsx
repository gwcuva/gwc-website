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
    <div id={props.id} className="container-fluid m-0 bg-turq" >
        
        <Row xs={12} className="pt-5"></Row>
        <Row xs={12} className="pt-5"></Row>
        <Row xs={12} className="pt-5"></Row>
        <Row xs={12} className="pt-5"></Row>

        <img className="w-100 position-absolute ml-n3 mt-4" src={Waves} alt="Orange waves"/>

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
          <Col xs={4}><h2 className={isMobile ? "text-blue":"text-blue font-weight-bold pt-4"}>2021 HYBRID HACKATHON</h2></Col>
        </Row>

        <Row className="pt-0 mt-n5 pb-5">
          <Col xs={2}></Col>
          <Col xs={6}>
            <h1 className="text-white">HACK</h1>
          </Col>
          <Col>
            <img className="position-absolute signUpTextDesktop" src={SignUpText} alt="Sign Up text" />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdP4XyRDDwPlux5zBcaM7BVx_LXkg0pTQh_ZhHu37cTsancOw/viewform" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
              <img className="position-relative" src={SignUpCircle} alt="Sign Up Circle"/>
            </a>
          </Col>
        </Row>

        <Row xs={12} className="pt-5 pb-5"></Row>
        <Row xs={12} className="pt-5 pb-5"></Row>

    </div>
  );
}

export default Header;