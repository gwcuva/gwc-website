import React , { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import Image from 'react-bootstrap/Image';

function Sponsors() {
  /*return (
    <Row className={`bg-hack-grey justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack">Companies Attending</h2>
        <h3 className="text-peach mono font-weight-bold">TBA</h3>
      </Col>
    </Row>*/

  const [sponsors, setSponsors] = useState([{'level': '', 'sponsorImage': {'url': ''}, 'sponsorName': '', 'sponsorUrl': '', 'size': ''}]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const { careerFairSponsors } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            careerFairSponsors {
              level
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
      setSponsors(careerFairSponsors);
    };

    fetchSponsors();
  }, []);

  const goldsponsors = sponsors.filter( function (s) {
    return s.level === "Gold"
  });
  const silversponsors = sponsors.filter( function (s) {
    return s.level === "Silver"
  });
  const bronzesponsors = sponsors.filter( function (s) {
    return s.level === "Bronze"
  });
  const othersponsors = sponsors.filter( function (s) {
    return (s.level !== "Gold" && s.level !=="Silver" && s.level !== "Bronze");
  });

  return (
    <div id="Sponsors" className="overflow-x-hidden">
      <Row className="justify-content-center bg-hack-grey py-5" id="CFSponsors">
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
          <h2 className="text-orange hack">Sponsors</h2>
          {goldsponsors.length>0 && <h3 className="mono text-peach hack mt-5">Gold Sponsors</h3>}
          {goldsponsors.length>0 &&
          <Row className={`${!isMobile && "mt-1 mb-5"} d-flex justify-content-around`}>
            {goldsponsors.map((sponsor) => 
              <Col md={2} xs={12} className={`${isMobile ? "mx-auto" : "pt-5"} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ?
                    <Image 
                      className={`${sponsor.size!=="Small" ? "w-75 pb-3" : "w-50 pb-2"} mx-auto d-block pt-5 sponsorImage`} 
                      src={sponsor.sponsorImage.url} alt={sponsor.sponsorName} fluid
                    />
                    :
                    <Image className={`${sponsor.size!=="Small" ? "w-100" : "w-75"} sponsorImage`} src={sponsor.sponsorImage.url} 
                    alt={sponsor.sponsorName} fluid />
                  }
                </a>
              </Col>
            )}
          </Row>
          }
          {silversponsors.length>0 && <h3 className="mono text-peach hack mt-2">Silver Sponsors</h3>}
          {silversponsors.length>0 &&
          <Row className={`${!isMobile && "mt-1 mb-5"} d-flex justify-content-around`}>
            {silversponsors.map((sponsor) => 
              <Col md={2} xs={12} className={`${isMobile ? "mx-auto" : "pt-5"} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ?
                    <Image 
                      className={`${sponsor.size!=="Small" ? "w-75 pb-3" : "w-50 pb-2"} mx-auto d-block pt-5 sponsorImage`} 
                      src={sponsor.sponsorImage.url} alt={sponsor.sponsorName} fluid
                    />
                    :
                    <Image className={`${sponsor.size!=="Small" ? "w-100" : "w-75"} sponsorImage`} src={sponsor.sponsorImage.url} 
                    alt={sponsor.sponsorName} fluid />
                  }
                </a>
              </Col>
            )}
          </Row>
          }
          {bronzesponsors.length>0 && <h3 className="mono text-peach hack mt-2">Bronze Sponsors</h3>}
          {bronzesponsors.length>0 &&
          <Row className={`${!isMobile && "mt-1 mb-5"} d-flex justify-content-around`}>
            {bronzesponsors.map((sponsor) => 
              <Col md={2} xs={12} className={`${isMobile ? "mx-auto" : "pt-5"} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ?
                    <Image 
                      className={`${sponsor.size!=="Small" ? "w-75 pb-3" : "w-50 pb-2"} mx-auto d-block pt-5 sponsorImage`} 
                      src={sponsor.sponsorImage.url} alt={sponsor.sponsorName} fluid
                    />
                    :
                    <Image className={`${sponsor.size!=="Small" ? "w-100" : "w-75"} sponsorImage`} src={sponsor.sponsorImage.url} 
                    alt={sponsor.sponsorName} fluid />
                  }
                </a>
              </Col>
            )}
          </Row>
          }
          {othersponsors.length>0 && <h3 className="mono text-peach hack mt-2">Bronze Sponsors</h3>}
          {othersponsors.length>0 &&
          <Row className={`${!isMobile && "mt-1 mb-5"} d-flex justify-content-around`}>
            {othersponsors.map((sponsor) => 
              <Col md={2} xs={12} className={`${isMobile ? "mx-auto" : "pt-5"} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ?
                    <Image 
                      className={`${sponsor.size!=="Small" ? "w-75 pb-3" : "w-50 pb-2"} mx-auto d-block pt-5 sponsorImage`} 
                      src={sponsor.sponsorImage.url} alt={sponsor.sponsorName} fluid
                    />
                    :
                    <Image className={`${sponsor.size!=="Small" ? "w-100" : "w-75"} sponsorImage`} src={sponsor.sponsorImage.url} 
                    alt={sponsor.sponsorName} fluid />
                  }
                </a>
              </Col>
            )}
          </Row>
          }
        </Col>
      </Row>
    </div>
  );
}

export default Sponsors;
