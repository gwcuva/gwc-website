import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import SignUpMobile from '../../../assets/images/sign-up-mobile.svg';
import SignupBanner from '../../../assets/images/signup-banner.png';
import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';

interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    
    const [header, setHeader] = useState({'year': 2022, 'month': '', 'day': '', 'format': '', 'registration': ''});

    useEffect(() => {
      const fetchHeader = async () => {
        const { hackathonHeader } = await request(
          process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
          `
            { 
              hackathonHeader(where:{id:"cl5zuxlokir6p0dk1ffeqf39p"}) {
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
  

    return(
        <div id={props.id} className="container-fluid bg-turq">
            <meta id="viewport" name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"></meta>

            <Row className="mono text-blue pt-5 pl-4 pb-n5" style={{fontSize:13.5}}>
                <text><big>{header.year} {header.format} Hackathon</big></text>
            </Row>

            <Row xs={8} className="text-white pl-3 pt-n5">
                <h1>GIRLS HOO</h1>
            </Row>

            <Row xs={4} className="text-white pl-3 pt-n5">
                <h1>HACK</h1>
            </Row>

            <Row xs={10} className="mono text-blue pl-3" style={{fontSize:13}}>
                <text><big>The University of Virginia</big></text>
            </Row>

            <Row xs={10} className="text-blue pl-3 pt-n5">
                <h3>{header.month} {header.day}</h3>
            </Row>

            <Row>
                <Col xs={12} className="text-blue text-right">
                    <img className="position-absolute signUpTextMobile" src={SignUpMobile} alt="Sign Up text" />
                    <a href={header.registration} target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
                        <img className="position-relative" src={SignUpCircle} height="150px" width="150px" alt="Sign Up Circle"/>
                    </a>
                </Col>
            </Row>

            <Row xs={12} className="pt-5"></Row>
            
        </div>
    );
}

export default MobileHeader;