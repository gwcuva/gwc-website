import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

interface Props {
  name: string;
  img: string;
  position: string;
}

function Profile(props: Props) {

  const positions = new Map([
    ["President", "President"],
    ["VP", "Vice President"],
    ["Treasurer", "Treasurer"],
    ["Secretary", "Secretary"],
    ["Membership", "Director of Membership"],
    ["Curriculum", "Director of Curriculum"],
    ["Hackathon", "Director of Hackathon"],
    ["PR", "Director of Public Relations"]
  ])

  return (
    <Col xs={6} md={4}>
      <Row className="justify-content-center">{props.img && <img width={isMobile ? "100px" : "156px"} height={isMobile ? "100px" : "156px"} className="circleImg" src={props.img} alt={`Headshot of ${props.name}`} />}</Row>
      <p className="text-peacock mt-2 mb-0 text-center">{props.img && props.name}</p>
      <p className="text-peacock p2 text-center">{props.position && positions.get(props.position)}</p>
    </Col>
  );
}

export default Profile;
