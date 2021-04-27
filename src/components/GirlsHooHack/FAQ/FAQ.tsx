import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import FAQComponent from './FAQComponent';
import { memoryUsage } from 'node:process';

function FAQ() {

  const [faq, setFaq] = useState<any[]>([]);

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

  console.log(faq[0]);

  return (
    <div>
      <Col md={7} className="ml-5">
        <h2 className="text-orange font-weight-bold">FAQ</h2>
        {faq.map(mem => <FAQComponent question={mem.question} answer={mem.answer}></FAQComponent>)}
      </Col>
    </div>
  );
}

export default FAQ;
