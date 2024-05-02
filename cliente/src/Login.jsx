import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import Navbar from "./Componentes/Navbar";
import './Login.css';
import { Button } from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';
import Axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importa los iconos de ojo
import { useUser } from './UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Nuevo estado para manejar la visibilidad de la contraseña
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    try {
      const response = await Axios.get("http://localhost:3001/Cliente", {
        params: {
          correoCliente: email,
          contraCliente: password
        }
      });
      
      const clienteData = response.data[0]; // Suponiendo que la respuesta es un array con un solo elemento

      if (clienteData) {
        // Redirige al usuario a la página "PerfilCliente" si las credenciales son correctas
        console.log(clienteData);
        updateUser(clienteData);
        //window.location.href = `/PerfilCliente?data=${clienteData.idCliente}`;
        navigate(`/PerfilCliente`);
        console.log('Inicio de sesión exitoso');
      } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        setError('Correo electrónico o contraseña incorrectos');
      }
    } catch (error) {
      // Muestra un mensaje de error si hubo un problema con la solicitud
      setError('Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.');
      console.error('Error al iniciar sesión:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Navbar />
      <div>
        <form className="form-login" onSubmit={handleLogin}>
          <h1 className="text-center mb-4">Inicio de Sesión</h1>
          <MDBContainer className="my-5 gradient-form">
            <MDBRow>
              <MDBCol col='6' className="mb-5 d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center">
                  <div className="text-center mb-4">
                    <img
                      src="https://e7.pngegg.com/pngimages/713/762/png-clipart-computer-icons-button-login-image-file-formats-logo.png"
                      style={{ width: '185px' }}
                      alt="logo"
                    />
                  </div>
                  <h4 className="text-center mb-4">Inicia Sesión con tu cuenta</h4>
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Correo Electrónico'
                    id='form1'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="password-input-wrapper mb-4">
                    <MDBInput
                      wrapperClass='mb-0'
                      label='Contraseña'
                      id='form2'
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="password-toggle" onClick={togglePasswordVisibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  {error && <p className="text-danger">{error}</p>}
                  <div className="text-center mb-4">
                    <Button type="submit" className="w-100 gradient-custom-2">Iniciar Sesión</Button>
                  </div>
                  <br />
                  <div className="text-center">
                    <p className="mb-0">¿Quieres registrarte?
                      <Link to="/RegistrarDatosAmigo">
                        <Button variant="primary" className="ml-2" size="sm">Registrarse</Button>
                      </Link>
                    </p>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </div>
    </div>
  );
}

export default Login;
