import React from 'react'
import { HashLink } from  'react-router-hash-link'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
          <Container>
              <NavLink to="/"><img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="" /></NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="navlinks justify-content-end">
                      <HashLink to="/#latest">Latest Builds</HashLink>
                      <HashLink to="/#process">Process</HashLink>
                      <HashLink to="/#service">Services</HashLink>
                      <HashLink to="/#contact">Contact Us</HashLink>
                      <NavLink to="/Projects">Projects</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar >
    </div>
  )
}

export default NavBar
