import React, { useState,useRef } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import './DragAndDropImage.css';
import { Link } from 'react-router-dom';

const DragAndDropImage = ({ Nombre, Apellido, CorreoElectronico, Password, fechaNacimiento, Genero, seleccionPrecio, aboutMe }) => {
  console.log(Nombre, Apellido, CorreoElectronico, Password, fechaNacimiento, Genero, seleccionPrecio, aboutMe )
  const [images, setImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showMaxImagesAlert, setShowMaxImagesAlert] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const MAX_IMAGES = 5;
  const resizeImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function () {
          const canvas = document.createElement('canvas');
          canvas.width = 286;
          canvas.height = 180;
  
          const ctx = canvas.getContext('2d');
  
          // Calcular la escala para mantener la relación de aspecto
          const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
          const newWidth = img.width * scale;
          const newHeight = img.height * scale;
  
          // Calcular la posición para centrar la imagen
          const offsetX = (canvas.width - newWidth) / 2;
          const offsetY = (canvas.height - newHeight) / 2;
  
          // Dibujar la imagen redimensionada en el lienzo
          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  
          // Convertir el lienzo a un blob y resolver la promesa con el blob resultante
          canvas.toBlob((blob) => {
            resolve(blob);
          }, file.type);
        };
        img.onerror = function (error) {
          reject(error);
        };
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  };
  // Función handleDrop para manejar el evento de soltar las imágenes
  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
  
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
  
    if (images.length + imageFiles.length > MAX_IMAGES) {
      setShowMaxImagesAlert(true);
      return;
    }
  
    try {
      const resizedImages = await Promise.all(imageFiles.map(file => resizeImage(file)));
      const imageData = resizedImages.map(blob => ({
        imageUrl: URL.createObjectURL(blob),
        id: Math.random().toString(36).substr(2, 9) // Generar un ID único para la imagen
      }));
      setImages(prevImages => [...prevImages, ...imageData]);
    } catch (error) {
      console.error("Error al redimensionar imágenes:", error);
    }
  };

  const handleFileSelect = async (e) => {
    fileInputRef.current.click();
    const files = Array.from(e.target.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
  
    if (images.length + imageFiles.length > MAX_IMAGES) {
      setShowMaxImagesAlert(true);
      return;
    }
  
    try {
      const resizedImages = await Promise.all(imageFiles.map(file => resizeImage(file)));
      const imageData = resizedImages.map(blob => ({
        imageUrl: URL.createObjectURL(blob),
        id: Math.random().toString(36).substr(2, 9) // Generar un ID único para la imagen
      }));
      setImages(prevImages => [...prevImages, ...imageData]);
    } catch (error) {
      console.error("Error al redimensionar imágenes:", error);
    }
  };

  
  const handleImageRemove = (idToRemove) => {
    setImages(prevImages => prevImages.filter(image => image.id !== idToRemove));
  };
  
  
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true); // Cuando se arrastra sobre el área de drop, activamos el estado de arrastre
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false); // Cuando se sale del área de drop, desactivamos el estado de arrastre
  };

  

  const handleSaveImages = () => {
    // Aquí podrías enviar las imágenes al servidor para guardarlas
    console.log("Imágenes guardadas:", images);
    // Luego podrías limpiar el estado de las imágenes
    setImages([]);
  };

  const handleCancel = () => {
    // Limpiar el estado de las imágenes
    setImages([]);
  };

  return (
    <Container>
      <form className='form-subirImagen'>
      <h1>Registrar Amigo Rentable</h1>
      <h3 style={{ textAlign: 'left' }}>Registrar Fotos para el perfil Amigo</h3>
      <Row>
        <Col>
          <div
            className={`drag-drop-container d-flex flex-wrap justify-content-center ${isDragging ? 'dragging-over' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            {images.map((image, index) => (
              <div key={image.id} className="image-container">
                <img
                  src={image.imageUrl}
                  alt="Dropped"
                />
                <button
                  className="btn btn-danger btn-sm remove-button"
                  onClick={() => handleImageRemove(image.id)}
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
            onChange={handleFileSelect}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-center">
          <Link to="/RegistrarInteresesAmigo">
          <Button variant="secondary" className="ml-2 custom-cancel-button" onClick={handleCancel}>Volver</Button>
          </Link>
          <Link to="/RegistrarHorarioAmigo" state={
            {
              data: {
                Nombre,
                Apellido,
                CorreoElectronico,
                Password,
                fechaNacimiento,
                Genero,
                seleccionPrecio,
                aboutMe,
                images
              }
            }}>
          <Button variant="primary" className="custom-next-button" onClick={handleSaveImages}>Siguiente</Button>
          </Link>
        </Col>
      </Row>
      </form>

      

      {/* Modal de alerta archivos que no son Imagenes*/}
      <Modal show={showAlert} onHide={() => setShowAlert(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Alerta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Solo se pueden subir imágenes.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAlert(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
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

export default DragAndDropImage;
