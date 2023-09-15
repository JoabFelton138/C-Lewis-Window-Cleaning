import React, { useState } from 'react';

import {Link} from 'react-router-dom';

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
            <Navbar className={navbar 
                                ? 'navbar active' 
                                : 'navbar'} 
                    collapseOnSelect expand="lg" 
                    data-bs-theme="light" 
                    fixed="top"
                    style={{marginLeft: '3.5vw', 
                    marginRight: '3.5vw',
                    marginTop: '1vw',
                    marginBottom: '0.5vw'}}>
                <Container>

                    <Navbar.Brand 
                        as={Link} 
                        to="/">
                        <img
                            alt="brand"
                            width="120px"
                            src={navbar ? 'blacklogo.png' : 'whitelogo.png'}
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    
                    <Navbar.Toggle 
                        className="bg-light" 
                        aria-controls="responsive-navbar-nav" 
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link 
                                as={Link} 
                                to="#">
                                    GET A QUOTE
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="">
                                    CONTACT
                            </Nav.Link>

                            <NavDropdown title="SERVICES" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="">WINDOW CLEANING</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="">GUTTER AND FASCIA CLEANING</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="">PRESSURE WASHING</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="">CONSERVATORY CLEANING</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link 
                                as={Link} 
                                to="/portfolio">
                                    PORTFOLIO
                            </Nav.Link>
                            <Nav.Link
                                as={Link} 
                                to="/testimonials">
                                    TESTIMONIALS
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;