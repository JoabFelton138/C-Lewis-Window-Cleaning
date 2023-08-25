import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MobileNav = () => {

    return (
        <>
            <Navbar className={'navbar active'} collapseOnSelect expand="lg" data-bs-theme="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt="brand"
                            width="120px"
                            src={'blacklogo.png'}
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle className="bg-light" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="eggs" href="#">Contact</Nav.Link>
                            <NavDropdown title="Services" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">Window Cleaning</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Gutter and Fascia Cleaning</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Pressure Washing and Conservatory Cleaning</NavDropdown.Item>
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

export default MobileNav;