import React from 'react';
import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <nav className="bg-turq d-flex flex-row pt-3 pb-3 align-items-center justify-content-center">
            <Nav.Item>
                <Nav.Link href="#" className="mono text-blue"><b>About</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="mono text-white"><b>JumpStart</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="mono text-white"><b>Schedule</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="mono text-white"><b>Prizes</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="mono text-white"><b>FAQ</b></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#" className="mono text-white"><b>Sponsors</b></Nav.Link>
            </Nav.Item>
        </nav>
    );
}

export default Navbar;
