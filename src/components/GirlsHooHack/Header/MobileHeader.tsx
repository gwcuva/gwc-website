import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import SignUpMobile from '../../../assets/images/sign-up-mobile.svg';
import SignupBanner from '../../../assets/images/signup-banner.png';


interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    return(
        <div id={props.id} className="container-fluid bg-turq">
            <meta id="viewport" name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"></meta>
            <Row>
                <Col xs={12}>
                <a href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank" rel="noreferrer noopener">
                    <img className="MLHBANNER pr-2" src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season" width="85" height="152"/> 
                </a>
                <a className="pr-5" href="https://girls-hoo-hack-2021.devpost.com/" target="_blank" rel="noreferrer noopener">
                    <img className="mobilesignupbanner float-right" src={SignupBanner} alt="Signup banner" width="50" height="100"/>
                </a>
                </Col>
            </Row>

            <Row className="mono text-blue pt-5 pl-4 pb-n5" style={{fontSize:13.5}}>
                <text><big>2022 Hybrid Hackathon</big></text>
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
                <h3>October 15-16</h3>
            </Row>

            <Row>
                <Col xs={12} className="text-blue text-right">
                    <img className="position-absolute signUpTextMobile" src={SignUpMobile} alt="Sign Up text" />
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdP4XyRDDwPlux5zBcaM7BVx_LXkg0pTQh_ZhHu37cTsancOw/viewform" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
                        <img className="position-relative" src={SignUpCircle} height="150px" width="150px" alt="Sign Up Circle"/>
                    </a>
                </Col>
            </Row>

            <Row xs={12} className="pt-5"></Row>
            
        </div>
    );
}

export default MobileHeader;