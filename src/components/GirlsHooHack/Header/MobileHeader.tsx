import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import SignUpMobile from '../../../assets/images/sign-up-mobile.svg';
import MLHBanner from '../../../assets/images/mlh-banner.svg';

interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    return(
        <div id={props.id} className="container-fluid bg-turq">

            <img className="mlhbannermobile" src={MLHBanner} alt="MLH Banner"/>

            <Row className="mono text-blue pt-5 pl-4 pb-n5" style={{fontSize:13.5}}>
                <text><big>2021 Hybrid Hackathon</big></text>
            </Row>

            <Row xs={8} className="text-white pl-3 pt-n5">
                <h1>GIRLS HOO</h1>
            </Row>

            <Row xs={4} className="text-white pl-3 pt-n5">
                <h1>HACK</h1>
            </Row>

            <Row xs={10} className="mono text-blue pl-3" style={{fontSize:13}}>
                <text><big>The University of Virginia</big></text>
            </Row>

            <Row xs={10} className="text-blue pl-3 pt-n5">
                <h3>November 06-07</h3>
            </Row>

            <Row>
                <Col xs={12} className="text-blue text-right">
                    <img className="position-absolute signUpTextMobile" src={SignUpMobile} alt="Sign Up text" />
                    <a href="https://girls-hoo-hack-2021.devpost.com/" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
                        <img className="position-relative" src={SignUpCircle} height="150px" width="150px" alt="Sign Up Circle"/>
                    </a>
                </Col>
            </Row>

            <Row xs={12} className="pt-5"></Row>
            
        </div>
    );
}

export default MobileHeader;