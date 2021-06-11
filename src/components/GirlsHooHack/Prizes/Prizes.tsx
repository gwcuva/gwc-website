import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import PrizeItemDesktop from './PrizeItemDesktop';

function Prizes() {
  const [prizes, setPrizes] = useState([{'prizeName': '', 'description': ''}]);

  useEffect(() => {
    const fetchPrizes = async () => {
      const { hackathonPrizes } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonPrizes {
              prizeName
              description
            }
          }
        `
      );
    
      setPrizes(hackathonPrizes);
    };

    fetchPrizes();
  }, []);

  console.log("num events: " + prizes.length);
  for (let i = 0; i < prizes.length; i++) {
    console.log(prizes[i].prizeName);
    console.log(prizes[i].description);
  }

  return (
  <Row className={`bg-white justify-content-center py-5`}>
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
      <Row className={isMobile ? "" : "my-5"}>
        {isMobile ? <Col></Col> 
        
        : 
        <Col>
          <h2 className="text-orange hack">Prizes</h2>
          <Row>
            {prizes.map((prize) => 
              <PrizeItemDesktop name={prize.prizeName} detail={prize.description} ></PrizeItemDesktop>)}
          </Row>
        </Col>}
      </Row>
    </Col>
  </Row>
  );
}

export default Prizes;
