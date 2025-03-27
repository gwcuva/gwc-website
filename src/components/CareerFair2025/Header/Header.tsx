import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
// import Waves from '../../../assets/images/hack-header-desktop-wave.svg';
import UVA from '../../../assets/images/uva.svg';
import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

interface Props {
  toggle? : () => void;
  id: string;
}

function Header(props: Props) {
  const [header, setHeader] = useState({'year': 2025, 'month': '', 'day': '', 'format': '', 'registration': '', 'time': ''});

  useEffect(() => {
    const fetchHeader = async () => {
      const { careerFairHeader } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            careerFairHeader(where:{year:2025}) {
              year
              month
              day
              format
              time
              registration
            }
          }
        `
      );
      setHeader(careerFairHeader);
    };

    fetchHeader();
  }, []);

  return (
    <div id={props.id} className="overflow-x-hidden container-fluid m-0 bg-turq" >
        <Row xs={12} className="pt-5"></Row>
        <Row xs={12} className="pt-5"></Row>
        <Row xs={12} className="pt-5"></Row>
        <Row xs={12} className="pt-5"></Row>

        <Row xs={12} className="pl-5">
            <Col xs={1}></Col>
            <Col md={8}><h1 className="text-white pl-5">GIRLS</h1></Col>         

            <Col xs={3}>
              <img src={UVA} alt="UVA text"/>
              <h3 className="text-blue"> {header.month} {header.day}</h3>
              <h3 className="text-blue"> {header.time}</h3>
            </Col>
        </Row>

        <Row xs={12} className="mt-n5">
          <Col xs={1}></Col>
          <Col xs={3} className="text-white"><h1>WHO</h1></Col>
          <Col xs={4}><h2 className={isMobile ? "text-blue":"text-blue font-weight-bold pt-4"}>{header.year} {header.format} CAREER FAIR</h2></Col>
          <Col xs={1}></Col>
          <Col xs={3} className="h1 pl-4 pt-4"> <a className="text-white font-weight-bold" href={header.registration} target="_blank" rel="noreferrer noopener"> <u>REGISTER</u> </a> </Col>
        </Row>

        <Row className="pt-0 mt-n5 pb-5">
          <Col xs={2}></Col>
          <Col xs={6}>
            <h1 className="text-white">CODE</h1>
          </Col>
        </Row>

        <Row xs={12} className="pt-5 pb-5"></Row>
        <Row xs={12} className="pt-5 pb-5"></Row>

    </div>
  );
}

export default Header;