import Buscador from "./Componentes/Buscador";
import Navbar from "./Componentes/Navbar";
import React, { useState } from 'react';
import ComboBox from './Componentes/ComboBox';
import Slider from './Componentes/ControldeslizanteEdad';
import CheckboxGroup from './Componentes/CheckboxGroupIntereses';
import BotonBuscar from './Componentes/BotonBuscar';
import CardAmigo from './Componentes/CardAmigo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BuscadorAmigo.css';

<<<<<<< HEAD
function RegistrarDatosAmigo() {
=======
function BuscadorAmigo() {

    const [amigosList, setamigos] = useState([])
    const [departamentosList, setdepartamentos] = useState([])
    const [ciudadesList, setciudades] = useState([])
    const [interesesList, setintereses] = useState([])
    const [guardarSeleccion, setGuardarSeleccion] = useState([]);

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
    
>>>>>>> Emanuel
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

<<<<<<< HEAD
     const [selectedOptionCiudades, setSelectedOptionCiudades] = useState(optionsCiudades[0].value);
     const [selectedOptionGeneros, setSelectedOptionGeneros] = useState(optionsGeneros[0].value);
     

=======
     const [selectedOptionDepartamentos, setSelectedOptionDepartamentos] = useState([]);
     const [selectedOptionCiudades, setSelectedOptionCiudades] = useState([]);
     const [selectedOptionGeneros, setSelectedOptionGeneros] = useState([]);
     

     const handleComboBoxChangeDepartamentos = (event) => {
      setSelectedOptionDepartamentos(event.target.value);
      setGuardarSeleccion(prevState => [...prevState, { tipo: 'departamento', valor: event.target.value }]);
      };
>>>>>>> Emanuel
     const handleComboBoxChangeCiudades = (event) => {
     setSelectedOptionCiudades(event.target.value);
     setGuardarSeleccion(prevState => [...prevState, { tipo: 'ciudad', valor: event.target.value }]);
     };
     const handleComboBoxChangeGeneros = (event) => {
     setSelectedOptionGeneros(event.target.value);
     setGuardarSeleccion(prevState => [...prevState, { tipo: 'genero', valor: event.target.value }]);
     };
    //Arreglo y funciones para el Slide Edad
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    const filteredSelections = guardarSeleccion.filter(selection => selection.tipo !== 'edad');
    // Agregar la nueva entrada al array
    setGuardarSeleccion([...filteredSelections, { tipo: 'edad', valor: event.target.value }]);
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
<<<<<<< HEAD
      if (selectedOptions.includes(value)) {
        setSelectedOptions(selectedOptions.filter(option => option !== value));
      } else {
        setSelectedOptions([...selectedOptions, value]);
      }
    };
    //Arreglo y Funcion para Crear Card de Amigos 
    const datosTarjetas = [
      {
        titulo: 'Carlos García Edad:21',
        descripcion: 'Siempre estoy listo para sacar una sonrisa con mi energía vibrante y mi deseo de aventura.',
        imagenUrl: 'https://media.istockphoto.com/id/1392528328/es/foto/retrato-de-un-hombre-guapo-y-sonriente-con-camiseta-blanca-de-pie-con-los-brazos-cruzados.jpg?s=612x612&w=0&k=20&c=1EtzClRt1iBmW9apxO4HgQEZFKCx6kK_s3Dy3TZteSE=', // Ejemplo de URL de imagen
      },
      {
        titulo: 'Paula Gómez Edad:21',
        descripcion: 'Siempre buscando contagiar alegría , con un espíritu aventurero y generoso que nunca se apaga.',
        imagenUrl: 'https://img.freepik.com/foto-gratis/mujer-joven-hermosa-sueter-rosa-calido-aspecto-natural-sonriente-retrato-aislado-cabello-largo_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.417342198.1711497600&semt=sph', // Ejemplo de URL de imagen
      },
      {
        titulo: 'Andrés Rodríguez Edad:21',
        descripcion: 'Siempre estoy listo para sacar una sonrisa con mi energía vibrante y mi deseo de aventura.',
        imagenUrl: 'https://media.istockphoto.com/id/1282821098/es/foto/happy-young-man-in-the-city.jpg?s=612x612&w=0&k=20&c=yh4Qjmk5XWZqP6qLSZm1t4k_bui1ad2NJQaS2kSiqo0=', // Ejemplo de URL de imagen
      },
      {
        titulo: 'Carmen Díaz Edad:21',
        descripcion: 'Siempre buscando contagiar alegría , con un espíritu aventurero y generoso que nunca se apaga.',
        imagenUrl: 'https://media.istockphoto.com/id/1437816897/es/foto/mujer-de-negocios-gerente-o-retrato-de-recursos-humanos-para-el-%C3%A9xito-profesional-la-empresa.jpg?s=612x612&w=0&k=20&c=UUQMt4QvYIlD3OUT_Q81nZLTML6vb5X5bwMLjznVNuk=', // Ejemplo de URL de imagen
      },
      {
        titulo: 'Carlos García Edad:21',
        descripcion: 'Siempre estoy listo para sacar una sonrisa con mi energía vibrante y mi deseo de aventura.',
        imagenUrl: 'https://media.istockphoto.com/id/1392528328/es/foto/retrato-de-un-hombre-guapo-y-sonriente-con-camiseta-blanca-de-pie-con-los-brazos-cruzados.jpg?s=612x612&w=0&k=20&c=1EtzClRt1iBmW9apxO4HgQEZFKCx6kK_s3Dy3TZteSE=', // Ejemplo de URL de imagen
      },
      {
        titulo: 'Paula Gómez Edad:21',
        descripcion: 'Siempre buscando contagiar alegría , con un espíritu aventurero y generoso que nunca se apaga.',
        imagenUrl: 'https://img.freepik.com/foto-gratis/mujer-joven-hermosa-sueter-rosa-calido-aspecto-natural-sonriente-retrato-aislado-cabello-largo_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.417342198.1711497600&semt=sph', // Ejemplo de URL de imagen
      },
      {
        titulo: 'Andrés Rodríguez Edad:21',
        descripcion: 'Siempre estoy listo para sacar una sonrisa con mi energía vibrante y mi deseo de aventura.',
        imagenUrl: 'https://media.istockphoto.com/id/1282821098/es/foto/happy-young-man-in-the-city.jpg?s=612x612&w=0&k=20&c=yh4Qjmk5XWZqP6qLSZm1t4k_bui1ad2NJQaS2kSiqo0=', // Ejemplo de URL de imagen
      },
      {
        titulo: 'Carmen Díaz Edad:21',
        descripcion: 'Siempre buscando contagiar alegría , con un espíritu aventurero y generoso que nunca se apaga.',
        imagenUrl: 'https://media.istockphoto.com/id/1437816897/es/foto/mujer-de-negocios-gerente-o-retrato-de-recursos-humanos-para-el-%C3%A9xito-profesional-la-empresa.jpg?s=612x612&w=0&k=20&c=UUQMt4QvYIlD3OUT_Q81nZLTML6vb5X5bwMLjznVNuk=', // Ejemplo de URL de imagen
      },
      
      
      // Agrega más objetos de datos para más tarjetas si es necesario
    ];
=======
      const isChecked = event.target.checked;
      console.log("Checkbox value:", value);
      console.log("Checkbox checked:", isChecked);

      if (isChecked) {
       setSelectedOptions([...selectedOptions, value]);
       setGuardarSeleccion(prevState => [...prevState, { tipo: 'interes', valor: value }]);
      } else {
       setSelectedOptions(selectedOptions.filter(option => option !== value));
       setGuardarSeleccion(prevState => prevState.filter(option => option.valor !== value));
      } 
      console.log("Selected options:", selectedOptions);
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
        console.log("Selecciones guardadas:", guardarSeleccion);
        
    };

>>>>>>> Emanuel
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
<<<<<<< HEAD
        <CheckboxGroup
        options={options}
        selectedOptions={selectedOptions}
        onChange={handleCheckboxChange}
        />
        <BotonGuardar />
=======
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
>>>>>>> Emanuel
        </div>
        <div className="EditarCardsResultadosAmigos" style={{ overflowY: 'auto', maxHeight: '600px' }}>
          <h3>Resultados Busqueda de Amigos</h3>
          <Row xs={1} md={4} className="g-4">
          {datosTarjetas.map((tarjeta, index) => (
          <Col key={index}>
           <CardAmigo
            titulo={tarjeta.titulo}
            descripcion={tarjeta.descripcion}
            imagenUrl={tarjeta.imagenUrl}
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