import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

interface Props {
    mem: {
        id: string;
        name: string;
        bio: string;
        headshot: { url: string }
    }
}

function PanelistItem(props: Props): JSX.Element {
    const mem = props.mem;
    if(isMobile) {
        return (
            <div>
                <Row className="justify-content-center">{mem.headshot.url && <img width="150px" height="150px" className="circleImg" src={mem.headshot.url} alt={`Headshot of ${mem.name}`} />}</Row>
                <Row className="justify-content-center">
                    <h4 className="hack">{mem.name}</h4>
                </Row>
                <Row className="justify-content-center">
                    <p>{mem.bio}</p>
                </Row>
            </div>
        );
    } else {
        return (
            <Col xs={4} className="mb-4 justify-content-center">
                <Row className="justify-content-center">{mem.headshot.url && <img width="200px" height="200px" className="circleImg" src={mem.headshot.url} alt={`Headshot of ${mem.name}`} />}</Row>
                <Row className="justify-content-center">
                    <h4 className="hack">{mem.name}</h4>
                </Row>
                <Row className="justify-content-center">
                    <p>{mem.bio}</p>
                </Row>
            </Col>
        );
    }
}

export default PanelistItem;