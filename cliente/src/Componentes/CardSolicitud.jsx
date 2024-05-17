import { Button,Card} from 'react-bootstrap';
import Axios from "axios";
import Modal from 'react-bootstrap/esm/Modal';
import React, { useState } from 'react';

const CardSolicitud = ({solicitud,reloadSolicitudes}) => {
    const [modalText, setModalText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (text) => {
        setModalText(text);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const aceptarsolicitud = (id, Aceptar) => {
        Axios.post("https://xdsiu.vercel.app/aceptarsolicitud",{
            id:id,
            Aceptar:Aceptar
        })
          .then(response => {
            console.log("Datos editados exitosamente:", response.data);
            reloadSolicitudes();
          })
          .catch(error => {
            console.error("Error al editar los datos:", error);
          });
      };
  return (
    <div>
    <Card style={{ width: '18rem', backgroundColor: '#f0f0f0' }}>
        <Card.Body>
            <Card.Title style={{  fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>Solicitud Alquiler Amigo</Card.Title>
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <Card.Img
                variant="top"
                src={solicitud.foto}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
                <Card.Text style={{ textAlign: 'left', fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>
                Cliente: {solicitud.nombreCliente} {solicitud.apellidoCliente}<br />
                Turno: {solicitud.Turno}<br />
                Horas: {solicitud.horas}<br />
                Fecha: {solicitud.fecha}<br />
                Ubicación: {<Button variant="info" style={{ margin: '5px' }} onClick={() => openModal(`Ubicación: ${solicitud.ubicacion}`)}>
                            Ver Ubicacion
                            </Button>}<br />
                Motivo: {<Button variant="info" style={{ margin: '5px' }} onClick={() => openModal(`Ubicación: ${solicitud.motivoAlquiler}`)}>
                            Ver Motivo
                            </Button>}<br />
                Total: {solicitud.total}
                </Card.Text>
            <Button 
            variant="primary" 
            style={{ marginRight: '10px' }} 
            onClick={() => aceptarsolicitud(solicitud.idSolicitudAmigo, 1)}
            >
            Aceptar 
            </Button>
            <Button variant="danger" style={{ marginRight: '10px' }}>Rechazar</Button>
        </Card.Body>
    </Card>
    <Modal 
    show={isModalOpen} 
    onHide={closeModal}
    centered // Esta propiedad centra el modal verticalmente
    className="modal-dialog-scrollable" // Esta clase permite hacer scroll en el modal
    >
        <Modal.Header closeButton>
            <Modal.Title>Detalles del Alquiler</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
            Cerrar
            </Button>
        </Modal.Footer>
    </Modal>
    </div>
  );
};
export default CardSolicitud;
