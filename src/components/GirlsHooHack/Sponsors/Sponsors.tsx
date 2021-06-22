import React , { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import googleCloud from '../../../assets/images/google-cloud.png';
import stickerMule from '../../../assets/images/sticker-mule.png';
import wolfram from '../../../assets/images/wolfram.png';
import hackerearth from '../../../assets/images/hackerearth.png';
import uvads from '../../../assets/images/uva-datascience.png';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

function Sponsors() {

  const [sponsors, setSponsors] = useState<any[]>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const { hackathonSponsors } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonSponsors {
              sponsorImage {
                url
              }
            }
          }
        `
      );
      setSponsors(hackathonSponsors);
    };

    fetchSponsors();
  }, []);

  return (
    <div className="mx-auto pt-1 mt-1" style={{width:"85%"}}>
      <h2 className="text-orange hack py-5">Sponsors</h2>
      <Row className={`${isMobile ? "mt-3" : "mt-1"} d-flex justify-content-center`}>
        <Row className="justify-content-around">
          {sponsors.map(simg => 
          <img src={simg.sponsorImage.url} alt={``} />)}
        </Row>
      </Row>
      {sponsors.map(simg => <img width="150px" src={simg.sponsorImage.url} alt={``} />)}
      <img src={googleCloud} className={isMobile ? "row mx-auto" : ""} width="132.6px" height="132.6px" style={{marginRight:"8%"}} alt=""/>
      <img src={stickerMule} className={isMobile ? "row mx-auto mt-3 mb-4" : ""} width="220.61px" height="75px"style={{marginRight:"8%"}} alt=""/>
      <img src={wolfram} className={isMobile ? "row mx-auto mb-4" : ""} width="115px" height="91px" style={{marginRight:"10%"}} alt=""/>
      <img src={hackerearth} className={isMobile ? "row mx-auto mt-5 mb-5" : ""} width="149px" height="30px" style={{marginRight:"10%"}} alt=""/>
      <img src={uvads} className={isMobile ? "row mx-auto my-5" : ""} width="100.21px" height="100.21px" alt=""/>
    </div>
  );
}

export default Sponsors;
