import { Col, Row } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';
import logo from '../../../assets/images/peacock-logo.svg';
import Waves from '../../../assets/images/hack-header-waves.svg';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import SignUpMobile from '../../../assets/images/sign-up-mobile.svg';
import SignUpBanner from '../../../assets/images/sign-up-banner.svg';

interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    return(
        <div id={props.id} className="container-fluid bg-turq">
            <Row className="align-items-center justify-content-between">
                <img src={logo} className="pl-4 mt-n5" width="150px" height="82px" alt="Girls Who Code at the University of Virginia logo"/>
                <img src={SignUpBanner} className="pr-4" alt="Sign up banner"/>
            </Row>
            <Row className="text-blue pt-5 pl-4 pb-n5">
                <p>2021 Virtual Hackathon</p>
            </Row>
            <Row xs={8} className="text-white pl-3 pt-n5">
                <h1>GIRLS HOO HACK</h1>
            </Row>
            <Row xs={12} className="text-blue pl-3">
                <p>The University of Virginia</p>
            </Row>
            <Row xs={12} className="text-blue pl-3 pt-n5">
                <h3>November 06-07</h3>
            </Row>

            <Row xs={12} className="float-right"
                style={{backgroundImage: `url(${SignUpMobile})`, 
                backgroundRepeat:"no-repeat",
                width:"70%",
                height:"70%"}}>
                    <a href="https://discord.gg/D8knkzNM8E" onClick={props.toggle}>
                    <img src={SignUpCircle} height="180px" alt="Sign Up Circle"/>
                    </a>
            </Row> 

            <Row xs={12}>
                <img src={Waves} width="100%" alt="Waves"/> 
            </Row>

            <Row xs={12}> 
            </Row>
            <Row xs={12}>
            </Row>
                
        </div>
    );
}

export default MobileHeader;