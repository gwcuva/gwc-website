import { Row } from 'react-bootstrap';
import Discord from '../../../assets/images/discord-logo.svg';
import Instagram from '../../../assets/images/instagram-logo.svg';

interface Props {
  toggle? : () => void;
  circle? : boolean;
}

function NavContents(props: Props) {

  return (
    <div>
      <div className={`${!props.circle && "pr-4"} pt-5 pb-3`}>
        <Row className="pb-4">
          <div className={`${props.circle ? "d-flex justify-content-center" : "d-flex justify-content-end"} w-100`}>
            <a href='#stats' onClick={props.toggle} className="mono text-peacock interactive underline">the gap</a>
          </div>
        </Row>
        <Row className="pb-4">
          <div className={`${props.circle ? "d-flex justify-content-center" : "d-flex justify-content-end"} w-100`}>
            <a href='#about' onClick={props.toggle} className="mono text-peacock interactive underline">the mission</a>
          </div>
        </Row>
        <Row>
          <div className={`${props.circle ? "d-flex justify-content-center" : "d-flex justify-content-end"} w-100`}>
            <a href='#team' onClick={props.toggle} className="mono text-peacock interactive underline">the team</a>
          </div>
        </Row>
      </div>
      <Row className="mt-3">
        <div className={`${props.circle ? "d-flex justify-content-center" : "d-flex justify-content-end"} w-100 pr-3`}>
          <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
            <img src={Discord} width="28px" alt="Discord logo"/>
          </a>
          <a href="https://instagram.com/gwcuva" target="_blank" rel="noreferrer noopener" onClick={props.toggle} style={{ marginLeft: '16px' }}>
            <img src={Instagram} width="28px" alt="Instagram logo"/>
          </a>
        </div>
      </Row>
    </div>
  );
}

export default NavContents;
