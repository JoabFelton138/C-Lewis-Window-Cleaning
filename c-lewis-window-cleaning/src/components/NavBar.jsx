import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 5) {
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
                            <Nav.Link href="#">GET A QUOTE</Nav.Link>
                            <Nav.Link href="#">CONTACT</Nav.Link>
                            <NavDropdown title="SERVICES" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">WINDOW CLEANING</NavDropdown.Item>
                                <NavDropdown.Item href="#">GUTTER AND FASCIA CLEANING</NavDropdown.Item>
                                <NavDropdown.Item href="#">PRESSURE WASHING</NavDropdown.Item>
                                <NavDropdown.Item href="#">CONSERVATORY CLEANING</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">PORTFOLIO</Nav.Link>
                            <Nav.Link href="#">TESTIMONIALS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;