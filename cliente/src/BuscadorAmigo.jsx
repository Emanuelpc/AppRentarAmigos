import Buscador from "./Componentes/Buscador";
import Navbar from "./Componentes/Navbar";
import React, { useState ,useEffect  } from 'react';
import ComboBox from './Componentes/ComboBox';
import Slider from './Componentes/ControldeslizanteEdad';
import CheckboxGroup from './Componentes/CheckboxGroupIntereses';
import BotonGuardar from './Componentes/BotonGuardar';
import CardAmigo from './Componentes/CardAmigo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "axios";
import './BuscadorAmigo.css';

function RegistrarDatosAmigo() {

    const [amigosList, setamigos] = useState([])

    // Función para obtener la lista de amigos del backend
    const getAmigo = () => {
    Axios.get("http://localhost:3001/amigos").then((response) => {
      setamigos(response.data);
    });
    }
    
    //Arreglo y funciones para el CheckBox
     const optionsCiudades = [
      { label: 'Cochabamba', value: 'option1' },
      { label: 'La Paz', value: 'option2' },
      { label: 'Santa Cruz', value: 'option3' },
     ];
     const optionsGeneros = [
      { label: 'Hombre', value: 'option1' },
      { label: 'Mujer', value: 'option2' },
      { label: 'Otro', value: 'option3' },
     ];

     const [selectedOptionCiudades, setSelectedOptionCiudades] = useState(optionsCiudades[0].value);
     const [selectedOptionGeneros, setSelectedOptionGeneros] = useState(optionsGeneros[0].value);
     

     const handleComboBoxChangeCiudades = (event) => {
     setSelectedOptionCiudades(event.target.value);
     };
     const handleComboBoxChangeGeneros = (event) => {
     setSelectedOptionGeneros(event.target.value);
     };
    //Arreglo y funciones para el Slide Edad
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    };
    //Arreglo y Funciones para los checkbox de Interes
    const options = [
      { label: 'Musica', value: 'option1' },
      { label: 'Compras', value: 'option2' },
      { label: 'Deportes', value: 'option3' },
      { label: 'Comida', value: 'option4' },
      { label: 'Jardineria', value: 'option5' },
      { label: 'videoJuegos', value: 'option6' },
      { label: 'turismo', value: 'option7' },
      { label: 'Fiestas', value: 'option8' },
      { label: 'Cocinar', value: 'option9' },
      { label: 'Comic', value: 'option10' },
      { label: 'Libros', value: 'option11' },
      { label: 'Bailar', value: 'option12' },
      { label: 'idiomas', value: 'option13' },
      { label: 'Cine', value: 'option14' },
      // Agrega más opciones según sea necesario
    ];
    
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleCheckboxChange = (event) => {
      const value = event.target.value;
      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter(option => option !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    };
    //Arreglo y Funcion para Crear Card de Amigos 
    //const datosTarjetas = [];
      // Agrega más objetos de datos para más tarjetas si es necesario
      const datosTarjetas = [];
      useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte por primera vez
        getAmigo();
      }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez, 



    
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
        <ComboBox
        label="Ciudad"
        options={optionsCiudades}
        selectedValue={selectedOptionCiudades}
        onChange={handleComboBoxChangeCiudades}
        />
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
        <CheckboxGroup
        options={options}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
        />
        <BotonGuardar />
        </div>
        <div className="EditarCardsResultadosAmigos" style={{ overflowY: 'auto', maxHeight: '600px' }}>
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
  
  export default RegistrarDatosAmigo;