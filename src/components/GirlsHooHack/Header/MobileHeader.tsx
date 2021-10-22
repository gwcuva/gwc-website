import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import SignUpMobile from '../../../assets/images/sign-up-mobile.svg';
import MLHBanner from '../../../assets/images/mlh-banner.png';

interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    return(
        <div id={props.id} className="container-fluid bg-turq">
            <meta id="viewport" name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"></meta>
            <Row>
                <a className="pl-5" href="https://mlh.io/seasons/2022/events" target="_blank" rel="noreferrer noopener">
                     <img className="mlhbannermobile float-right" src={MLHBanner} alt="MLH banner"/>
                </a>
            </Row>

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
                    <a href="https://forms.gle/ChhpzSwMjC8gZNm38" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
                        <img className="position-relative" src={SignUpCircle} height="150px" width="150px" alt="Sign Up Circle"/>
                    </a>
                </Col>
            </Row>

            <Row xs={12} className="pt-5"></Row>
            
        </div>
    );
}

export default MobileHeader;