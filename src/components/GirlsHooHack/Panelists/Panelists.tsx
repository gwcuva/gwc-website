import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
//import PanelistItem from '../Speakers/PanelistItem';

function Panelists() {
    const [panelists, setPanelists] = useState([{'id': '', 'name': '', 'image': '', 'bio': '', 'headshot': {'url': ''}}]);

    useEffect(() => {
      const fetchPanelists = async () => {
        const { hackathonPanelists } = await request(
          process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
          `
            { 
                hackathonPanelists {
                id
                name
                bio
                headshot {
                  url
                }
              }
            }
          `
        );
        setPanelists(hackathonPanelists);
      };
      fetchPanelists();
    }, []);

    return (
    <Row className={`bg-white justify-content-center py-5`}>
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
        <Row className={isMobile ? "" : "my-5"}>
            <Col>
            {isMobile ? 
                <div>
                    <h2 className="text-orange hack">PANELISTS</h2>
                    {/* {panelists.map((panelists) => 
                        <PanelistItem mem={panelists} />)} */}
                </div>
                :
                <div>
                    <h2 className="text-orange hack pb-3">Panelists</h2>
                    <Row>
                    {/* {panelists.map((panelists) => 
                        <PanelistItem mem={panelists} />)} */}
                    </Row>
                </div>}
            </Col>
        </Row>
        </Col>
    </Row>

    );
}

export default Panelists;