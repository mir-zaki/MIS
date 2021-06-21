import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Nav, Container } from "react-bootstrap";


const Header = () => {
    return (
        
        <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand href="/">Mir Hardware</Navbar.Brand>
          </LinkContainer>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <LinkContainer to='/Cart'>
      <Nav.Link >
        <i class="fas fa-cart-plus"></i> Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/Login'>
      <Nav.Link >
        <i className='fas fa-user'></i> Sign In</Nav.Link>
        </LinkContainer>
    </Nav>
    
    
  </Navbar.Collapse>
        </Container>
</Navbar>
    </header>
        

    )
}

export default Header;
