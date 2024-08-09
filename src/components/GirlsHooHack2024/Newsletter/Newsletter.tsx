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

    const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(emailInput && emailInput.current) {
            if(!(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(emailInput.current.value)) {
                alert('Not a valid email address');
                emailInput.current.value = "";
                return;
            }

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
        
            await graphQLClient.request(mutation, variables);
            alert(`You have signed up for the newsletter!`)
            emailInput.current.value = "";
        }
    };

  return (
    <Row className="bg-white justify-content-center py-5"id="Newsletter">
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
            <h2 className="text-orange hack" >{isMobile ? "SIGN UP FOR OUR NEWSLETTER" : "Sign Up for Our Newsletter"}</h2>
            <Row className={isMobile ? "" : "mt-4 mb-5"}>
                <Col md={10} xs={5} className={isMobile ? "my-3" : "mr-5"}>
                    <form className="mt-4 mb-4" onSubmit={signUp}>
                        <input type="text" ref={emailInput} placeholder="Enter email"></input>
                        {isMobile ?
                            <button type="submit" className="btn btn-primary mt-3">Sign up</button> :
                            <button type="submit" className="btn btn-primary ml-3">Sign up</button>
                        }
                    </form>
                </Col>
            </Row>
        </Col>
    </Row>
  );
}

export default Newsletter;