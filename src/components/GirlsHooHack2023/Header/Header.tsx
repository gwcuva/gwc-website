import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Waves from '../../../assets/images/hack-header-desktop-wave.svg';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import UVA from '../../../assets/images/uva.svg';
import SignUpText from '../../../assets/images/sign-up-text.svg';
import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

interface Props {
  toggle? : () => void;
  id: string;
}

function Header(props: Props) {

  const [header, setHeader] = useState({'year': 2023, 'month': '', 'day': '', 'format': '', 'registration': ''});

  useEffect(() => {
    const fetchHeader = async () => {
      const { hackathonHeader } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonHeader(where:{year:2023}) {
              year
              month
              day
              format
              registration
            }
          }
        `
      );
      setHeader(hackathonHeader);
    };

    fetchHeader();
  }, []);

  return (
    <div className="container-fluid m-0 bg-turq" >
        
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
              <h3> {header.month} </h3>
              <h3> {header.day} </h3>
            </Col>
        </Row>

        <Row xs={12} className="mt-n5">
          <Col xs={1}></Col>
          <Col xs={3}><h1 className={isMobile ? "text-white":"text-white"}>HOO</h1></Col>
          <Col xs={4}><h2 className={isMobile ? "text-blue":"text-blue font-weight-bold pt-4"}>{String(header.year) +" "+ header.format}</h2></Col>
        </Row>

        <Row className="pt-0 mt-n5 pb-5">
          <Col xs={2}></Col>
          <Col xs={6}>
            <h1 className="text-white">HACK</h1>
          </Col>
          <Col>
            <img className="position-absolute signUpTextDesktop" src={SignUpText} alt="Sign Up text" />
            <a href={header.registration} target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
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