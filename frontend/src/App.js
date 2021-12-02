import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">SG</Link>
          </Navbar.Brand>
          <Nav className="d-flex justify-content-around ms-auto">
            <Link className="p-2" to="/about">
              About
            </Link>
            <Link className="p-2" to="/blog">
              Blog
            </Link>
            <Link className="p-2" to="/projects">
              Projects
            </Link>
            <Link className="p-2" to="/contact">
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
