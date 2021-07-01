import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import SpeakerItem from './SpeakerItem';

function Speakers() {

    return (
        <Row className={`bg-hack-grey justify-content-center py-5`}>
            <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
                <h2 className="text-orange hack pb-3">Speakers</h2>
                <SpeakerItem name="AAA" image="BBB" bio="CCC" />
            </Col>
        </Row>

    );
}

export default Speakers;