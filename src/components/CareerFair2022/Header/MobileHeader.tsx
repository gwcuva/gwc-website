import {Row, Col} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { request } from 'graphql-request';

interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    const [header, setHeader] = useState({'year': 2022, 'month': '', 'day': '', 'format': '', 'registration': '', 'time': ''});

  useEffect(() => {
    const fetchHeader = async () => {
      const { careerFairHeader } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            careerFairHeader(where:{year:2022}) {
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
    return(
        <div id={props.id} className="container-fluid bg-turq">
            <meta id="viewport" name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"></meta>
            <Row className="mono text-blue pt-5 pl-4 pb-n5" style={{fontSize:13.5}}>
                <text><big>{header.year} {header.format} Career Fair</big></text>
            </Row>

            <Row xs={8} className="text-white pl-3 pt-n5">
                <h1>GIRLS HOO</h1>
            </Row>

            <Row xs={4} className="text-white pl-3 pt-n5">
                <h1>CODE</h1>
            </Row>

            <Row xs={10} className="mono text-blue pl-3 pb-4" style={{fontSize:13}}>
                <text><big>The University of Virginia</big></text>
            </Row>

            <Row xs={10} className="text-blue pl-3 pt-n5 justify-content-between align-items-center">
                <h3>{header.month} {header.day}</h3>
                <Col xs={5} className="h3"> <a className="text-white font-weight-bold" href={header.registration} target="_blank" rel="noreferrer noopener"> <u>REGISTER</u> </a> </Col>
            </Row>


            <Row xs={10} className="text-blue pl-3 pt-n5">
                <h3>{header.time}</h3>                
            </Row>

            <Row xs={12} className="pt-5"></Row>
            
        </div>
    );
}

export default MobileHeader;