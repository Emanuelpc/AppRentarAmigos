import Buscador from "./Componentes/Buscador";
import Navbar from "./Componentes/Navbar";
import React, { useState } from 'react';
import ComboBox from './Componentes/ComboBox';

function RegistrarDatosAmigo() {

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


  
    return (
      <div>
        <Navbar/>
        <div className="EsloganBuscador">
        <h1>Busca a tu Amigo Rentable Ahora!! </h1>
        <h2>Rentar fácil, rentar inteligente. Amigo Rentable, tu mejor opción siempre.</h2>
        </div>
        <Buscador/>
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
        
      
      </div>
    );
  }
  
  export default RegistrarDatosAmigo;