import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CardAmigo = ({ titulo, ubicacion, descripcion, imagenUrl, nombre, apellido, edad, genero, id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={imagenUrl}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{ubicacion}</Card.Text>
        <Link to="../PerfilAmigo" state={{ data: { nombre, apellido, edad, genero, descripcion, id } }}>
          <Button variant="primary">Ver perfil</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default CardAmigo;




