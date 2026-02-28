import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <Navbar expand="lg" style={{ background: "#2d9d9d"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-calculator-fill text-warning me-2">
          </i>
          <span className='fw-bold text-white'>CalcuRuben
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">{props.textos.inicio}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{props.textos.contacto}</Nav.Link>
            <Nav.Link as={Link} to="/favoritos">{props.textos.favoritos}</Nav.Link>
            <Nav.Link as={Link} to="/historial">Historial</Nav.Link>

            <NavDropdown title={props.textos.indicador_idioma} id="nav-dropdown">
              <NavDropdown.Item onClick={() => props.setIdioma('es')}>
                <img src='imagenes_banderas/imagen_idioma_español.png' style={{height:"20px",width:"20px"}}></img>
                ES
                </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setIdioma('en')}>
                <img src='imagenes_banderas/imagen_idioma_ingles.jpg' style={{height:"20px",width:"20px"}}></img>
                EN
                </NavDropdown.Item>
            </NavDropdown>

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
