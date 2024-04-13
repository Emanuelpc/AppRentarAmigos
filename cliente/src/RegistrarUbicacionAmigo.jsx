import Navbar from "./Componentes/Navbar";
import React, { useState ,useEffect  } from 'react';
import Axios from "axios";
import "./RegistrarUbicacionAmigo.css"
import {  Link,useLocation } from 'react-router-dom';
import ComboBox from './Componentes/ComboBox';
import { Button } from 'react-bootstrap';
import termsAndConditionsTextCompleto from './Componentes/termsAndConditionsText';

function RegistrarUbicacionAmigo() {

  const [departamentosList, setdepartamentos] = useState([]);
  const [ciudadesList, setciudades] = useState([]);
  const [ciudadesListOriginal, setCiudadesOriginal] = useState([]);
  const [selectedOptionDepartamentos, setSelectedOptionDepartamentos] = useState([]);
  const [selectedOptionCiudades, setSelectedOptionCiudades] = useState([]);
  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] = useState(false); // Estado local para el estado de aceptación de términos y condiciones
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [termsAndConditionsText, setTermsAndConditionsText] = useState(""); // Estado local para el texto de términos y condiciones

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio,aboutMe,images} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio,aboutMe,images)

  const hasSelectedSchedule = () => {
    return selectedOptionDepartamentos !== null &&
      selectedOptionDepartamentos !== undefined &&
      selectedOptionDepartamentos !== "Selecciona un departamento" &&
      selectedOptionCiudades !== null &&
      selectedOptionCiudades !== undefined &&
      selectedOptionCiudades !== "Selecciona una ciudad";
  };

  // Función para obtener la lista de Departamentos del backend
  const getDepartamentos = () => {
    Axios.get("http://localhost:3001/departamentos").then((response) => {
      setdepartamentos(response.data);
    });
  }
  
  // Función para obtener la lista de Ciudades del backend
  const getCiudades = () => {
    Axios.get("http://localhost:3001/ciudades").then((response) => {
      setciudades(response.data);
      setCiudadesOriginal(response.data); 
    });
  }
  
  const validateForm = () => {
    let resDep=selectedOptionDepartamentos !== null && selectedOptionDepartamentos !== undefined &&selectedOptionDepartamentos !== "Selecciona un departamento";
    let resCiudad=selectedOptionCiudades !== null && selectedOptionCiudades !== undefined && selectedOptionCiudades !== "Selecciona una ciudad";
    console.log(resDep && resCiudad);
    return resDep && resCiudad && termsAndConditionsAccepted && privacyPolicyAccepted; 
  };

  // Función para ingresar un amigo
  const add = () => {
    if (validateForm()) {
      // Realizar la acción de registro del perfil
      Axios.post("http://localhost:3001/create",{
        Nombre:Nombre,
        Apellido:Apellido,
        CorreoElectronico:CorreoElectronico,
        Password:Password,
        fechaNacimiento:fechaNacimiento,
        Genero:Genero,
        PreciosPorHora_idPreciosPorHora:seleccionPrecio,
        Acercademi:aboutMe,
        Departamento_idDepartamento:selectedOptionDepartamentos[selectedOptionDepartamentos.length-1],
        Ciudad_idCiudad:selectedOptionCiudades[selectedOptionCiudades.length-1]
      }).then(()=>{
        alert("Amigo registrado");
      });
    } else {
      alert("Por favor, selecciona una opción en los combobox , acepta los términos y condiciones ademas de las Politicas de Privacidad.");
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
    // Aquí puedes establecer el texto predeterminado para los términos y condiciones
    setTermsAndConditionsText(termsAndConditionsTextCompleto);
    setPrivacyPolicyAccepted("");
  }, []);

  return (
    <div>
      <Navbar/>        
      <form className="form-ubicacion">
        <h1>Registrar Amigo Rentable</h1>
        <h3 style={{ textAlign: 'left' }}>Registrar Ubicacion del Amigo Rentable</h3>
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
        <h3>Terminos y Condiciones</h3>
        {/* Textarea con el texto de términos y condiciones */}
        <textarea
          readOnly
          rows={10}
          cols={60}
          value={termsAndConditionsText} // Valor del textarea
          onChange={(e) => setTermsAndConditionsText(e.target.value)} // Función para actualizar el estado local
          style={{ textAlign: 'justify', margin: 'auto', display: 'block' }}
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
          <label htmlFor="acceptTerms">Aceptar Términos y Condiciones</label>
          <br></br>
          <input
            type="checkbox"
            id="acceptPrivacyPolicy"
            name="option"
            value="accept"
            checked={privacyPolicyAccepted}
            onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
          />
          <label htmlFor="acceptPrivacyPolicy">Aceptar las politicas de privacidad</label>
        </div>
        <div>  
          <Link to ="/RegistrarHorarioAmigo">
            <Button variant="secondary" className="ml-2 custom-cancel-button" >Volver</Button>
          </Link>

          {hasSelectedSchedule ? (
          <Link to ="/BuscadorAmigo">
            <Button variant="success" className="custom-next-button" onClick={add}>Registrar Perfil</Button>
          </Link>
          ) : (
            <Button variant="success" className="custom-next-button" disabled>Registrar Perfil</Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default RegistrarUbicacionAmigo;
