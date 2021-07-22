import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

interface Props {
    key: string;
    name: string;
    bio: string;
}

function SpeakerItem(props: Props): JSX.Element {
    if(isMobile) {
        return (
            <div></div>
        );
    } else {
        return (
            <div>
                <Col xs={4} className="mb-4">
                    <h4 className="hack">{props.name}</h4>
                    <p>{props.bio}</p>
                </Col>
            </div>
        );
    }
}

export default SpeakerItem;