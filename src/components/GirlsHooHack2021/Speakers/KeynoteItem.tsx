import {Row, Col} from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

interface Props {
    mem: {
        id: string;
        name: string;
        bio: string;
        headshot: { url: string }
        linkedIn: string;
    }
}

function KeynoteItem(props: Props): JSX.Element {
    const mem = props.mem;
    if(isMobile) {
        return (
            <a href={`https://linkedin.com/in/${mem.linkedIn}`} target="_blank" rel="noopener noreferrer">
                <Row className="justify-content-center">{mem.headshot.url && <img width="200px" height="200px" className="circleImg" src={mem.headshot.url} alt={`Headshot of ${mem.name}`} />}</Row>
                <p className="text-peacock mt-2 mb-0 text-center">{mem.name}</p>
                <p className="text-peacock p2 text-center">{mem.bio}</p>
            </a>
        );
    } else {
        return (
            <Col xs={5} className="mb-4 justify-content-center">
                <a  href={`https://linkedin.com/in/${mem.linkedIn}`} target="_blank" rel="noopener noreferrer">
                    <Row className="justify-content-center">{mem.headshot.url && <img width="230px" height="230px" className="circleImg" src={mem.headshot.url} alt={`Headshot of ${mem.name}`} />}</Row>
                    <p className="text-peacock mt-2 mb-0 text-center">{mem.name}</p>
                    <p className="text-peacock p2 text-center">{mem.bio}</p>
                </a>
            </Col>
        );
    }
}

export default KeynoteItem;