import React from "react";
//import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../Navbar/navbarlogo4.png';


function Navbars() {
  return (
    <Navbar  expand="lg" sticky="top" className="navigation">
      <Container fluid >
        <Navbar.Brand href="#home"><img src={logo} style={{ width: '100px' }} alt="SkillMatch logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={'home'} className="navText">Home</Nav.Link>
            <Nav.Link href={'JobSearch'} className="navText">Job Search</Nav.Link>
              <Nav.Link href={'Contact'} className="navText">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navbars; 
