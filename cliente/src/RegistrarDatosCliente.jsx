import React, { useState } from "react";
import { Button, FormCheck, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import './RegistrarDatosCliente.css';

function RegistrarDatosCliente() {
  const [camposCompletos, setCamposCompletos] = useState(false);
  const [camposIncompletos, setCamposIncompletos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [CorreoElectronico, setCorreoElectronico] = useState("");
  const [Password, setPassword] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [Genero, setGenero] = useState("");
  const [seleccionPrecio, setSeleccionPrecio] = useState("");
  const [showPlaceholderAsterisk, setShowPlaceholderAsterisk] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    body: "",
    actionButtonText: "",
    actionButtonClickHandler: () => {},
  });

  const handleShowModal = (title, body, actionButtonText, actionButtonClickHandler) => {
    setModalContent({
      title: title,
      body: body,
      actionButtonText: actionButtonText,
      actionButtonClickHandler: actionButtonClickHandler,
    });
    setShowModal(true);
  };

  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);

  const handleChange = (e) => {
    setGenero(e.target.value);
  }

  const verificarCamposCompletos = () => {
    if (Nombre && Apellido && CorreoElectronico && Password && fechaNacimiento && Genero && seleccionPrecio) {
      setCamposCompletos(true);
    } else {
      setCamposCompletos(false);
    }

    const camposIncompletos = [];
    if (!Nombre) camposIncompletos.push("nombres");
    if (!Apellido) camposIncompletos.push("apellidos");
    if (!CorreoElectronico) camposIncompletos.push("correo");
    if (!Password) camposIncompletos.push("password");
    if (!fechaNacimiento) camposIncompletos.push("date");
    if (!Genero) camposIncompletos.push("genero");
    if (!seleccionPrecio) camposIncompletos.push("tarifa");

    setCamposIncompletos(camposIncompletos);
    setBotonDeshabilitado(camposIncompletos.length > 0);

    if (camposIncompletos.length > 0) {
      handleShowModal("Datos personales incompletos", "Por favor, llene los campos marcados en rojo.", "Cerrar", handleCloseModal);
      setShowPlaceholderAsterisk(true);
      return;
    }

    const caracteresEspeciales = /[^A-Za-z\s]/;
    if (caracteresEspeciales.test(Nombre)) {
      handleShowModal("Error", "El nombre solo puede contener letras y espacios.", "Cerrar", handleCloseModal);
      return;
    }

    if (caracteresEspeciales.test(Apellido)) {
      handleShowModal("Error", "El apellido solo puede contener letras y espacios.", "Cerrar", handleCloseModal);
      return;
    }
    if (Nombre.length < 3) {
      handleShowModal("Error", "El nombre debe tener al menos 3 caracteres.", "Cerrar", handleCloseModal);
      return;
    }
    if (Apellido.length < 3) {
      handleShowModal("Error", "El apellido debe tener al menos 3 caracteres.", "Cerrar", handleCloseModal);
      return;
    }

    if (Password.length < 8) {
      handleShowModal("Error", "La contraseña debe tener al menos 8 caracteres.", "Cerrar", handleCloseModal);
      return;
    }

    const correoEspecial = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoEspecial.test(CorreoElectronico)) {
      handleShowModal("Error", "Por favor, ingresa un correo electrónico válido.", "Cerrar", handleCloseModal);
      return;
    }
  };
  


  const handleCloseModal = () => {
    setShowModal(false);
  }



  return (
    <div>
      <Navbar />
      <form className="form-register">
        <h1>Registrar Cliente</h1>
        <h3 style={{ textAlign: 'left' }}>Registrar Datos Personales</h3>

        <input
          className={`controls ${camposIncompletos.includes('nombres') ? 'campos-incompletos' : ''}`}
          type="text"
          name="nombres"
          id="nombres"
          onChange={(event) => setNombre(event.target.value)}
          placeholder={`Ingrese su Nombre ${showPlaceholderAsterisk ? "*" : ""}`}
          required
          maxLength={24}
          minLength={3}
        />
        <br />

        <input
          className={`controls ${camposIncompletos.includes('apellidos') ? 'campos-incompletos' : ''}`}
          type="text"
          name="apellidos"
          id="apellidos"
          onChange={(event) => setApellido(event.target.value)}
          placeholder={`Ingrese su Apellido ${showPlaceholderAsterisk ? "*" : ""}`}
          required
          maxLength={24}
          minLength={3}
        />
        <br />

        <input
          className={`controls ${camposIncompletos.includes('correo') ? 'campos-incompletos' : ''}`}
          type="email"
          name="correo"
          id="correo"
          onChange={(event) => setCorreoElectronico(event.target.value)}
          placeholder={`Ingrese su Correo ${showPlaceholderAsterisk ? "*" : ""}`}
          required
          maxLength={50}
        />
        <br />

        <input
          className={`controls ${camposIncompletos.includes('password') ? 'campos-incompletos' : ''}`}
          type="password"
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder={`Ingrese su Contraseña ${showPlaceholderAsterisk ? "*" : ""}`}
          required
          maxLength={20}
        />
        <br />

        <input
          className={`controls ${camposIncompletos.includes('date') ? 'campos-incompletos' : ''}`}
          type="date"
          name="date"
          id="date"
          onChange={(event) => {
            const selectedDate = new Date(event.target.value);
            const maxDate = new Date('2006-12-31');
            if (selectedDate > maxDate) {
              event.target.value = '2006-12-31';
              handleShowModal("Error", "La Aplicacion solo Acepta Personas Mayores 18", "Cerrar", handleCloseModal);
              setfechaNacimiento('2006-12-31');
            } else {
              setfechaNacimiento(event.target.value);
            }
          }}
          placeholder={`Ingrese su Fecha de Nacimiento ${showPlaceholderAsterisk ? "*" : ""}`}
          required
          max="2006-01-01"
        />
        <br />

        <div className="RadioButtons" style={{ textAlign: 'left' }}>
          <h2>Género</h2>
          <div className="d-flex">
            <FormCheck
              className={`gender-radio ${camposIncompletos.includes('genero') ? 'campos-incompletos' : ''}`}
              type="radio" name="Genero" id="Hombre" label="Masculino" value="Hombre" onChange={handleChange} required
            />
            <FormCheck
              className={`gender-radio ${camposIncompletos.includes('genero') ? 'campos-incompletos' : ''}`}
              type="radio" name="Genero" id="Mujer" label="Femenino" value="Mujer" onChange={handleChange}
            />
            <FormCheck
              className={`gender-radio ${camposIncompletos.includes('genero') ? 'campos-incompletos' : ''}`}
              type="radio" name="Genero" id="Otro" label="Otro" value="Otro" onChange={handleChange}
            />
          </div>
        </div>
        <br />

        <h3 style={{ textAlign: 'left' }}>Registrar Descripcion Personal</h3>
        <textarea
              className={`controls ${camposIncompletos.includes('tarifa') ? 'campos-incompletos' : ''}`}
              name="password"
              id="password"
              onChange={(event) => setSeleccionPrecio(event.target.value)}
              required
              maxLength={200}
              rows={5} 
              cols={50}
        />
        <br />

        <Link to="/">
          <Button variant="danger" className="ml-2 custom-cancel-button" size="lg">Cancelar</Button>
        </Link>

        <Link
          to={camposCompletos ? "/RegistrarFotosCliente" : ""}
          state={{
            data: {
              Nombre,
              Apellido,
              CorreoElectronico,
              Password,
              fechaNacimiento,
              Genero,
              seleccionPrecio
            }
          }}
          onClick={(e) => {
            e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            verificarCamposCompletos();
          }}
        >
          <Button variant="primary" className="custom-next-button" size="lg" disabled={botonDeshabilitado}>Siguiente</Button>
        </Link>

      </form>

        {/* Modal para mostrar cuando los campos no estén completos */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            {modalContent.actionButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegistrarDatosCliente;