import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router";
import About from './About';
import Sign from './Sign';
import ContactUs from './ContactUs';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
export const Navbars = () => {
  return (
<div>
<Navbar collapseOnSelect expand="lg"  style = {{'background-color':'#76f576'}}>
    <Container>
    <Navbar.Brand href="/">
            <Image src="./images/logo.jpg" width="30" height="30" className="d-inline-block align-top" alt="Who's Nest?" />{' '}
            Who's Nest?
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className = "ms-auto"> 
          <Nav.Link href="#ContactUs">Birds</Nav.Link>
          <Nav.Link href="About">Know yout Birdie!</Nav.Link>
          <Nav.Link href="About">About Us</Nav.Link>
          <Nav.Link href="Sign">Sign in</Nav.Link>
          <Nav.Link href="ContactUs">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      </div>
  );

}