import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
function BasicNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container >
        <Navbar.Brand href="#home" className="brand-text">Amigo Rentable</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
<<<<<<< HEAD
          <Nav className="ms-auto">
          <NavLink to="../" className="nav-link" activeClassName="active-link">Home</NavLink> 
          <NavLink to="../BuscadorAmigo" className="nav-link" activeClassName="active-link">Buscador Amigo</NavLink> 
          {/*<NavLink to="../IniciarSesion" className="nav-link" activeClassName="active-link">Iniciar Sesión</NavLink>*/} 
          <NavLink to="../RegistrarDatosAmigo" className="nav-link" activeClassName="active-link">Registrarse</NavLink>
=======
          <form className='d-flex'>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link> 
            <Nav.Link href="#link" className="nav-link">IniciarSesion</Nav.Link> 
            <NavDropdown title="Registro" id="basic-nav-dropdown" className="nav-dropdown"> 
              <NavDropdown.Item href="#action/3.1" className="dropdown-item">Registro Cliente</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.2" className="dropdown-item">Registro Amigo</NavDropdown.Item> 
            </NavDropdown>
>>>>>>> 37d8c983e0256824a93c65f23dff192a19bef379
          </Nav>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
