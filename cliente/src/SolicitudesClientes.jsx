import { Link } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBRadio, MDBBtn } from 'mdb-react-ui-kit';
import { useUser } from './UserContext';
import { useState, useEffect } from "react";
import Axios from "axios";
import { Button, Row, Col ,Card} from 'react-bootstrap';
import CardSolicitud from "./Componentes/CardSolicitud";

function SolicitudesClientes() {
  const { user } = useUser();
  const [Solicitudes, setsolicitudes] = useState([]);

  console.log(user);




  const getAmigoSolicitudes = () => {
    const data = user.idAmigo; 
    console.log('Valor recibido:', data);
    Axios.get("https://xdsiu.vercel.app/solicitudesamigos", {
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
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const año = date.getFullYear();

    return `${dia < 10 ? '0' + dia : dia}-${mes < 10 ? '0' + mes : mes}-${año}`;
  }

  useEffect(() => {
    getAmigoSolicitudes();
  }, []);

  const reloadSolicitudes = () => {
    getAmigoSolicitudes();
  }
  return (
    <div>
      <Navbar />
      <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="30" xl="30">
                        <MDBCard className="p-3">
                            <MDBCardBody>
                                <h1 >Aceptar Solicitud de Alquiler Cliente </h1>
                                <Row className="justify-content-center">
                                {Solicitudes.map((solicitudactual, index) => (
                                <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                                  <CardSolicitud
                                  solicitud={solicitudactual}
                                  reloadSolicitudes={reloadSolicitudes}
                                  />
                                </Col>
                              ))}
                              </Row>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>      
  );
}

export default SolicitudesClientes;
