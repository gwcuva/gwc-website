import { request } from 'graphql-request';
import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Logo from '../../assets/images/peacock-logo.svg'
import Discord from '../../assets/images/discord-logo.svg';
import Instagram from '../../assets/images/instagram-logo.svg';

function Links() {
  const [links, setLinks] = useState([{'title': '', 'link': '', 'id': ''}]);
  
  useEffect(() => {
    const fetchLinks = async () => {
      const { links } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          {
            links {
              id
              title
              link
            }
          }
        `
      );
      setLinks(links);
    };

    fetchLinks();
  }, []);

  return (
    <Col className="bg-peach full-screen">
      <Row className="justify-content-center pt-5 pb-3"><img src={Logo} width="208px" height="82px" alt="Girls Who Code at the University of Virginia logo"/></Row>
      <Row className="justify-content-center my-2">
        <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noreferrer noopener">
          <img src={Discord} width="28px" alt="Discord logo"/>
        </a>
        <a href="https://instagram.com/gwcuva" target="_blank" rel="noreferrer noopener">
          <img src={Instagram} width="28px" alt="Instagram logo" className="ml-4"/>
        </a>
      </Row>
      <Col>
        {links.map((item) => 
          <Row className="mt-3 mx-2">
            <Button className="py-3 link-button" key={item.id} href={item.link} block>{item.title}</Button>
          </Row>)}
      </Col>
    </Col>
  );
}

export default Links;
