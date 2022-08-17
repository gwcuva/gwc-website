import { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { request } from 'graphql-request';

function SponsorshipProspectus(): JSX.Element {
  const [link, setLink] = useState({'year': 2022, 'url': ''});

  useEffect(() => {
    const fetchLink = async () => {
      const { hackathonProspectus } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonProspectus(where: {id: "cl6wzrs102i4u0biz171xcdgs"}) {
              url
              year
            }
          }
        `
      );
      setLink(hackathonProspectus);
    };

    fetchLink();
  }, []);


  return (
    <Row className={`bg-white justify-content-center py-5`}>
      <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
        <h2 className="text-orange hack">Sponsorship Prospectus</h2>
        <Row className={isMobile ? "" : "mt-4 mb-5"}>
          <Col md={10} xs={11} className={isMobile ? "my-3" : "mr-5"}>
            <h3 className="mono text-peach mt-4 mb-4" white-space="pre">Interested in sponsoring us? Check out our&nbsp;
              <a href={link.url}
                target="_blank" rel="noreferrer noopener" className="hoverColor">
                Sponsorship Prospectus
              </a>
              !
            </h3>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default SponsorshipProspectus;

