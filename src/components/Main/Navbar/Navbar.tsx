import Logo from '../../../assets/images/peacock-logo.svg'

function Navbar() {
  return (
    <nav className="bg-orange d-flex flex-row pr-2 pt-3 pb-3 pl-3 justify-content-between align-items-center">
      <img src={Logo} width="208px" height="82px" alt="Girls Who Code at the University of Virginia logo"/>
      <div className="d-flex flex-row pr-5 pt-3 pb-3 pl-3 justify-content-between align-items-center">
        <a href="/careerfair" target="_blank" rel="noreferrer noopener" className="mono text-white interactive pr-5 pr-2 underline" style={{ paddingRight: '50px', display: 'inline-block' }}>Girls Who Code Career Fair</a>
        <a href="/hack" target="_blank" rel="noreferrer noopener" className="mono text-white interactive pr-5 pr-2 underline" style={{ paddingRight: '50px', display: 'inline-block' }}>Girls Hoo Hack</a>
      </div>
    </nav>
  );
}

export default Navbar;
