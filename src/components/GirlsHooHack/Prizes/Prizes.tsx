import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import PrizeItemMobile from './PrizeItemMobile';
import PrizeItemDesktop from './PrizeItemDesktop';

function Prizes() {
  const [prizes, setPrizes] = useState([{'id': '', 'prizeName': '', 'description': ''}]);

  useEffect(() => {
    const fetchPrizes = async () => {
      const { hackathonPrizes } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonPrizes {
              id
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

  return (
  <Row className={`bg-white justify-content-center py-5`}>
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
      <Row className={isMobile ? "" : "my-5"}>
        {isMobile ? <Col>
          <h2 className="text-orange hack">PRIZES</h2>
          
          {prizes.map((prize) => 
            <PrizeItemMobile key={prize.id} name={prize.prizeName} detail={prize.description} ></PrizeItemMobile>)}
          
        </Col> 
        : 
        <Col>
          <h2 className="text-orange hack">Prizes</h2>
          <Row>
            {prizes.map((prize) => 
              <PrizeItemDesktop key={prize.id} name={prize.prizeName} detail={prize.description} ></PrizeItemDesktop>)}
          </Row>
        </Col>}
      </Row>
    </Col>
  </Row>
  );
}

export default Prizes;
