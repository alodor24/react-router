import React from 'react'
import { 
    Navbar, 
    Container, 
    Nav
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

const NavbarFixed = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>React Router</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarFixed