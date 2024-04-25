import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import Navbar from "./Componentes/Navbar";
import './Login.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    // Verifica las credenciales
    if (email === 'AdministradorCliente@gmail.com' && password === 'cliente') {
      // Redirige al usuario a la página "VerClientes" si las credenciales son correctas
      window.location.href = "/VerClientes";
      console.log('Inicio de sesión exitoso');
    } else {
      // Muestra un mensaje de error si las credenciales son incorrectas
      setError('Correo electrónico o contraseña incorrectos');
    }
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
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Contraseña'
                    id='form2'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-danger">{error}</p>}
                  <div className="text-center mb-4">
                    <MDBBtn type="submit" className="w-100 gradient-custom-2">Iniciar Sesión</MDBBtn>
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
