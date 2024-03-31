import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CheckboxGroupIntereses.css';
const CheckboxGroup = ({ options, selectedOptions, onChange }) => {
  // Divide las opciones en dos arreglos para mostrarlas en dos columnas
  const halfLength = Math.ceil(options.length / 2);
  const optionsLeft = options.slice(0, halfLength);
  const optionsRight = options.slice(halfLength);

  return (
    <div className='EditardivCheckboxGroup'>
    <Form.Group className='EditarTexto'>
    <Form.Label className='EditarTexto'>Intereses</Form.Label>
      <Row>
        <Col>
          {optionsLeft.map((option, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={option.label}
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={onChange}
            />
          ))}
        </Col>
        <Col>
          {optionsRight.map((option, index) => (
            <Form.Check
              key={index + halfLength}
              type="checkbox"
              label={option.label}
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={onChange}
            />
          ))}
        </Col>
      </Row>
    </Form.Group>
    </div>
  );
}; 
  export default CheckboxGroup;
  
  
  