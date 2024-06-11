import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../style/header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
          </Nav>
         
          <Nav className="ml-auto">
            {/* <Nav.Link href="/login">Connexion</Nav.Link>
            <Nav.Link href="/register">S'inscrire</Nav.Link> */}
            <Form inline>
            <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
            {/* <Button variant="outline-light">Rechercher</Button> */}
          </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
