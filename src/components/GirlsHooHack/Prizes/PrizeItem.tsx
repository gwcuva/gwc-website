import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { Collapse } from 'react-collapse';
import { isMobile } from 'react-device-detect';

interface Props {
  key: string;
  name: string;
  detail: string;
}

function PrizeItem(props: Props): JSX.Element {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    if(isMobile) {
        return (
            <div className="mt-4">
                <Row>
                    <Col xs={9} className="d-flex justify-content-start">
                    <h3 className="mono font-weight-bold">{props.name}</h3>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end ml-3">
                    <div onClick={() => setDropdownOpen(!dropdownOpen)} 
                        aria-controls="collapse-prizes" aria-expanded={dropdownOpen}>
                        {dropdownOpen ? <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon> : 
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                    </div>
                    </Col>
                </Row>
                <Collapse isOpened={dropdownOpen}>
                    <p>{props.detail}</p>
                </Collapse>
            </div>
        );
    } else {
        return (
            <Col xs={4} className="mb-4">
                <h4 className="hack">{props.name}</h4>
                <p>{props.detail}</p>
            </Col>
        );
    }
}

export default PrizeItem;
