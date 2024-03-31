import React from 'react';
import Button from 'react-bootstrap/Button';
import './BotonBuscar.css';

const BotonBuscar = ({ onClick }) => {
  return (
    <div className='EditarBotonGuardar'>
    <Button variant="primary" onClick={onClick}>
      Buscar Amigo
    </Button>
    </div>
  );
};

export default BotonBuscar;
