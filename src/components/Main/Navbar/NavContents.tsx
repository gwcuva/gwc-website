import { Row } from 'react-bootstrap';
import Discord from '../../../assets/images/discord-logo.svg';
import Instagram from '../../../assets/images/instagram-logo.svg';
import Discord_Blue from '../../../assets/images/discord-icon-blue.svg';
import Instagram_Blue from '../../../assets/images/instagram-icon-blue.svg';

interface Props {
  toggle? : () => void;
  circle? : boolean;
}

function NavContents(props: Props) {

  return (
    <div>
      <div className={`${!props.circle && "pr-4"} pt-5 pb-3`}>
        <Row className={`${props.circle ? "justify-content-center" : "justify-content-end"} pb-4`}>
          <a href='#stats' onClick={props.toggle} className="mono text-peacock interactive">the gap</a>
        </Row>
        <Row className={`${props.circle ? "justify-content-center" : "justify-content-end"} pb-4`}>
          <a href='#about' onClick={props.toggle} className="mono text-peacock interactive">the mission</a>
        </Row>
        <Row className={`${props.circle ? "justify-content-center" : "justify-content-end"}`}>
          <a href='#team' onClick={props.toggle} className="mono text-peacock interactive">the team</a>
        </Row>
      </div>
      <Row className={`${props.circle ? "justify-content-center" : "justify-content-end pr-3"} mt-3`}>
        <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
          <img src={Discord} width="28px" alt="Discord logo"
          onMouseOver={e => (e.currentTarget.src = Discord_Blue)}
          onMouseOut={e => (e.currentTarget.src = Discord)}
          />
        </a>
        <a href="https://instagram.com/gwcuva" target="_blank" rel="noreferrer noopener" onClick={props.toggle}>
          <img src={Instagram} width="28px" alt="Instagram logo" className="ml-4"
          onMouseOver={e => (e.currentTarget.src = Instagram_Blue)}
          onMouseOut={e => (e.currentTarget.src = Instagram)}
          />
        </a>
      </Row>
    </div>
  );
}

export default NavContents;
