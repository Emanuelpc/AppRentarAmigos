import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardAmigo = ({ titulo, descripcion, imagenUrl }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagenUrl} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary">Ver perfil</Button>
      </Card.Body>
    </Card>
  );
};

export default CardAmigo;


