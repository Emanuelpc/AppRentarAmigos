import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useUser } from '../UserContext';
import { FaUser } from 'react-icons/fa';
import './Navbar.css';
function BasicNavbar() {
  const { user } = useUser();
  //console.log(user);
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-text">Amigo Rentable</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {user ? (
          <Nav className="ms-auto">
          <NavLink to="../BuscadorAmigo" className="nav-link" activeClassName="active-link">Buscador Amigo</NavLink> 
          <NavLink to="../SolicitudesaAmigos" className="nav-link" activeClassName="active-link">Solicitudes a Amigos</NavLink> 
          <NavLink to="../CitasAmigos" className="nav-link" activeClassName="active-link">Agendas de Citas Amigos</NavLink> 
          <NavLink to="../PerfilCliente" className="nav-link" activeClassName="active-link">
                <div className="d-flex align-items-center">
                  <FaUser className="me-2" /> Mi perfil {user.nombreCliente} {user.apellidoCliente}
                </div>
          </NavLink>
          </Nav>
        ):(
          <Nav className="ms-auto">
          <NavLink to="../" className="nav-link" activeClassName="active-link">Home</NavLink> 
          <NavLink to="../BuscadorAmigo" className="nav-link" activeClassName="active-link">Buscador Amigo</NavLink> 
          <NavDropdown title="Registro" id="basic-nav-dropdown" className="nav-dropdown">
              <NavLink to="../RegistrarDatosAmigo" className="nav-link" activeClassName="active-link">Registrarse Amigo</NavLink>
              <NavLink to="../RegistrarDatosCliente" className="nav-link" activeClassName="active-link">Registrarse Cliente</NavLink>
          </NavDropdown>
          <NavLink to="../Login" className="nav-link" activeClassName="active-link">Iniciar Sesion</NavLink> 
          </Nav>
        )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
