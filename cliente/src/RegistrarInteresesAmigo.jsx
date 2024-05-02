
import { useState,useEffect } from "react";
import Navbar from "./Componentes/Navbar";
import './RegistrarInteresesAmigo.css';
import {  Link,useLocation } from 'react-router-dom';
import { Button ,Form} from 'react-bootstrap';
import Axios from "axios";
import CheckboxGroup from './Componentes/CheckboxGroupIntereses';

function RegistrarInteresesAmigo() {

  //const [interesesList, setintereses] = useState([]);
  const [aboutMe, setAboutMe] = useState(""); // Estado local para almacenar el valor del textarea
  const [Listintereses,setListintereses]=useState([]);
  const [guardarSeleccionCheckbox, setGuardarSeleccionCheckbox] = useState([]);


  //Obtener los datos de la Pagina Anterior
  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio)


  //Funcion obtener lista de intereses
  const getIntereses = () => {
    Axios.get("http://localhost:3001/intereses").then((response) => {
      setListintereses(response.data);
    });
    console.log(Listintereses)
  };

  // Manejador de cambio para el textarea
  const handleAboutMeChange = (event) => {
    setAboutMe(event.target.value);
  };

  useEffect(()=>{
    getIntereses();
  }, []);

  const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (event) => {
      const value = event.target.value;
      const isChecked = event.target.checked;
      console.log("Checkbox value:", value);
      console.log("Checkbox checked:", isChecked);
      if (isChecked) {
       setSelectedOptions([...selectedOptions, value]);
       setGuardarSeleccionCheckbox(prevState => [...prevState, { tipo: 'interes', valor: value }]);
      } else {
       setSelectedOptions(selectedOptions.filter(option => option !== value));
       setGuardarSeleccionCheckbox(prevState => prevState.filter(option => option.valor !== value));
      } 
      console.log("Selected options:", selectedOptions);
    };
  

  
  
    const [checkedIntereses, setCheckedIntereses] = useState(() => {
      const savedIntereses = localStorage.getItem('checkedIntereses');
      return savedIntereses ? JSON.parse(savedIntereses) : {};
    });
  
    const [mensaje, setMensaje] = useState(() => {
      const savedMensaje = localStorage.getItem('mensaje');
      return savedMensaje || '';
    });
  
    useEffect(() => {
      localStorage.setItem('checkedIntereses', JSON.stringify(checkedIntereses));
    }, [checkedIntereses]);
  
    useEffect(() => {
      localStorage.setItem('mensaje', mensaje);
    }, [mensaje]);
  
    const handleMensajeChange = (e) => {
      const { value } = e.target;
      setMensaje(value);
    };
  
  return(
    <div>
      <Navbar/>
      <form className="form-Intereses-AcercaDeMi">
      <h1>Registrar Amigo Rentable </h1>
      <h3 style={{ textAlign: 'left' }}>Registrar Intereses Personales</h3>

      {Listintereses.length > 0 &&(
          <CheckboxGroup
          options={Listintereses.map(interes => ({
            label: interes.Interes, // Ajusta a la propiedad correcta del interes
            value: "option"+interes.idIntereses  // Ajusta a la propiedad correcta del interes
          }))}
          selectedOptions={selectedOptions}
          onChange={handleCheckboxChange}
          columns={4}
          labeltitulo={"Selecciona al menos 3 Intereses para tu perfil"}
          />
        )}  
      <h3 style={{ textAlign: 'left' }}>Registrar Descripción Personal</h3>
      <Form.Control
          id="mensaje"
          name="mensaje"
          as="textarea"
          onChange={handleAboutMeChange}
          rows="4"
          cols="60"
          style={{ width: "100%", padding: "10px",margin:"10px", borderRadius: "4px", fontFamily: "calibri",fontSize: "20px"}}
        />
      <div>
          <Link to="/RegistrarDatosAmigo">
            <Button variant="secondary" className="ml-2 custom-cancel-button" >Volver</Button>
          </Link>
          <Link to="/RegistrarFotosAmigo" state={
            {
              data: {
                Nombre,
                Apellido,
                CorreoElectronico,
                Password,
                fechaNacimiento,
                Genero,
                seleccionPrecio,
                aboutMe
              }
            }}>
              <Button variant = "primary" className="custom-next-button">Siguiente</Button>
          </Link>
      </div>
      </form>
    </div>   
    );
  }
  
  export default RegistrarInteresesAmigo;
  
