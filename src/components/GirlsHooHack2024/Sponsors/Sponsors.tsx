import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import Image from 'react-bootstrap/Image';

function Sponsors() {
  const [sponsors, setSponsors] = useState([
    { level: '', sponsorImage: { url: '' }, sponsorName: '', sponsorUrl: '', size: '' }
  ]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const { hackathonSponsors } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : '',
        `
          { 
            hackathonSponsors(where: { year: 2024 }) {
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
      setSponsors(hackathonSponsors);
    };

    fetchSponsors();
  }, []);

  const goldsponsors = sponsors.filter((s) => s.level === 'Gold');
  const silversponsors = sponsors.filter((s) => s.level === 'Silver');
  const bronzesponsors = sponsors.filter((s) => s.level === 'Bronze');
  const othersponsors = sponsors.filter(
    (s) => s.level !== 'Gold' && s.level !== 'Silver' && s.level !== 'Bronze'
  );

  return (
    <Row className="justify-content-center bg-white py-5" id="Sponsors">
      <Col sm={10} xs={11} className={isMobile ? 'my-3' : 'my-5 py-5'}>
        <h2 className="text-orange hack">{isMobile ? 'SPONSORS' : 'Sponsors'}</h2>

        {goldsponsors.length === 0 && silversponsors.length === 0 && othersponsors.length === 0 && (
          <p>Coming Soon!</p>
        )}

        {goldsponsors.length > 0 && <h3 className="mono text-peach hack mt-5">Gold Sponsors</h3>}
        {goldsponsors.length > 0 && (
          <Row className={`${!isMobile && 'mt-1 mb-5'} d-flex justify-content-around`}>
            {goldsponsors.map((sponsor) => (
              <Col md={2} xs={12} className={`${isMobile ? 'mx-auto' : 'pt-5'} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ? (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-75 pb-3'
                          : sponsor.size === 'Med'
                          ? 'w-50 pb-2'
                          : 'pb-2 w-125'
                      } mx-auto d-block pt-5 sponsorImage`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  ) : (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-100 sponsorImage'
                          : sponsor.size === 'Med'
                          ? 'w-75 sponsorImage'
                          : 'largeSponsor'
                      }`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  )}
                </a>
              </Col>
            ))}
          </Row>
        )}

        {silversponsors.length > 0 && <h3 className="mono text-peach hack mt-2">Silver Sponsors</h3>}
        {silversponsors.length > 0 && (
          <Row className={`${!isMobile && 'mt-1 mb-5'} d-flex justify-content-around`}>
            {silversponsors.map((sponsor) => (
              <Col md={2} xs={12} className={`${isMobile ? 'mx-auto' : 'pt-5'} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ? (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-75 pb-3'
                          : sponsor.size === 'Med'
                          ? 'w-50 pb-2'
                          : 'pb-2 w-125'
                      } mx-auto d-block pt-5 sponsorImage`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  ) : (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-100 sponsorImage'
                          : sponsor.size === 'Med'
                          ? 'w-75 sponsorImage'
                          : 'largeSponsor'
                      }`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  )}
                </a>
              </Col>
            ))}
          </Row>
        )}

        {bronzesponsors.length > 0 && <h3 className="mono text-peach hack mt-2">Bronze Sponsors</h3>}
        {bronzesponsors.length > 0 && (
          <Row className={`${!isMobile && 'mt-1 mb-5'} d-flex justify-content-around`}>
            {bronzesponsors.map((sponsor) => (
              <Col md={2} xs={12} className={`${isMobile ? 'mx-auto' : 'pt-5'} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ? (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-75 pb-3'
                          : sponsor.size === 'Med'
                          ? 'w-50 pb-2'
                          : 'pb-2 w-125'
                      } mx-auto d-block pt-5 sponsorImage`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  ) : (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-100 sponsorImage'
                          : sponsor.size === 'Med'
                          ? 'w-75 sponsorImage'
                          : 'largeSponsor'
                      }`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  )}
                </a>
              </Col>
            ))}
          </Row>
        )}

        {othersponsors.length > 0 && <h3 className="mono text-peach hack mt-2">Partners</h3>}
        {othersponsors.length > 0 && (
          <Row className={`${!isMobile && 'mt-1 mb-5'} d-flex justify-content-around`}>
            {othersponsors.map((sponsor) => (
              <Col md={2} xs={12} className={`${isMobile ? 'mx-auto' : 'pt-5'} my-auto mr-3`} key={sponsor.sponsorName}>
                <a href={sponsor.sponsorUrl} target="_blank" rel="noreferrer">
                  {isMobile ? (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-75 pb-3'
                          : sponsor.size === 'Med'
                          ? 'w-50 pb-2'
                          : 'pb-2 w-125'
                      } mx-auto d-block pt-5 sponsorImage`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  ) : (
                    <Image
                      className={`${
                        sponsor.size === 'Small'
                          ? 'w-100 sponsorImage'
                          : sponsor.size === 'Med'
                          ? 'w-75 sponsorImage'
                          : 'largeSponsor'
                      }`}
                      src={sponsor.sponsorImage.url}
                      alt={sponsor.sponsorName}
                      fluid
                    />
                  )}
                </a>
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Row>
  );
}
export default Sponsors;
