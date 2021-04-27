import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

function FAQ() {

  const [faq, setFaq] = useState<any[]>([]);

  useEffect(() => {
    const fetchFaq = async () => {
      const { questionAnswers } = await request(
        process.env.REACT_APP_GRAPHCMS_URL ? process.env.REACT_APP_GRAPHCMS_URL : "",
        `
          { 
            questionAnswers {
              question
              answer
            }
          }
        `
      );
      setFaq(questionAnswers);
    };

    fetchFaq();
  }, []);

  return (
    <p>FAQ</p>
  );
}

export default FAQ;
