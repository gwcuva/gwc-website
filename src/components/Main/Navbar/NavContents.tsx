import { Row } from 'react-bootstrap';
import Discord from '../../../assets/images/discord-logo.svg';
import Instagram from '../../../assets/images/instagram-logo.svg';

interface Props {
  toggle? : () => void;
}

function NavContents(props: Props) {

  return (
    <div>
      <div className="pr-4 pt-5 pb-3">
        <Row className="justify-content-end pb-4">
          <a href='#stats' onClick={props.toggle} className="mono text-peacock interactive">the gap</a>
        </Row>
        <Row className="justify-content-end pb-4">
          <a href='#about' onClick={props.toggle} className="mono text-peacock interactive">the mission</a>
        </Row>
        <Row className="justify-content-end">
          <a href='#team' onClick={props.toggle} className="mono text-peacock interactive">the team</a>
        </Row>
      </div>
      <Row className="justify-content-end pr-3 mt-3">
        <a href="https://discord.gg/D8knkzNM8E" target="_blank" rel="noreferrer" onClick={props.toggle}>
          <img src={Discord} width="28px" alt="Discord logo"/>
        </a>
        <a href="https://instagram.com/gwcuva" target="_blank" rel="noreferrer" onClick={props.toggle}>
          <img src={Instagram} width="28px" alt="Instagram logo" className="ml-4"/>
        </a>
      </Row>
    </div>
  );
}

export default NavContents;
