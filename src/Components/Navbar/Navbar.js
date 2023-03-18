import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Navbar/skillmatchNavbarLogo.jpg';

function Navbars() {
  return ( 
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home"><img src={logo} style={{ width: '100px' }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Job Search</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbars; 
