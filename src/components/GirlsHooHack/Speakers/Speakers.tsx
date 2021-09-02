import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import SpeakerItem from './SpeakerItem';

function Speakers() {
    const [speakers, setSpeakers] = useState([{'id': '', 'name': '', 'image': '', 'bio': '', 'headshot': {'url': ''}}]);

    useEffect(() => {
      const fetchSpeakers = async () => {
        const { hackathonSpeakers } = await request(
          process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
          `
            { 
              hackathonSpeakers {
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
        setSpeakers(hackathonSpeakers);
      };
      fetchSpeakers();
    }, []);

    return (
    <Row className={`bg-white justify-content-center py-5`}>
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
        <Row className={isMobile ? "" : "my-5"}>
            <Col>
            {isMobile ? 
                <div>
                    <h2 className="text-orange hack">SPEAKERS</h2>
                    {speakers.map((speaker) => 
                    // <SpeakerItem key={speaker.id} name={speaker.name} bio={speaker.bio} headshot.url={speaker.headshot.url} ></SpeakerItem>)}
                    <SpeakerItem mem={speaker} />)}
                </div>
                :
                <div>
                    <h2 className="text-orange hack pb-3">Speakers</h2>
                    <Row>
                    {speakers.map((speaker) => 
                        // <SpeakerItem key={speaker.id} name={speaker.name} bio={speaker.bio} headshot.url={speaker.headshot.url} ></SpeakerItem>)}
                        <SpeakerItem mem={speaker} />)}
                    </Row>
                </div>}
            </Col>
        </Row>
        </Col>
    </Row>

    );
}

export default Speakers;