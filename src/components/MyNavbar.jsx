import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function MyNavbar() {
  return (

    <Navbar bg="dark" expand="sm" data-bs-theme="dark" className="sticky-top">
    <Container>
    <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse>
    <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    
  )
}