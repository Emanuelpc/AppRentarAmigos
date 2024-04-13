import { useState, useEffect } from "react";
import Navbar from "./Componentes/Navbar";
import {Button,FormCheck,Modal} from 'react-bootstrap';
import './RegistrarDatosAmigo.css';
import Axios from "axios";
import {  Link } from 'react-router-dom';

function RegistrarDatosAmigo() {
  

  const [camposCompletos, setCamposCompletos] = useState(false);
  const [camposIncompletos, setCamposIncompletos] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const[Nombre,setNombre] = useState("");
  const[Apellido,setApellido] = useState("");
  const[CorreoElectronico,setCorreoElectronico] = useState("");
  const[Password, setPassword] = useState("");
  const[fechaNacimiento, setfechaNacimiento] = useState(""); 
  const[Genero, setGenero] = useState("Masculino");
  const[precioshora,setprecioshora]=useState([]);//Lista de Precios Hora Bd
  const[seleccionPrecio,setseleccionPrecio]=useState("");
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

  //funcion para obtener la lista de precios
  const getPreciosHora = () => {
    Axios.get("http://localhost:3001/precioshora").then((response) => {
      setprecioshora(response.data);
    });
  };

  function handleChange(e) {
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

    // Si hay campos incompletos, mostramos el modal
    if (camposIncompletos.length > 0) {
      handleShowModal("Datos personales incompletos", "Por favor, llene los campos marcados en rojo.", "Cerrar", handleCloseModal);
      setShowPlaceholderAsterisk(true);
      return
    }
    // Verificar si el nombre contiene caracteres especiales
    const caracteresEspeciales = /[^A-Za-z\s]/;
    if (caracteresEspeciales.test(Nombre)) {
    // Mostrar el modal para cambiar el nombre
    handleShowModal("Error", "El nombre solo puede contener letras y espacios.", "Cerrar", handleCloseModal);
    return; // Detener la ejecución
    }
    // Verificar si el apellido contiene caracteres especiales
    if (caracteresEspeciales.test(Apellido)) {
    // Mostrar el modal para cambiar el apellido
    handleShowModal("Error", "El apellido solo puede contener letras y espacios.", "Cerrar", handleCloseModal);
    return; // Detener la ejecución
    }

    if (Password.length < 8) {
      // Mostrar el modal para cambiar la contraseña
      handleShowModal("Error", "La contraseña debe tener al menos 8 caracteres.", "Cerrar", handleCloseModal);
      return; // Detener la ejecución
    }

    const correoEspecial = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoEspecial.test(CorreoElectronico)) {
      handleShowModal("Error", "Por favor, ingresa un correo electrónico válido.", "Cerrar", handleCloseModal);
      return; // Detener la ejecución
    }
  };
  

  useEffect(()=>{
    getPreciosHora();
  });

  // Función para manejar el cierre del modal
  const handleCloseModal = () => {
    setShowModal(false);
  }


  return (
      <div >
         <Navbar/>
        <form className="form-register">
          <h1>Registrar Amigo Rentable </h1>

          <h3 style={{ textAlign: 'left' }}>Registrar Datos Personales</h3>
          
          <input className={`controls ${camposIncompletos.includes('nombres') ? 'campos-incompletos' : ''}`} 
          type="text" 
          name="nombres" 
          id="nombres" 
          onChange={(event)=> setNombre(event.target.value)} 
          placeholder={`Ingrese su Nombre ${
            showPlaceholderAsterisk ? "*" : ""
          }`} 
          required 
          maxLength={24}/> 
          <br></br>

          
          <input className={`controls ${camposIncompletos.includes('apellidos') ? 'campos-incompletos' : ''}`} 
          type="text" 
          name="apellidos" 
          id="apellidos"
          onChange={(event)=> setApellido(event.target.value)} 
          placeholder={`Ingrese su Apellido ${
            showPlaceholderAsterisk ? "*" : ""
          }`}
          required 
          maxLength={24}/>
          <br></br>
        


          <input className={`controls ${camposIncompletos.includes('correo') ? 'campos-incompletos' : ''}`} 
          type="email" 
          name="correo" 
          id="correo" 
          onChange={(event)=> setCorreoElectronico(event.target.value)} 
          placeholder={`Ingrese su Correo ${
            showPlaceholderAsterisk ? "*" : ""
          }`} 
          required 
          maxLength={24}/>
          <br></br>
          <input className={`controls ${camposIncompletos.includes('password') ? 'campos-incompletos' : ''}`} 
          type="password" 
          name="password" 
          id="password" 
          onChange={(event)=> setPassword(event.target.value)} 
          placeholder={`Ingrese su Contraseña ${
            showPlaceholderAsterisk ? "*" : ""
          }`}
          required 
          maxLength={20}/>
          <br></br>

          <input
            className={`controls ${camposIncompletos.includes('date') ? 'campos-incompletos' : ''}`}
            type="date"
            name="date"
            id="date"
            onChange={(event) => {
              const selectedDate = new Date(event.target.value);
              const maxDate = new Date('2006-12-31'); // Fecha máxima permitida
              if (selectedDate > maxDate) {
                // Si la fecha seleccionada es posterior a 2006-12-31, se restablece el valor a la fecha máxima permitida
                event.target.value = '2006-12-31';
                handleShowModal("Error", "La Aplicacion solo Acepta Personas Mayores 18", "Cerrar", handleCloseModal);
                setfechaNacimiento('2006-12-31');
              } else {
                // Si la fecha seleccionada es válida, se actualiza el estado con la fecha seleccionada por el usuario
                setfechaNacimiento(event.target.value);
              }
            }}
            placeholder={`Ingrese su Fecha de Nacimiento ${
              showPlaceholderAsterisk ? "*" : ""
            }`}
            required
            max="2006-01-01" // Establecer la fecha mínima como 2006-01-01
          />

          <br></br>

            <div className="RadioButtons" style={{ textAlign: 'left' }}>
              <h2>Género</h2>
              <div className="d-flex">
              <FormCheck className={`gender-radio ${camposIncompletos.includes('Hombre') ? 'campos-incompletos' : ''}`}  type="radio" name="Genero" id="Hombre" label="Hombre" value="Hombre" onChange={handleChange} required/>
              <FormCheck className={`gender-radio ${camposIncompletos.includes('Mujer') ? 'campos-incompletos' : ''}`}   type="radio" name="Genero" id="Mujer" label="Mujer" value="Mujer" onChange={handleChange} />
              <FormCheck className={`gender-radio ${camposIncompletos.includes('Otro') ? 'campos-incompletos' : ''}`}   type="radio" name="Genero" id="Otro" label="Otro" value="Otro" onChange={handleChange}/>
              </div>
            </div>
          <br></br>

          <h3>Elige cuánto te gustaría obtener por hora</h3>
          <select className={`controls ${camposIncompletos.includes('nombres') ? 'campos-incompletos' : ''}`} name="tarifa" id="tarifa" onChange={(event)=> setseleccionPrecio(event.target.value)}>
          {precioshora.map((precio, index) => (
            <option key={index} value={precio.idPreciosPorHora}>
              {`Quiero ganar ${precio.Precio_Hora}Bs por hora`}
            </option>
          ))}
          </select>
          <Link to ="/BuscadorAmigo">
              <Button variant="danger" className="ml-2 custom-cancel-button" size="lg">Cancelar</Button>
          </Link>
          <Link to={camposCompletos ? "/RegistrarInteresesAmigo" : ""} 
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
                if (camposCompletos) {
                  return null; // Solo permite el enlace si todos los campos están completos
                } else {
                  verificarCamposCompletos();
                }
              }}
              >
              <Button variant="primary" className="custom-next-button" size="lg" >Siguiente</Button>
          </Link>

        </form>

        {/* Modal para mostrar cuando los campos no estén completos */}
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.body}</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={modalContent.actionButtonClickHandler}>
          {modalContent.actionButtonText}
        </Button>
        </Modal.Footer>
        </Modal>;

      </div> 
    );
  }
  
  export default RegistrarDatosAmigo;
