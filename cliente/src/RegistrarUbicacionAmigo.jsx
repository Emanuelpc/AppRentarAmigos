import Navbar from "./Componentes/Navbar";
import React, { useState ,useEffect  } from 'react';
import Axios from "axios";
import "./RegistrarUbicacionAmigo.css"
import {  Link,useLocation } from 'react-router-dom';
import ComboBox from './Componentes/ComboBox';
function RegistrarUbicacionAmigo() {

  const [departamentosList, setdepartamentos] = useState([])
  const [ciudadesList, setciudades] = useState([])
  const [ciudadesListOriginal, setCiudadesOriginal] = useState([]);
  const [selectedOptionDepartamentos, setSelectedOptionDepartamentos] = useState([]);
  const [selectedOptionCiudades, setSelectedOptionCiudades] = useState([]);

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio,aboutMe} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio,aboutMe)


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
    return resDep && resCiudad; 
  };
  //Funcion para ingresar un amigo
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
      alert("Por favor, selecciona una opción en los combobox y acepta los términos y condiciones.");
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
  }, []);
  
  

    return (
      <div>
          <Navbar/>        
          <h1>Seleccionar tu ubicacion</h1>
          <div>
                <form className="Form">
                  <h3>Seleccionar Departamento(*)</h3>
                    <ComboBox
                    label=""
                    options={[
                      { label: 'Selecciona un departamento', value: null }, // Opción nula agregada aquí
                      ...departamentosList.map(departamento => ({
                        label: departamento.Departamento,
                        value: departamento.idDepartamento
                      }))
                    ]} // Aquí se utiliza departamentosList
                    selectedValue={selectedOptionDepartamentos}
                    onChange={handleComboBoxChangeDepartamentos}
                    />
                  <br></br>
                  <h3>Seleccionar Ciudad(*)</h3>
                    <ComboBox
                    label=""
                  options={[
                    { label: 'Selecciona una ciudad', value: null }, // Opción nula agregada aquí
                    ...ciudadesList.map(ciudad => ({
                      label: ciudad.Ciudad,
                      value: ciudad.idCiudad
                    }))
                  ]}
                  selectedValue={selectedOptionCiudades}
                    onChange={handleComboBoxChangeCiudades}
                    />
                  <h3>Terminos y Condiciones(*)</h3>
                  <textarea
                      readOnly
                      rows={5}
                      cols={50}
                  />
                  <div>
                  <input
                      type="radio"
                      id="accept"
                      name="option"
                      value="accept"
                      //checked={selectedOption === 'accept'}
                     // onChange={handleOptionChange}
                  />
                  <label htmlFor="accept">Aceptar Términos y Condiciones</label>
                  </div>
                  <div>
                  <input
                      type="radio"
                      id="accept"
                      name="option"
                      value="accept"
                      //checked={selectedOption === 'accept'}
                     // onChange={handleOptionChange}
                  />
                  <label htmlFor="accept">Aceptar Politicas de Privacidad</label>
                  </div>
            </form>
            <div>  
          <Link to ="/RegistrarHorarioAmigo">
              <button class = "btn-1">Volver</button>
          </Link>
          <Link to ="/BuscadorAmigo">
              <button class = "btn-2" onClick={add}>Registrar Perfil</button>
          </Link>
          
      </div>
          </div>
      </div>
    );
  }
  
  export default RegistrarUbicacionAmigo;