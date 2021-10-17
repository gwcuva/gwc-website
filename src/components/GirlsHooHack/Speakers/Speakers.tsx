import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import KeynoteItem from './KeynoteItem';
import PanelistItem from './PanelistItem';

function Speakers(): JSX.Element {
    const [keynotes, setKeynotes] = useState([{'id': '', 'name': '', 'image': '', 'bio': '', 'headshot': {'url': ''}, 'linkedIn': ''}]);
    const [panelists, setPanelists] = useState([{'id': '', 'name': '', 'image': '', 'bio': '', 'headshot': {'url': ''}, 'linkedIn': ''}]);
    useEffect(() => {
      const fetchKeynotes = async () => {
        const { hackathonKeynotes } = await request(
          process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
          `
            { 
              hackathonKeynotes {
                id
                name
                bio
                headshot {
                  url
                }
                linkedIn
              }
            }
          `
        );
        setKeynotes(hackathonKeynotes);
      };
      fetchKeynotes();

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
                linkedIn
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
                    <h2 className="text-orange hack">SPEAKERS</h2>
                    <h3 className="mono text-peach hack">KEYNOTE SPEAKERS</h3>
                    
                    {keynotes.map((keynote) => 
                      <KeynoteItem key={keynote.id} mem={keynote} />)}
                    <h3 className="mono text-peach hack mb-4">PANELISTS</h3>
                    {panelists.map((panelist) => 
                        <PanelistItem key={panelist.id} mem={panelist} />)}

                </div>
                :
                <div>
                    <h2 className="text-orange hack pb-3">Speakers</h2>
                    <h3 className="mono text-peach hack mb-4">Keynote Speakers</h3>
                    <Row className="justify-content-center">
                      {keynotes.map((keynote) => 
                          <KeynoteItem key={keynote.id} mem={keynote} />)}
                    </Row>
                    <h3 className="mono text-peach hack mb-4">Panelists</h3>
                    <Row>
                      {panelists.map((panelist) => 
                          <PanelistItem key={panelist.id} mem={panelist} />)}
                    </Row>
                </div>}
            </Col>
        </Row>
        </Col>
    </Row>

    );
}

export default Speakers;