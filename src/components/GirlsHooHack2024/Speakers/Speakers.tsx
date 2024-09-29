import { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import KeynoteItem from './KeynoteItem';
// import PanelistItem from './PanelistItem';

function Speakers(): JSX.Element {
    const [keynotes, setKeynotes] = useState([{'id': '', 'name': '', 'image': '', 'bio': '', 'headshot': {'url': ''}, 'linkedIn': ''}]);
    // const [panelists, setPanelists] = useState([{'id': '', 'name': '', 'image': '', 'bio': '', 'headshot': {'url': ''}, 'linkedIn': ''}]);
    useEffect(() => {
      const fetchKeynotes = async () => {
        const { hackathonKeynotes } = await request(
          process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
          `
            { 
              hackathonKeynotes(where: { year: 2024 }) {
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


      // const fetchPanelists = async () => {
      //   const { hackathonPanelists } = await request(
      //     process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
      //     `
      //       { 
      //           hackathonPanelists(where: { year: 2024 }) {
      //           id
      //           name
      //           bio
      //           headshot {
      //             url
      //           }
      //           linkedIn
      //         }
      //       }
      //     `
      //   );
      //   setPanelists(hackathonPanelists);
      // };
      // fetchPanelists();

    }, []);

    return (
    <Row className={`bg-hack-grey justify-content-center py-5`} id="Speakers">
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
        <Row className={isMobile ? "" : "my-5"}>
            <Col>
            {isMobile ? 
                <div>
                    <h2 className="text-orange hack">SPEAKERS</h2>
                    <h3 className="mono text-peach hack">KEYNOTE SPEAKERS</h3>
                    {/* <p>Coming Soon!</p> */}
                    {keynotes.length===0 ? <p>Coming Soon!</p> : 
                    <div> 
                      {keynotes.map((keynote) => 
                      <KeynoteItem key={keynote.id} mem={keynote} />)}
                    </div>
                    }

                    {/* <h3 className="mono text-peach hack mb-4">PANELISTS</h3>
                    {panelists.map((panelist) => 
                        <PanelistItem key={panelist.id} mem={panelist} />)} */}

                </div>
                :
                <div>
                    {/* <h2 className="text-orange hack">Speakers</h2> */}
                    <h3 className="mono text-peach hack mb-4">Keynote Speakers</h3>
                    {/* <p>Coming Soon!</p> */}
                    {keynotes.length===0 ? <p>Coming Soon!</p> : 
                      <Row className="justify-content-center mt-5">
                        {keynotes.map((keynote) => 
                            <KeynoteItem key={keynote.id} mem={keynote} />)}
                      </Row>
                    } 

                    {/* <h3 className="mono text-peach hack mb-4">Panelists</h3>
                    <Row>
                      {panelists.map((panelist) => 
                          <PanelistItem key={panelist.id} mem={panelist} />)}
                    </Row> */}

                </div>}
            </Col>
        </Row>
        </Col>
    </Row>

    );
}

export default Speakers;