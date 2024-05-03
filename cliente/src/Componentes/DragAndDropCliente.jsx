import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import './DragAndDropCliente.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DragAndDropCliente = ({ Nombre, Apellido, CorreoElectronico, Password, fechaNacimiento, Genero, seleccionPrecio }) => {
  console.log(Nombre, Apellido, CorreoElectronico, Password, fechaNacimiento, Genero, seleccionPrecio);
  const [images, setImages] = useState([]);
  const [showMaxImagesAlert, setShowMaxImagesAlert] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDraggedImages, setHasDraggedImages] = useState(false); // Nuevo estado
  const fileInputRef = useRef(null);
  const MAX_IMAGES = 5;


  const [hasDraggedImage, setHasDraggedImage] = useState(false); // Estado para controlar si se ha arrastrado alguna imagen
  const [hasUploadedImages, setHasUploadedImages] = useState(false); // Estado para controlar si se han subido imágenes
  const [showBackground, setShowBackground] = useState(true);

  // Función para subir una imagen a Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'Presets_react');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dgaq8kh0o/image/upload',
        data
      );
      return response.data.secure_url;
    } catch (error) {
      console.error('Error al subir imagen a Cloudinary:', error);
      throw error;
    }
  };

  // Función handleDrop para manejar el evento de soltar las imágenes
  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
setHasDraggedImage(true);
setShowBackground(false);
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));

    if (images.length + imageFiles.length > MAX_IMAGES) {
      setShowMaxImagesAlert(true);
      return;
    }

    try {
      const uploadedImageURLs = await Promise.all(imageFiles.map(uploadImageToCloudinary));
      setImages((prevImages) => [...prevImages, ...uploadedImageURLs]);
      setHasDraggedImages(true); // Actualizar estado
    } catch (error) {
      console.error('Error al subir imágenes a Cloudinary:', error);
    }
  };

  const handleFileSelect = async (e) => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = async (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));

    if (images.length + imageFiles.length > MAX_IMAGES) {
      setShowMaxImagesAlert(true);
      return;
    }

    try {
      const uploadedImageURLs = await Promise.all(imageFiles.map(uploadImageToCloudinary));
      setImages((prevImages) => [...prevImages, ...uploadedImageURLs]);
      setHasDraggedImages(true); // Actualizar estado
    } catch (error) {
      console.error('Error al subir imágenes a Cloudinary:', error);
    }
  };

  const handleImageRemove = (imageURLToRemove) => {
    setImages((prevImages) => prevImages.filter((image) => image !== imageURLToRemove));
    setHasDraggedImages(images.length > 1); // Actualizar estado
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSaveImages = () => {
    console.log('Imágenes guardadas:', images);
    // Aquí podrías enviar las URLs de las imágenes al servidor para guardarlas
    // Luego podrías limpiar el estado de las imágenes
    setImages([]);
  };

  const handleCancel = () => {
    // Limpiar el estado de las imágenes
    setImages([]);
  };

  const handleNextButtonClick = () => {
    // Manejar la acción del botón "Siguiente"
    console.log('Botón Siguiente presionado');
  };

  return (
    <Container>
      <form className='form-subirImagen'>
        <h1>Registrar Cliente</h1>
        <h3 style={{ textAlign: 'left' }}>Registrar Fotos para el perfil Cliente</h3>
        <Row>
          <Col>
          <div
              className={`drag-drop-container d-flex flex-wrap justify-content-center ${isDragging ? 'dragging-over' : ''} ${hasDraggedImage ? 'has-dragged-image' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
            >
              {images.map((imageUrl, index) => (
                <div key={index} className="image-container">
                  <img
                    src={imageUrl}
                    alt="Dropped"
                    style={{ maxWidth: '300px', maxHeight: '300px' }}
                  />
                  <button
                    className="btn btn-danger btn-sm remove-button"
                    onClick={() => handleImageRemove(imageUrl)}
                  >
                    X
                  </button>
                </div>
              ))}
              {images.length === 0 && <p>Arrastra y suelta imágenes aquí</p>}
            </div>
            {/* Botón personalizado para seleccionar archivos */}
            <Button variant="primary" onClick={handleFileSelect}>Seleccionar Archivos</Button>
            {/* Input de archivo oculto */}
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: 'none' }}
              multiple
              accept="image/*" // Esto limita la selección de archivos solo a imágenes
              onChange={handleFileInputChange}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <Link to="/RegistrarDatosCliente">
              <Button variant="secondary" className="ml-2 custom-cancel-button" onClick={handleCancel}>Volver</Button>
            </Link>
            {hasDraggedImages ? (
              <Link to="/RegistrarUbicacionCliente" state={
                {
                  data: {
                    Nombre,
                    Apellido,
                    CorreoElectronico,
                    Password,
                    fechaNacimiento,
                    Genero,
                    seleccionPrecio,
                    images
                  }
                }}>
                <Button variant="primary" onClick={handleNextButtonClick} className="custom-next-button">Siguiente</Button>
              </Link>
            ) : (
              <Button variant="primary" disabled className="custom-next-button">Siguiente</Button>
            )}
          </Col>
        </Row>
      </form>

      {/* Modal de alerta Maximo de Imagenes 4*/}
      <Modal show={showMaxImagesAlert} onHide={() => setShowMaxImagesAlert(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Alerta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          No se pueden agregar más de 5 Fotos.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMaxImagesAlert(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DragAndDropCliente;