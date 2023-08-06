// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
// import { request } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
// import PrizeItem from './PrizeItem';

function Prizes(): JSX.Element {
  // const [prizes, setPrizes] = useState([{'id': '', 'prizeName': '', 'prizeObject': '', 'description': ''}]);

  useEffect(() => {
    const fetchPrizes = async () => {
      // const { hackathonPrizes } = await request(
      //   process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
      //   `
      //     { 
      //       hackathonPrizes(where: { year: 2022 }) {
      //         id
      //         prizeName
      //         prizeObject
      //         description
      //       }
      //     }
      //   `
      // );
      // setPrizes(hackathonPrizes);
    };
    fetchPrizes();
  }, []);

  return (
  <Row className={`bg-white justify-content-center py-5`} id="Prizes">
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
      <Row className={isMobile ? "" : "my-5"}>
        <Col>
          {isMobile ? 
              <div>
                <h2 className="text-orange hack" >PRIZES</h2>
                <p>Coming Soon!</p>
                {/* {prizes.length===0 ? <p>Coming Soon!</p> :
                prizes.map((prize) => 
                <PrizeItem key={prize.id} name={prize.prizeName} object={prize.prizeObject} detail={prize.description} ></PrizeItem>)} */}
              </div>
              :
              <div>
                <h2 className="text-orange hack pb-3" id="Prizes">Prizes</h2>
                <Row>
                  <p>Coming Soon!</p>
                  {/* {prizes.length===0 ? <p className='ml-3'>Coming Soon!</p> :
                  prizes.map((prize) => 
                    <PrizeItem key={prize.id} name={prize.prizeName} object={prize.prizeObject} detail={prize.description} ></PrizeItem>)} */}
                </Row>
              </div>}
        </Col>
      </Row>
    </Col>
  </Row>
  );
}

export default Prizes;
