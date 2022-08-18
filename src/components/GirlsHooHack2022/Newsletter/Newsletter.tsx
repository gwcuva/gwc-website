import React, { useEffect, useState, useRef} from 'react';
import { Col, Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
// import { request } from 'graphql-request';
// import { Collapse } from 'react-collapse';

import { useForm } from "react-hook-form";


function Newsletter(id: any) {

  const [email, setEmail] = useState("");

  const { handleSubmit, ...methods } = useForm();

  const onSubmit = async (values: any) => {
    const response = await fetch("./submit", {
      method: "POST",
      body: JSON.stringify({ id, ...values }),
    });
    alert(`You have signed up for the newsletter!`)
  };


  return (
    <form
      onSubmit = {handleSubmit(onSubmit)}
    >
      <Row className="bg-hack-grey justify-content-center py-5"id="Newsletter">
        <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
          <h2 className="text-orange hack" >Newsletter</h2>
          <Row className={isMobile ? "" : "mt-4 mb-5"}>
            <Col md={10} xs={5} className={isMobile ? "my-3" : "mr-5"}>
            <label>
              <h3 className="mono text-peach mt-4 mb-4">Enter your email:
              </h3>
            </label >
              <input className="ml-5"
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
              />
            <button className="submit-button ml-5" type="submit" >
              Submit
            </button>
            </Col>
            </Row>
          </Col>
      </Row>
    </form>
  )
}

export default Newsletter

// const [email, setEmail] = useState("");

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     console.log(email)
//     alert(`You have signed up for the newsletter!`)
//   }


//   return (
//     <form
//       onSubmit = {handleSubmit}
//     >
//       <Row className="bg-hack-grey justify-content-center py-5"id="Newsletter">
//         <Col sm={10} xs={11} className={isMobile ? "my-3" : "my-5 py-5"}>
//           <h2 className="text-orange hack" >Newsletter</h2>
//           <Row className={isMobile ? "" : "mt-4 mb-5"}>
//             <Col md={10} xs={5} className={isMobile ? "my-3" : "mr-5"}>
//             <label>
//               <h3 className="mono text-peach mt-4 mb-4">Enter your email:
//               </h3>
//             </label >
//               <input className="ml-5"
//               type="email" 
//               onChange={(e) => setEmail(e.target.value)}
//               />
//             <button className="submit-button ml-5" type="submit" >
//               Submit
//             </button>
//             </Col>
//             </Row>
//           </Col>
//       </Row>
//     </form>
//   )