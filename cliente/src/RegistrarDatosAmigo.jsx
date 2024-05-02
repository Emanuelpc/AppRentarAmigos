import React, { useState, useEffect } from "react";
import { Button, FormCheck, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from "axios";
import Navbar from "./Componentes/Navbar";
import './RegistrarDatosAmigo.css';

function RegistrarDatosAmigo() {
  const [camposCompletos, setCamposCompletos] = useState(false);
  const [camposIncompletos, setCamposIncompletos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [CorreoElectronico, setCorreoElectronico] = useState("");
  const [CorreoValido, setCorreoValido] = useState(true); // Estado para almacenar si el correo es válido
  const [Password, setPassword] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [Genero, setGenero] = useState("Masculino");
  const [precioshora, setPreciosHora] = useState([]);
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

  const getPreciosHora = () => {
    Axios.get("http://localhost:3001/precioshora").then((response) => {
      setPreciosHora(response.data);
    });
  };

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

  useEffect(() => {
    getPreciosHora();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  // Función para verificar si el correo es válido
  const verificarCorreo = (correo) => {
    const correoEspecial = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setCorreoValido(correoEspecial.test(correo));
  };

  return (
    <div>
      <Navbar />
      <form className="form-register">
        <h1>Registrar Amigo Rentable</h1>
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
        />
        <br />

        <input
          className={`controls ${camposIncompletos.includes('correo') ? 'campos-incompletos' : ''}`}
          type="email"
          name="correo"
          id="correo"
          onChange={(event) => {
            setCorreoElectronico(event.target.value);
            verificarCorreo(event.target.value); // Verificar el correo mientras se escribe
          }}
          placeholder={`Ingrese su Correo ${showPlaceholderAsterisk ? "*" : ""}`}
          required
          maxLength={45}
        />
        {!CorreoValido && <p style={{ color: '#112A4A' }}>Por favor, ingrese un correo electrónico válido.</p>}
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
              className={`gender-radio ${camposIncompletos.includes('Hombre') ? 'campos-incompletos' : ''}`}
              type="radio" name="Genero" id="Hombre" label="Masculino" value="Hombre" onChange={handleChange} required
            />
            <FormCheck
              className={`gender-radio ${camposIncompletos.includes('Mujer') ? 'campos-incompletos' : ''}`}
              type="radio" name="Genero" id="Mujer" label="Femenino" value="Mujer" onChange={handleChange}
            />
            <FormCheck
              className={`gender-radio ${camposIncompletos.includes('Otro') ? 'campos-incompletos' : ''}`}
              type="radio" name="Genero" id="Otro" label="Otro" value="Otro" onChange={handleChange}
            />
          </div>
        </div>
        <br />

        <h3>Elige cuánto te gustaría obtener por hora</h3>
        <select
          className={`controls ${camposIncompletos.includes('tarifa') ? 'campos-incompletos' : ''}`}
          name="tarifa"
          id="tarifa"
          onChange={(event) => setSeleccionPrecio(event.target.value)}
        >
          <option value="">Selecciona una tarifa</option>
          {precioshora.map((precio, index) => (
            <option key={index} value={precio.idPreciosPorHora}>
              {`Quiero ganar ${precio.Precio_Hora} Bs por hora`}
            </option>
          ))}
        </select>

        <Link to="/BuscadorAmigo">
          <Button variant="danger" className="ml-2 custom-cancel-button" size="lg" color="#112A4A" >Cancelar</Button>
        </Link>
        <Link
          to={camposCompletos ? "/RegistrarInteresesAmigo" : ""}
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
          onClick={() => {
            if (!camposCompletos) {
              verificarCamposCompletos();
            }
          }}
        >
          <Button variant="primary" className="custom-next-button" size="lg">Siguiente</Button>
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

export default RegistrarDatosAmigo;
