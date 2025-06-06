import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Collapse } from 'react-collapse';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import {Row, Col} from 'react-bootstrap';

interface Props {
  Question: string;
  Answer: string;
}

function FAQComponent(props: Props): JSX.Element {

  const [open, setOpen] = useState(false);

  return (
    <div className={isMobile ? "mt-2" : "mt-4"}>
      <Row>
        <Col md={11} xs={10}>
          {isMobile ? <h3 className="mono font-weight-bold hack">{props.Question}</h3> : <p className="mono font-weight-bold hack">{props.Question}</p>}
        </Col>
        <Col md={1} xs={2}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaMinus className="text-blue hoverColor"/> : <FaPlus className="text-blue hoverColor" />}
        </Col>
      </Row>
      <Collapse isOpened={open}>
        <p className="hack">{props.Answer}</p>
      </Collapse>
    </div>
  );
}

export default FAQComponent;