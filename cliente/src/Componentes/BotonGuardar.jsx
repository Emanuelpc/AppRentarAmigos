import React from 'react';
import Button from 'react-bootstrap/Button';
import './BotonGuardar.css';

const BotonGuardar = ({ onClick }) => {
  return (
    <div className='EditarBotonGuardar'>
    <Button variant="primary" onClick={onClick}>
      Guardar
    </Button>
    </div>
  );
};

export default BotonGuardar;