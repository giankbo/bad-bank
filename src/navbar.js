import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">BadBank</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
                <Nav.Link href='#/login/'>Login</Nav.Link>
                <Nav.Link href='#/deposit/'>Deposit</Nav.Link>
                <Nav.Link href='#/withdraw/'>Withdraw</Nav.Link>
                <Nav.Link href='#/alldata/'>AllData</Nav.Link>          
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}