import React from 'react';
import { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function Newsletter() {
    // let emailInput = React.createRef();
    // const emailInput = useRef(null);
    const emailInput = useRef<HTMLInputElement>(null);
    function signUp(e: any) {
        e.preventDefault()
        console.log("sign up");
        if(emailInput && emailInput.current) {
            console.log(emailInput.current.value);
            emailInput.current.value = "";
        }
        
            
    }
  return (
    <Row className={`bg-white justify-content-center py-5`}>
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "py-5"}>
        <Row className={isMobile ? "" : "my-5"}>
            <Col>
            {isMobile ? 
                <div>
                    <h2 className="text-orange hack">NEWSLETTER</h2>
                </div>
                :
                <div>
                    <h2 className="text-orange hack pb-3">Sign up for our newsletter below</h2>
                    <form onSubmit={signUp}>
                        {/* <Row>
                            <Col>
                            </Col>
                        </Row> */}
                        <input type="text" ref={emailInput} placeholder="Enter email"></input>
                        <button type="submit" className="btn btn-primary ml-3">Sign up</button>
                    </form>
                </div>}
            </Col>
        </Row>
        </Col>
    </Row>
  );
}

export default Newsletter;