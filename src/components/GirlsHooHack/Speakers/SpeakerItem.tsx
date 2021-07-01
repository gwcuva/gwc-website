import {Row, Col} from 'react-bootstrap';
import {BrowserView, isMobile, MobileView} from 'react-device-detect';

interface Props {
    name: string;
    image: string;
    bio: string;
}

function SpeakerItem(props: Props) {
    return (
        <div>
            <BrowserView>
                <Row>
                    <Col>
                        <Row>
                            {props.name}
                        </Row>
                        <Row>
                            {props.image}
                        </Row>
                    </Col>
                    <Col>
                        <p>{props.bio}</p>
                    </Col>
                </Row>
            </BrowserView>
            <MobileView>

            </MobileView>
        </div>
    );
}

export default SpeakerItem;