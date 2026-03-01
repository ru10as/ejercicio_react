import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header(props) {
  
  let estilo_ES = {};
  let estilo_EN = {};

  if (props.idioma === 'es'){
    estilo_ES = {background:"#9c9696ff"};
    estilo_EN = {background:"transparent"};
  }
  else if(props.idioma === 'en'){
    estilo_ES = {background:"transparent"};
    estilo_EN = {background:"#9c9696ff"};
  }
  
  
  return (

    <Navbar expand="lg" style={{ background: "#2d9d9d"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <i className="bi bi-calculator-fill text-warning me-2"></i>
          <span className='fw-bold text-white'>CalcuRuben</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">{props.textos.header.inicio}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{props.textos.header.contacto}</Nav.Link>
            <Nav.Link as={Link} to="/historial">{props.textos.header.historial}</Nav.Link>

            <NavDropdown title={props.textos.header.indicador_idioma} id="nav-dropdown">
              <NavDropdown.Item onClick={() => props.setIdioma('es')} style={estilo_ES}>
                <img src='imagenes_banderas/imagen_idioma_español.png' style={{height:"20px",width:"20px"}}></img>
                ES
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setIdioma('en')} style={estilo_EN}>
                <img src='imagenes_banderas/imagen_idioma_ingles.jpg' style={{height:"20px",width:"20px"}}></img>
                EN
              </NavDropdown.Item>
            </NavDropdown>

            <Button as={Link} to="/login" variant="warning" className="ms-2">
              Login
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
