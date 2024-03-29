import Buscador from "./Componentes/Buscador";
import Navbar from "./Componentes/Navbar";
import React, { useState ,useEffect  } from 'react';
import ComboBox from './Componentes/ComboBox';
import Slider from './Componentes/ControldeslizanteEdad';
import CheckboxGroup from './Componentes/CheckboxGroupIntereses';
import BotonBuscar from './Componentes/BotonBuscar';
import CardAmigo from './Componentes/CardAmigo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "axios";
import './BuscadorAmigo.css';

function BuscadorAmigo() {

    const [amigosList, setamigos] = useState([])
    const [departamentosList, setdepartamentos] = useState([])
    const [ciudadesList, setciudades] = useState([])
    const [interesesList, setintereses] = useState([])
    const [guardarSeleccionComboboxDepartamento, setGuardarSeleccionComboboxDepartamento] = useState([]);
    const [guardarSeleccionComboboxCiudad, setGuardarSeleccionComboboxCiudad] = useState([]);
    const [guardarSeleccionComboboxGenero, setGuardarSeleccionComboboxGenero] = useState([]);
    const [guardarSeleccionSlider, setGuardarSeleccionSlider] = useState([]);
    const [guardarSeleccionCheckbox, setGuardarSeleccionCheckbox] = useState([]);

    // Función para obtener la lista de amigos del backend
    const getAmigo = () => {
    Axios.get("http://localhost:3001/amigos").then((response) => {
      setamigos(response.data);
    });
    }
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
      });
    }
    // Función para obtener la lista de Intereses del backend
    const getIntereses = () => {
      Axios.get("http://localhost:3001/intereses").then((response) => {
        setintereses(response.data);
      });
    }
    
    //Arreglo y funciones para el CheckBox
     const optionsGeneros = [
      { label: 'Hombre', value: 'option1' },
      { label: 'Mujer', value: 'option2' },
      { label: 'Otro', value: 'option3' },
     ];

     const [selectedOptionDepartamentos, setSelectedOptionDepartamentos] = useState([]);
     const [selectedOptionCiudades, setSelectedOptionCiudades] = useState([]);
     const [selectedOptionGeneros, setSelectedOptionGeneros] = useState([]);
     

     const handleComboBoxChangeDepartamentos = (event) => {
      setSelectedOptionDepartamentos(event.target.value);
      setGuardarSeleccionComboboxDepartamento([...guardarSeleccionComboboxDepartamento, { tipo: 'departamento', valor: event.target.value }]);
      };
     const handleComboBoxChangeCiudades = (event) => {
     setSelectedOptionCiudades(event.target.value);
     setGuardarSeleccionComboboxCiudad([...guardarSeleccionComboboxCiudad, { tipo: 'ciudad', valor: event.target.value }]);
     };
     const handleComboBoxChangeGeneros = (event) => {
     setSelectedOptionGeneros(event.target.value);
     setGuardarSeleccionComboboxGenero([...guardarSeleccionComboboxGenero, { tipo: 'genero', valor: event.target.value }]);
     };
    //Arreglo y funciones para el Slide Edad
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    const filteredSelections = guardarSeleccionSlider.filter(selection => selection.tipo !== 'edad');
    // Agregar la nueva entrada al array
    setGuardarSeleccionSlider([...filteredSelections, { tipo: 'edad', valor: event.target.value }]);
    };
    //Funciones para los checkbox de Interes
    
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (event) => {
      const value = event.target.value;
      const isChecked = event.target.checked;

      if (isChecked) {
       setSelectedOptions([...selectedOptions, value]);
       setGuardarSeleccionCheckbox([...guardarSeleccionCheckbox, { tipo: 'interes', valor: value }]);
      } else {
        setGuardarSeleccionCheckbox(guardarSeleccionCheckbox.filter(option => option.valor !== value));
      } 
    };
    //Funcion para Crear Card de Amigos al entrar a la pagina 
      useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte por primera vez
        getAmigo();
        getDepartamentos();
        getCiudades();
        getIntereses()
      }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez, 
      //Funcion para ver las seleccion al clikear el boton
      const handleGuardarClick = () => {
        console.log("Selecciones guardadas (Combobox Departamento):", guardarSeleccionComboboxDepartamento);
        console.log("Selecciones guardadas (Combobox Ciudad):", guardarSeleccionComboboxCiudad);
        console.log("Selecciones guardadas (Combobox Genero):", guardarSeleccionComboboxGenero);
        console.log("Selecciones guardadas (Slider):", guardarSeleccionSlider);
        console.log("Selecciones guardadas (Checkbox):", guardarSeleccionCheckbox)
    };

    return (
      <div>
        <Navbar/>
        <div className="EsloganBuscador">
        <h1>Busca a tu Amigo Rentable Ahora!! </h1>
        <h2>Rentar fácil, rentar inteligente. Amigo Rentable, tu mejor opción siempre.</h2>
        </div>
        <Buscador/>
        <div className="contenedor">
        <div className="Filtrosdiv">

        {departamentosList.length > 0 && (
        <ComboBox
        label="Departamentos"
        options={departamentosList.map(departamento => ({
          label: departamento.Departamento, // Ajusta a la propiedad correcta del departamento
          value: departamento.idDepartamento // Ajusta a la propiedad correcta del departamento
        }))} // Aquí se utiliza departamentosList
        selectedValue={selectedOptionDepartamentos}
        onChange={handleComboBoxChangeDepartamentos}
        />
        )}
        {ciudadesList.length > 0 && (
        <ComboBox
        label="Ciudad"
        options={ciudadesList.map(ciudades => ({
          label: ciudades.Ciudad, // Ajusta a la propiedad correcta del departamento
          value: ciudades.idCiudad // Ajusta a la propiedad correcta del departamento
        }))}
        selectedValue={selectedOptionCiudades}
        onChange={handleComboBoxChangeCiudades}
        />
        )}
        <ComboBox
        label="Genero"
        options={optionsGeneros}
        selectedValue={selectedOptionGeneros}
        onChange={handleComboBoxChangeGeneros}
        />
        <Slider
        label="Selecciona Edad"
        min={18}
        max={90}
        value={sliderValue}
        onChange={handleSliderChange}
        />
        {interesesList.length > 0 &&(
          <CheckboxGroup
          options={interesesList.map(interes => ({
            label: interes.Interes, // Ajusta a la propiedad correcta del interes
            value: "option"+interes.idIntereses  // Ajusta a la propiedad correcta del interes
          }))}
          selectedOptions={selectedOptions}
          onChange={handleCheckboxChange}
          />
        )}
        <BotonBuscar onClick={handleGuardarClick}/>
        </div>
        <div className="EditarCardsResultadosAmigos" style={{ overflowY: 'auto', maxHeight: '700px' }}>
          <h3>Resultados Busqueda de Amigos</h3>
          <Row xs={1} md={4} className="g-4">
          {amigosList.map((tarjeta, index) => (
          <Col key={index}>
           <CardAmigo
            titulo={tarjeta.Nombre+" "+tarjeta.Apellido}
            descripcion={tarjeta.Acercademi}
            imagenUrl={"https://media.istockphoto.com/id/522189109/es/foto/no-se-tome-tambi%C3%A9n-en-serio-la-vida.jpg?s=612x612&w=0&k=20&c=4RcKyGRBw_fwH_hl80Fn-COdYk9bjbrVq5v7u97dct4="}
           />
          </Col>
          ))}
          </Row>
        </div>
        </div>
      </div>
    );
  }
  
  export default BuscadorAmigo;
