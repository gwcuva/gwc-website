import React from 'react';
import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <nav className="bg-turq d-flex flex-row pt-3 pb-3 align-items-center justify-content-center">
            <Nav.Item>
                <Nav.Link href="#hackAbout" className="mono text-white mr-4"><b className="navItem">About</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#jumpstart" className="mono text-white mr-4"><b className="navItem">JumpStart</b></Nav.Link>
            </Nav.Item>
            {/*<Nav.Item>
                <Nav.Link href="#" className="mono text-white mr-4"><b className="navItem">Schedule</b></Nav.Link>
            </Nav.Item>*/}
            <Nav.Item>
                <Nav.Link href="#hackPrizes" className="mono text-white mr-4"><b className="navItem">Prizes</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#faq" className="mono text-white mr-4"><b className="navItem">FAQ</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#sponsors" className="mono text-white mr-4"><b className="navItem">Sponsors</b></Nav.Link>
            </Nav.Item>
        </nav>
    );
}

export default Navbar;
