import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Link to="/" className="navbar-brand"><img src="../../img/chaskancha.png" className="header--logo"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/about" className="nav-link">About Chaskancha</Link>
            <Link to="/mission" className="nav-link">Mission Statement</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/our-founder" className="nav-link">Our Founder</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
  )
}
