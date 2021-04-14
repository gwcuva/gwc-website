import React from 'react';
import Contact from './Contact';
import Links from './Links';
import footerWaves from '../../../assets/images/footer-wave.svg';
import logo from '../../../assets/images/peacock-logo.svg';
import {isMobile} from 'react-device-detect';

// TODO: Add top graphic (should be same as header, but flipped)
// TODO: Add logo
// TODO: Add contact
// TODO: Add links (Brand Manual should redirect to Figma since we haven't coded it)
interface Props {
  id: string;
}


function Footer(props: Props) {
  return (
    <div id={props.id}>
      <img src={footerWaves} style={{ transform: 'rotate(180deg)', marginBottom:-1}}/>
      <div className="bg-orange d-flex flex-row" style={{paddingBottom: 50, paddingTop: 60}}>
        <div className="col-md-4 col-sm-3">
          <img src={logo} width="55%" style={{paddingLeft:"10%"}} alt="Girls Who Code at the University of Virginia logo"/>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-2 col-sm-10 text-white" style={{marginBottom:60}}>
              <Contact />
            </div>
            <div className="col-md-3 col-sm-4 text-white" style={{marginBottom:60}}>
              <Links />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
