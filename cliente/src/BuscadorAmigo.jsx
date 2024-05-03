import Buscador from "./Componentes/Buscador";
import Navbar from "./Componentes/Navbar";
import { Modal, Button } from 'react-bootstrap';
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
    const [showModal, setShowModal] = useState(false);
    const [amigosList, setamigos] = useState([])
    const [departamentosList, setdepartamentos] = useState([])
    const [ciudadesList, setciudades] = useState([])
    const [ciudadesListOriginal, setCiudadesOriginal] = useState([]);
    const [interesesList, setintereses] = useState([])
    const [guardarSeleccionComboboxDepartamento, setGuardarSeleccionComboboxDepartamento] = useState([]);
    const [guardarSeleccionComboboxCiudad, setGuardarSeleccionComboboxCiudad] = useState([]);
    const [guardarSeleccionComboboxGenero, setGuardarSeleccionComboboxGenero] = useState([]);
    const [guardarSeleccionSlider, setGuardarSeleccionSlider] = useState([]);
    const [guardarSeleccionCheckbox, setGuardarSeleccionCheckbox] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    // Manejar cambios en la búsqueda
    const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    };
    const BuscarAmigoNombre = () => {
      let resultado=separarPorEspacios(searchQuery);
      console.log(resultado);
      Axios.get("http://localhost:3001/amigoBusqueda", {
              params: {
                Nombre:resultado[0],
                Apellido:resultado[1]
              }
          }).then((response) => {
              // Manejar la respuesta
              setamigos(response.data);
          }).catch((error) => {
              console.error("Error en la solicitud:", error);
          });
    }
    // Función para obtener la lista de amigos y con su departamentoCorrespondiente del backend
    const getAmigo = () => {
    Axios.get("http://localhost:3001/amigosconDepartamento").then((response) => {
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
        setCiudadesOriginal(response.data); // Guardar la lista original
      });
    }
    // Función para obtener la lista de Intereses del backend
    const getIntereses = () => {
      Axios.get("http://localhost:3001/intereses").then((response) => {
        setintereses(response.data);
      });
    }
    //Funcion para obtener la lista de Amigos por los filtros
    
    //Arreglo y funciones para el CheckBox
     const optionsGeneros = [
      { label:'Seleccion un Género',value: null },
      { label: 'Hombre', value: 'option1' },
      { label: 'Mujer', value: 'option2' },
      { label: 'Otro', value: 'option3' },
     ];
     const [selectedOptionDepartamentos, setSelectedOptionDepartamentos] = useState([]);
     const [selectedOptionCiudades, setSelectedOptionCiudades] = useState([]);
     const [selectedOptionGeneros, setSelectedOptionGeneros] = useState([]);


     const handleComboBoxChangeDepartamentos = (event) => {
      const selectedDepartamentoId = parseInt(event.target.value, 10);
      setSelectedOptionDepartamentos(event.target.value);
      setGuardarSeleccionComboboxDepartamento([...guardarSeleccionComboboxDepartamento, { tipo: 'departamento', valor: event.target.value }]);
      const filteredCiudades = ciudadesListOriginal.filter(ciudad => ciudad.Departamento_idDepartamento === selectedDepartamentoId);
      setciudades(filteredCiudades);
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
    //Funcion para Crear Card de Amigos al entrar a la pagina 
      useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte por primera vez
        getAmigo();
        getDepartamentos();
        getCiudades();
        getIntereses()
      }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez, 
     // Función para realizar la búsqueda de amigos cuando se hacen clic en el botón de búsqueda
    const handleBuscarClick = () => {
      // Verifica si se han seleccionado filtros antes de realizar la búsqueda
      if (guardarSeleccionComboboxDepartamento.length === 0 &&
          guardarSeleccionComboboxCiudad.length === 0 &&
          guardarSeleccionComboboxGenero.length === 0 &&
          guardarSeleccionSlider.length === 0 &&
          guardarSeleccionCheckbox.length === 0) {
          // Muestra el modal si no se han seleccionado filtros
          handleShowModal();
      } else {
          // Realiza la búsqueda si se han seleccionado filtros
          Axios.get("http://localhost:3001/amigosfiltrado", {
              params: {
                  Departamento: guardarSeleccionComboboxDepartamento[guardarSeleccionComboboxDepartamento.length - 1],
                  Ciudad: guardarSeleccionComboboxCiudad[guardarSeleccionComboboxCiudad.length - 1],
                  Genero: guardarSeleccionComboboxGenero[guardarSeleccionComboboxGenero.length - 1],
                  Slider: guardarSeleccionSlider[guardarSeleccionSlider.length - 1],
                  Intereses: guardarSeleccionCheckbox
              }
          }).then((response) => {
              // Manejar la respuesta
              setamigos(response.data);
          }).catch((error) => {
              console.error("Error en la solicitud:", error);
          });
      }
  };

    const handleShowModal = () => {
      setShowModal(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
      setShowModal(false);
    };

    function obtenerEdad(cadena) {
      let primerosCuatro = cadena.substring(0, 4);
      let edad=2024-parseInt(primerosCuatro, 10); // La base 10 se usa para garantizar la interpretación correcta del número
      return edad;
    }
    function separarPorEspacios(cadena) {
      // Elimina los espacios en blanco al principio y al final de la cadena usando la función trim()
      const cadenaSinEspaciosInicioFin = cadena.trim();
      // Divide la cadena sin espacios en palabras usando split()
      const palabras = cadenaSinEspaciosInicioFin.split(" ");
      // Filtra las palabras para eliminar cualquier palabra vacía
      const palabrasSinEspaciosInicio = palabras.filter(palabra => palabra.trim() !== '');
      return palabrasSinEspaciosInicio;
  }
  
    return (
      <div>
        <Navbar/>
        <div className="EsloganBuscador">
        <h1>¡¡Busca a tu amigo ahora!! Encuentra amistad al instante</h1>
        </div>
        <Buscador
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onClick={BuscarAmigoNombre}
        />
        <div className="contenedor">
        <div className="Filtrosdiv">
        {departamentosList.length > 0 && (
        <ComboBox
        label="Departamentos"
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
        )}
        {ciudadesList.length > 0 && (
        <ComboBox
        label="Ciudad"
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
        )}
        <ComboBox
        label="Género"
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
          columns={2}
          labeltitulo={"Intereses"}
          />
        )}
        <BotonBuscar onClick={handleBuscarClick}/>
        </div>
        <div className="EditarCardsResultadosAmigos" style={{ overflowY: 'auto', maxHeight: '730px' }}>
          <h3>Resultados Busqueda de Amigos</h3>
          <Row xs={1} md={4} className="g-4">
          {amigosList.map((tarjeta, index) => (
          <Col key={index}>
           <CardAmigo
           id = {tarjeta.idAmigo}
           genero = {tarjeta.Genero}
           nombre = {tarjeta.Nombre}
           apellido ={tarjeta.Apellido}
           edad   ={obtenerEdad(tarjeta.fechaNacimiento)} 
            titulo={tarjeta.Nombre+" "+tarjeta.Apellido+" Edad "+obtenerEdad(tarjeta.fechaNacimiento)}
            ubicacion={tarjeta.Departamento+" "+tarjeta.Ciudad}
            descripcion={tarjeta.Acercademi}
            imagenUrl={tarjeta.foto}
           />
          </Col>
          ))}
          </Row>
        </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Selecciona filtros</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Debes seleccionar al menos un filtro antes de realizar la búsqueda.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
          </Modal>
      </div>
    );
  }
  
  export default BuscadorAmigo;