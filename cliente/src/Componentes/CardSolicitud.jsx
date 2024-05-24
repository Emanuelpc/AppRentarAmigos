import { Button, Card, Modal } from 'react-bootstrap';
import Axios from "axios";
import React, { useState } from 'react';

const CardSolicitud = ({ solicitud, reloadSolicitudes }) => {
    const [modalText, setModalText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idSolicitudAceptar, setIdSolicitudAceptar] = useState(null);

    const openModal = (text, id) => {
        setModalText(text);
        setIdSolicitudAceptar(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const aceptarSolicitud = (id, Aceptar) => {
        Axios.post("https://deployado.vercel.app/aceptarsolicitud", {
            id: id,
            Aceptar: Aceptar
        })
            .then(response => {
                console.log("Datos editados exitosamente:", response.data);
                reloadSolicitudes();
            })
            .catch(error => {
                console.error("Error al editar los datos:", error);
            });
    };

    const rechazarSolicitud = (id) => {
        Axios.post("https://deployado.vercel.app/rechazarsolicitud", {
            id: id
        })
            .then(response => {
                console.log("Solicitud rechazada correctamente:", response.data);
                reloadSolicitudes();
            })
            .catch(error => {
                console.error("Error al rechazar la solicitud:", error);
            });
    };

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#f0f0f0' }}>
                <Card.Body>
                    <Card.Title style={{ fontSize: '18px', fontFamily: 'Arial, sans-serif' }}>Solicitud Alquiler Amigo</Card.Title>
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
                        onClick={() => openModal('¿Está seguro de aceptar la solicitud?', solicitud.idSolicitudAmigo)}
                    >
                        Aceptar
                    </Button>
                    <Button
                        variant="danger"
                        style={{ marginRight: '10px' }}
                        onClick={() => openModal('¿Está seguro de rechazar la solicitud?', solicitud.idSolicitudAmigo)}
                    >
                        Rechazar
                    </Button>
                </Card.Body>
            </Card>
            <Modal
                show={isModalOpen}
                onHide={closeModal}
                centered
                className="modal-dialog-scrollable"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => { aceptarSolicitud(idSolicitudAceptar, 1); closeModal(); }}>
                        Sí,Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CardSolicitud;
