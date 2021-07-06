import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


function myNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand to="/">Laurie Drew</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">GoogleBookSearch</Nav.Link>
      <Nav.Link as={Link} to="/Saved">Saved</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default myNav;