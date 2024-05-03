import { Link } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import { useUser } from './UserContext';
import Axios from "axios";
import { useState, useEffect } from "react";
import { Card, Row, Col } from 'react-bootstrap';

function SolicitudesaAmigos() {
  const { user } = useUser();
  const [Solicitudes, setsolicitudes] = useState([]);

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const año = date.getFullYear();

    return `${dia < 10 ? '0' + dia : dia}-${mes < 10 ? '0' + mes : mes}-${año}`;
  }

  const getClienteSolicitudes = () => {
    const data = user.idCliente; 
    console.log('Valor recibido:', data);
    Axios.get("http://localhost:3001/solicitudescliente", {
      params: {
        id : data
      }
    }).then((response) => {
      console.log(response.data);
      // Formatear las fechas antes de establecer las solicitudes
      const solicitudesFormateadas = response.data.map(solicitud => ({
        ...solicitud,
        fecha: formatearFecha(solicitud.fecha)
      }));
      setsolicitudes(solicitudesFormateadas);
    }).catch((error) => {
      console.error('Error al obtener el Solicitudes del cliente:', error);
    });
  }

  useEffect(() => {
    getClienteSolicitudes();
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ color: 'white', textAlign: 'center' }}>Solicitudes a Amigos</h1>
      <div className="container">
        <Row className="justify-content-center">
          {Solicitudes.map((solicitud, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Solicitud Alquiler Amigo</Card.Title>
                  <Card.Text style={{ textAlign: 'left' }}>
                    Amigo: {solicitud.Nombre} {solicitud.Apellido}<br />
                    Turno: {solicitud.Turno}<br />
                    Horas: {solicitud.horas}<br />
                    Fecha: {solicitud.fecha}<br />
                    Ubicación: {solicitud.ubicacion}<br />
                    Motivo: {solicitud.motivoAlquiler}<br />
                    Total: {solicitud.total}
                  </Card.Text>
                  {/*<Button variant="primary">Ver Detalles</Button>*/}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default SolicitudesaAmigos;
