import {Row} from 'react-bootstrap';

interface Props {
    toggle? : () => void;
    id: string;
}

function MobileHeader(props: Props) {
    return(
        <div id={props.id} className="container-fluid bg-turq">
            <meta id="viewport" name="viewport" content="width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"></meta>
            <Row className="mono text-blue pt-5 pl-4 pb-n5" style={{fontSize:13.5}}>
                <text><big>2022 Hybrid Career Fair</big></text>
            </Row>

            <Row xs={8} className="text-white pl-3 pt-n5">
                <h1>GIRLS HOO</h1>
            </Row>

            <Row xs={4} className="text-white pl-3 pt-n5">
                <h1>CODE</h1>
            </Row>

            <Row xs={10} className="mono text-blue pl-3 pb-4" style={{fontSize:13}}>
                <text><big>The University of Virginia</big></text>
            </Row>

            <Row xs={10} className="text-blue pl-3 pt-n5">
                <h3>February 11th</h3>
            </Row>


            <Row xs={10} className="text-blue pl-3 pt-n5">
                <h3>11am - 3pm</h3>                
            </Row>

            <Row xs={12} className="pt-5"></Row>
            
        </div>
    );
}

export default MobileHeader;