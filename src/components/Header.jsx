import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className='caja_completa' expand="lg" style={{ background: "#2d9d9d"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-calculator-fill text-warning me-2">
             CalcuRuben - Tu calculadora de confianza
          </i>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>

            <Button 
              as={Link} 
              to="/login"
              variant="warning"
              className="ms-2"
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;