import React from 'react';
import Form from 'react-bootstrap/Form';
import './ComboBox.css';

const ComboBox = ({ label, options, selectedValue, onChange }) => {
    return (
      <div className='EditarCombobox'>
      <Form.Group>
        <Form.Label className='TituloComboBox'>{label}</Form.Label>
        <Form.Control
          as="select"
          value={selectedValue}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Form.Control>
      </Form.Group>
      </div>
    );
  };
  
  export default ComboBox;
  

  
  