import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CheckboxGroupIntereses.css';

const CheckboxGroup = ({ options, selectedOptions, onChange, columns ,labeltitulo,checkboxClassName}) => {
  // Calcula el número de elementos por columna
  const itemsPerColumn = Math.ceil(options.length / columns);

  // Divide las opciones en el número de columnas especificado
  const columnsData = [];
  for (let i = 0; i < columns; i++) {
    columnsData.push(options.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
  }

  return (
    <div className={`EditardivCheckboxGroup ${checkboxClassName}`}>
      <Form.Group className='EditarTexto'>
        <Form.Label className='EditarTexto'>{labeltitulo}</Form.Label>
        <Row>
          {columnsData.map((column, columnIndex) => (
            <Col key={columnIndex}>
              {column.map((option, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={option.label}
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={onChange}
                  checkboxClassName="custom-checkbox"
                />
              ))}
            </Col>
          ))}
        </Row>
      </Form.Group>
    </div>
  );
};

export default CheckboxGroup;
