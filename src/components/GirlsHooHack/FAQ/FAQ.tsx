import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import FAQComponent from './FAQComponent';
/*
import { memoryUsage } from 'node:process';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import {Collapse } from 'react-collapse';
*/

function FAQ() {

  const [faq, setFaq] = useState([{'question': '', 'answer': ''}]);

  useEffect(() => {
    const fetchFaq = async () => {
      const { hackathonFaqs } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            hackathonFaqs {
              question
              answer
            }
          }
        `
      );
      setFaq(hackathonFaqs);
    };

    fetchFaq();
  }, []);

  return (
    <div>
      <Row className={"justify-content-center bg-hack-grey py-5"}>
        <Col md={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
          <h2 className="text-orange hack">FAQ</h2>
          <Row>
            <Col md={8} xs={24}>
              {faq.map((mem, index) => <FAQComponent key={index} Question={mem.question} Answer={mem.answer}></FAQComponent>)}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FAQ;