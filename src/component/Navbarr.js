import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <div>
       <Navbar className='p-3' bg="black" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">Home</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr
