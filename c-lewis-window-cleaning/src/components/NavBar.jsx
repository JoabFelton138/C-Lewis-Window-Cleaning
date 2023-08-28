import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 125) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <Navbar className={navbar ? 'navbar active' : 'navbar'} collapseOnSelect expand="lg" data-bs-theme="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="brand"
                            width="120px"
                            src={navbar ? 'blacklogo.png' : 'whitelogo.png'}
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle className="bg-light" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Contact</Nav.Link>
                            <NavDropdown title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">Window Cleaning</NavDropdown.Item>
                                <NavDropdown.Item href="#">Gutter and Fascia Cleaning</NavDropdown.Item>
                                <NavDropdown.Item href="#">Pressure Washing</NavDropdown.Item>
                                <NavDropdown.Item href="#">Conservatory Cleaning</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Portfolio</Nav.Link>
                            <Nav.Link href="#">Testimonials</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;