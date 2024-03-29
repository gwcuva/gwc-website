import {Row} from 'react-bootstrap'
import Logo from '../../../assets/images/peacock-logo.svg'

function Navbar() {
  return (
    <nav className="bg-orange d-flex flex-row pr-2 pt-3 pb-3 pl-3 justify-content-between align-items-center">
      <img src={Logo} width="208px" height="82px" alt="Girls Who Code at the University of Virginia logo"/>
      <Row>
      <a href="/careerfair" target="_blank" rel="noreferrer noopener" className="mono text-white interactive pr-5 pr-2">Girls Who Code Career Fair</a>
      <a href="/hack" target="_blank" rel="noreferrer noopener" className="mono text-white interactive pr-5 pr-2">Girls Hoo Hack</a>
      </Row>
  </nav>
  );
}

export default Navbar;
