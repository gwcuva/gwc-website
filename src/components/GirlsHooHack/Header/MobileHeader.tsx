import {Row} from 'react-bootstrap';
//import logo from '../../../assets/images/peacock-logo.svg';
import SignUpCircle from '../../../assets/images/sign-up-hack-circle.svg';
import SignUpMobile from '../../../assets/images/sign-up-mobile.svg';
//import SignUpBanner from '../../../assets/images/sign-up-banner.svg';

interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    return(
        <div id={props.id} className="container-fluid bg-turq">

            {/*<Row className="justify-content-between align-items-center">
                //<img src={logo} className="pl-2" width="75px" height="41px" alt="Girls Who Code at the University of Virginia logo"/>
                //<img src={SignUpBanner} className="pr-4" width="80px" height="100px" alt="Sign up banner"/>
            </Row>*/}

            <Row className="text-blue pt-5 pl-4 pb-n5" style={{fontSize:13, letterSpacing: 2}}>
                <text><big>2021 Virtual Hackathon</big></text>
            </Row>

            <Row xs={8} className="text-white pl-3 pt-n5">
                <h1>GIRLS HOO</h1>
            </Row>

            <Row xs={4} className="text-white pl-3 pt-n5">
                <h1>HACK</h1>
            </Row>

            <Row xs={10} className="text-blue pl-3" style={{fontSize:13, letterSpacing: 2}}>
                <text><big>The University of Virginia</big></text>
            </Row>

            <Row xs={10} className="text-blue pl-3 pt-n5">
                <h3>November 06-07</h3>
            </Row>

            <Row xs={12} className="pr-3" style={{
                backgroundImage: `url(${SignUpMobile})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "243px 55px",
                flexDirection: 'row', 
                justifyContent: 'flex-end'}}>
                    <a href="https://forms.gle/ChhpzSwMjC8gZNm38" onClick={props.toggle}>
                    <img src={SignUpCircle} height="175px" width="150px" alt="Sign Up Circle"/>
                    </a>
            </Row> 
        </div>
    );
}

export default MobileHeader;