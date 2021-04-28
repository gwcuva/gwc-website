import React, { useEffect, useState } from 'react';
import AboutList from './AboutList';
import { request } from 'graphql-request';
import { Col, Row } from 'react-bootstrap';

interface Props {
  id: string;
}

function About(props: Props) {

  const [aboutLists, setAboutLists] = useState([{'header': '', 'items': []}]);
  
  useEffect(() => {
    const fetchAboutLists = async () => {
      const { aboutLists } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          {
            aboutLists {
              header
              items
            }
          }
        `
      );
      setAboutLists(aboutLists);
    };

    fetchAboutLists();
  }, []);

  return (
    <Row id={props.id} className="my-5 d-flex justify-content-center">
      <Col lg={6} md={8} sm={10} xs={11}>
        <h2 className="text-peacock">Girls Who Code at the University of Virginia is an empowering and inclusive team of the next leaders in CS.</h2>
        <p className="text-peacock mb-5 mt-4">Together, we're breaking down barriers in the tech industry due to resource inequality, race, and gender biases. All skill levels welcome. Come for the coding, stay for the community!</p>

        <Row>
          {aboutLists.map((item, index) => 
            <AboutList header={item.header} items={item.items} />
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default About;
