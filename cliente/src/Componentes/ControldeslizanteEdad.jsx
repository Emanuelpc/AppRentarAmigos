import React from 'react';
import Form from 'react-bootstrap/Form';
import './ControldeslizanteEdad.css';
const Slider = ({ label, min, max, value, onChange }) => {
    return (
      <div className='EditarSlider'>
      <Form.Group>
        <Form.Label className='EditarTexto'>{label}</Form.Label>
        <Form.Control 
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
        />
        <Form.Text className='EditarTexto'>{value}</Form.Text>
      </Form.Group>
      </div>
    );
  };
  
  export default Slider;
  

  
  