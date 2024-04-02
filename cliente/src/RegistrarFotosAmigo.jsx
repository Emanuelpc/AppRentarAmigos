import Navbar from "./Componentes/Navbar"
import './RegistrarFotosAmigo.css';
import {  Link } from 'react-router-dom';
import React, { useState } from 'react';

function RegistrarFotosAmigo(props) {
  const [droppedItems, setDroppedItems] = useState([]);
  const [backgroundImages, setBackgroundImages] = useState(true);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const validFiles = [];
    for (let i = 0; i < files.length && i < 4; i++) {
      if (files[i].type.startsWith('image/')) {
        validFiles.push(files[i]);
      }
    }
    const droppedImages = validFiles.map((file) => ({
      id: Date.now(),
      name: file.name,
      src: URL.createObjectURL(file),
    }));
    setDroppedItems([...droppedItems, ...droppedImages]);
    setBackgroundImages(false); // Cambia el estado para indicar que ya no hay imágenes de fondo
  };

  return (
    <div>
      <Navbar/>
    <h1>Subir foto de perfil(*)</h1>
    <h5>Sube al menos 1 foto a 4</h5>
    <div
        className={`dropped-items-container ${backgroundImages ? 'with-background' : ''}`}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {droppedItems.reduce((rows, item, index) => {
          if (index % 2 === 0) rows.push([]);
          rows[rows.length - 1].push(
            <div key={item.id} className={`dropped-item ${index >= 4 ? 'hidden' : ''}`}>
              <img src={item.src} alt={item.name} />
            </div>
          );
          return rows;
        }, []).map((row, index) => (
          <div key={index} className="dropped-items-row">
            {row}
          </div>
        ))}
      </div>
          <div>
            <Link to ="/RegistrarInteresesAmigo">
                <button class = "btn-1">Volver</button>
            </Link>
             <Link to ="/RegistrarHorarioAmigo">
                <button class = "btn-2">Siguiente</button>
            </Link>
          </div>
        </div>
  );
}
export default RegistrarFotosAmigo;
