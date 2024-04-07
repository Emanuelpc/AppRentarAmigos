import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';

const CardAmigo = ({ titulo, descripcion, imagenUrl, nombre, apellido, edad, genero, id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagenUrl} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Link to="../PerfilAmigo" state={{data: {nombre, apellido, edad, genero, descripcion, id}}}>
        <Button variant="primary">Ver perfil</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default CardAmigo;





