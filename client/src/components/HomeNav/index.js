import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function HomeNav(props) {
  return (
<>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">S&L Warehouse</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#units">Units & Pricing</Nav.Link>
      <Nav.Link href="#waitlist">Join the Waitlist</Nav.Link>
      <Nav.Link href="#faq">FAQ</Nav.Link>
      <Nav.Link href="#contact">Contact Us</Nav.Link>
      <Nav.Link href="#sign-in">Sign In</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  );
}

export default HomeNav;