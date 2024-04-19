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
          <Nav className="ms-auto">
          <NavLink to="../" className="nav-link" activeClassName="active-link">Home</NavLink> 
          <NavLink to="../BuscadorAmigo" className="nav-link" activeClassName="active-link">Buscador Amigo</NavLink> 
          {/*<NavLink to="../IniciarSesion" className="nav-link" activeClassName="active-link">Iniciar Sesión</NavLink>*/} 
          <NavLink to="../PerfilCliente" className="nav-link" activeClassName="active-link">Mi Perfil</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;