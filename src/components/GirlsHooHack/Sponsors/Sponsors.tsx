import React , { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Image from 'react-bootstrap/Image';

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
              sponsorName
              sponsorUrl
              size
            }
          }
        `
      );
      setSponsors(hackathonSponsors);
    };

    fetchSponsors();
  }, []);

  return (
    <Row className={`justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack">Sponsors</h2>
        <Row className={`${!isMobile && "mt-1 mb-5"} d-flex justify-content-around`}>
          {sponsors.map(sponsor => 
            <Col md={2} xs={12} className={`${isMobile ? "mx-auto" : "pt-5"} my-auto mr-3`}>
              <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                {isMobile ?
                  <Image 
                    className={`${sponsor.size==="Small" ? "w-75 pb-3" : "w-50 pb-2"} mx-auto d-block pt-5`} 
                    src={sponsor.sponsorImage.url} alt={sponsor.sponsorName} fluid
                  />
                  :
                  <Image className={sponsor.size==="Small" ? "w-100" : "w-75"} src={sponsor.sponsorImage.url} alt={sponsor.sponsorName} fluid />
                }
              </a>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Sponsors;
