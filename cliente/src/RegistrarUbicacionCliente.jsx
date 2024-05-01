import Navbar from "./Componentes/Navbar";
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import "./RegistrarUbicacionCliente.css"
import { Link, useLocation } from 'react-router-dom';
import ComboBox from './Componentes/ComboBox';
import { Button, Modal } from 'react-bootstrap'; // Importa el Modal de Bootstrap
import termsAndConditionsTextCompleto from './Componentes/termsAndConditionsText';
import { useUser } from './UserContext';

function RegistrarUbicacionCliente() {
  const [departamentosList, setdepartamentos] = useState([]);
  const [ciudadesList, setciudades] = useState([]);
  const [ciudadesListOriginal, setCiudadesOriginal] = useState([]);
  const [selectedOptionDepartamentos, setSelectedOptionDepartamentos] = useState([]);
  const [selectedOptionCiudades, setSelectedOptionCiudades] = useState([]);
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [termsAndConditionsText, setTermsAndConditionsText] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Estado para controlar la apertura y cierre del modal de éxito
  const [showErrorModal, setShowErrorModal] = useState(false); // Estado para controlar la apertura y cierre del modal de error
  const [errorMessage, setErrorMessage] = useState(""); // Nuevo estado para el mensaje de error personalizado
  const { updateUser } = useUser();

  const location = useLocation();
  const { Nombre, Apellido, CorreoElectronico, Password, fechaNacimiento, Genero, seleccionPrecio, images } = location.state?.data || {};

  const getDepartamentos = () => {
    Axios.get("http://localhost:3001/departamentos").then((response) => {
      setdepartamentos(response.data);
    });
  }

  const getCiudades = () => {
    Axios.get("http://localhost:3001/ciudades").then((response) => {
      setciudades(response.data);
      setCiudadesOriginal(response.data);
    });
  }

  const validateForm = () => {
    let resDep = selectedOptionDepartamentos !== null && selectedOptionDepartamentos !== undefined && selectedOptionDepartamentos !== "Selecciona un departamento";
    let resCiudad = selectedOptionCiudades !== null && selectedOptionCiudades !== undefined && selectedOptionCiudades !== "Selecciona una ciudad";
    return resDep && resCiudad && termsAndConditionsAccepted && privacyPolicyAccepted;
  };

  const add = () => {
    if (validateForm()) {
      Axios.post("http://localhost:3001/crearCliente", {
        Nombre: Nombre,
        Apellido: Apellido,
        CorreoElectronico: CorreoElectronico,
        Password: Password,
        fechaNacimiento: fechaNacimiento,
        Genero: Genero,
        PreciosPorHora_idPreciosPorHora: seleccionPrecio,
        Departamento_idDepartamento: selectedOptionDepartamentos[selectedOptionDepartamentos.length - 1],
        Ciudad_idCiudad: selectedOptionCiudades[selectedOptionCiudades.length - 1]
      }).then(() => {
        Axios.get("http://localhost:3001/lastUserIDC").then((response) => {
          const lastUserID = response.data.lastUserID; // Obtener el último ID de usuario creado
          console.log("Último ID de usuario creado:", lastUserID);
          setShowSuccessModal(true); // Abre el modal de éxito después de registrar con éxito
          Axios.post("http://localhost:3001/lastUserIDFotosC",{
            idAmigo:lastUserID,
            images:images
          }).catch(() => {
            setShowErrorModal(true); // Abre el modal de error si no se pudo obtener el ID del usuario
          });
          Axios.get("http://localhost:3001/ClientePerfil", {
          params: {
          idCliente:lastUserID
          }
          }).then((response) => {
          // Manejar la respuesta
          console.log(response.data[0]);
          updateUser(response.data[0]);
          }).catch(() => {
            setShowErrorModal(true); // Abre el modal de error si no se pudo obtener el ID del usuario
          });
        }).catch(() => {
          setShowErrorModal(true); // Abre el modal de error si no se pudo obtener el ID del usuario
        });
      }).catch(() => {
        setShowErrorModal(true); // Abre el modal de error si ocurre algún problema durante el registro
      });
    } else {
      // Define el mensaje de error personalizado
      setErrorMessage("Por favor, completa todos los campos, acepta los términos y condiciones y la política de privacidad.");
      setShowErrorModal(true); // Abre el modal de error si no se cumplen los requisitos del formulario
    }
  }
  

  const handleComboBoxChangeDepartamentos = (event) => {
    const selectedDepartamentoId = parseInt(event.target.value, 10);
    setSelectedOptionDepartamentos(event.target.value);
    const filteredCiudades = ciudadesListOriginal.filter(ciudad => ciudad.Departamento_idDepartamento === selectedDepartamentoId);
    setciudades(filteredCiudades);
  };

  const handleComboBoxChangeCiudades = (event) => {
    setSelectedOptionCiudades(event.target.value);
  };

  useEffect(() => {
    getDepartamentos();
    getCiudades();
    setTermsAndConditionsText(termsAndConditionsTextCompleto);
    setPrivacyPolicyAccepted("");
  }, []);

  return (
    <div>
      <Navbar />
      <form className="form-ubicacion">
        <h1 style={{fontWeight: 'bold'}}>Registrar Cliente</h1>
        <h3 style={{ textAlign: 'left', fontWeight: 'bold' }}>Registrar Ubicación del Cliente</h3>
        <h3 style={{ textAlign: 'left' }}>Seleccionar Departamento</h3>
        <ComboBox
          label=""
          options={[
            { label: 'Selecciona un departamento', value: null },
            ...departamentosList.map(departamento => ({
              label: departamento.Departamento,
              value: departamento.idDepartamento
            }))
          ]}
          selectedValue={selectedOptionDepartamentos}
          onChange={handleComboBoxChangeDepartamentos}
        />
        <br></br>
        <h3 style={{ textAlign: 'left' }}>Seleccionar Ciudad</h3>
        <ComboBox
          label=""
          options={[
            { label: 'Selecciona una ciudad', value: null },
            ...ciudadesList.map(ciudad => ({
              label: ciudad.Ciudad,
              value: ciudad.idCiudad
            }))
          ]}
          selectedValue={selectedOptionCiudades}
          onChange={handleComboBoxChangeCiudades}
        />
        <h3 style={{marginTop:'30px'}}>Términos y Condiciones</h3>
        <textarea
          readOnly
          rows={10}
          cols={60}
          value={termsAndConditionsText}
          onChange={(e) => setTermsAndConditionsText(e.target.value)}
          style={{ textAlign: 'justify', margin: 'auto', display: 'block', padding:'15px' }}
        />
        <div style={{ textAlign: 'left' }}>
          <input
            type="checkbox"
            id="acceptTerms"
            name="option"
            value="accept"
            checked={termsAndConditionsAccepted}
            onChange={(e) => setTermsAndConditionsAccepted(e.target.checked)}
          />
          <label htmlFor="acceptTerms" style={{marginTop:'30px'}}>Aceptar Términos y Condiciones</label>
          <br></br>
          <input
            type="checkbox"
            id="acceptPrivacyPolicy"
            name="option"
            value="accept"
            checked={privacyPolicyAccepted}
            onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
          />
          <label htmlFor="acceptPrivacyPolicy" style={{marginTop:'10px'}}>Aceptar las politicas de privacidad</label>
        </div>
        <div>
          <Link to="/RegistrarFotosCliente">
            <Button variant="secondary" className="ml-2 custom-cancel-button" >Volver</Button>
          </Link>
          <Button variant="success" className="custom-next-button" onClick={add}>Registrar Perfil</Button>
        </div>
      </form>

      {/* Modal de éxito */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header >
          <Modal.Title>¡Cliente registrado con éxito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          El Cliente ha sido registrado exitosamente.
        </Modal.Body>
        <Modal.Footer>
        <Link to="/">
          <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
            Cerrar
          </Button>
        </Link>
        </Modal.Footer>
      </Modal>

      {/* Modal de error */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error al registrar cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage} {/* Mostrar el mensaje de error personalizado */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RegistrarUbicacionCliente;

