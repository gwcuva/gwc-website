import { useRef } from 'react';
import { GraphQLClient, gql } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function Newsletter() {
    const emailInput = useRef<HTMLInputElement>(null);
    const endpoint = process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "";
    const graphcmsToken = process.env.REACT_APP_GRAPHCMS_TOKEN ? process.env.REACT_APP_GRAPHCMS_TOKEN : "";
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
          authorization: `Bearer ${graphcmsToken}`,
        },
    });

    const signUp = async (e: any) => {
        e.preventDefault();
        console.log("sign up");
        if(emailInput && emailInput.current) {
            console.log(emailInput.current.value);

            const mutation = gql`
                mutation CreateHackNewsletterEmails($email: String!) {
                    createHackNewsletterEmails(data: {email: $email}) {
                        id
                        email
                    }
                }
            `
            const variables = {
                email: emailInput.current.value,
            }
        
            const data = await graphQLClient.request(mutation, variables);
            console.log(data);
            emailInput.current.value = "";
        }
    };

  return (
    <Row className="bg-hack-grey justify-content-center py-5"id="Newsletter">
    <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
      <h2 className="text-orange hack" >Sign Up for Our Newsletter</h2>
      <Row className={isMobile ? "" : "mt-4 mb-5"}>
        <Col md={10} xs={5} className={isMobile ? "my-3" : "mr-5"}>
        <form className="mt-4 mb-4" onSubmit={signUp}>
            <input type="text" ref={emailInput} placeholder="Enter email"></input>
            <button type="submit" className="btn btn-primary ml-3">Sign up</button>
        </form>
        </Col>
        </Row>
      </Col>
  </Row>
  );
}

export default Newsletter;