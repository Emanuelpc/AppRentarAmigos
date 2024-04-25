import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
function BasicNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-text">Amigo Rentable</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
          <NavLink to="../" className="nav-link" activeClassName="active-link">Home</NavLink> 
          <NavLink to="../BuscadorAmigo" className="nav-link" activeClassName="active-link">Buscador Amigo</NavLink> 
          <NavDropdown title="Registro" id="basic-nav-dropdown" className="nav-dropdown" >
              <NavLink to="../RegistrarDatosAmigo" className="nav-link" activeClassName="active-link">Registrarse Amigo</NavLink>
              <NavLink to="../RegistrarDatosCliente" className="nav-link" activeClassName="active-link">Registrarse Cliente</NavLink>
          </NavDropdown>
          <NavLink to="../IniciarSesion" className="nav-link" activeClassName="active-link">Iniciar Sesión</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
