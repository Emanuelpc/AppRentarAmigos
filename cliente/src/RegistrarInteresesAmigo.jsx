
import React from "react";
import Navbar from "./Componentes/Navbar";
import './RegistrarInteresesAmigo.css';
import {  Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

function RegistrarInteresesAmigo() {
  const intereses = [
    { id: "musica", label: "Música" },
    { id: "videojuegos", label: "Videojuegos" },
    { id: "idiomas", label: "Idiomas" },
    { id: "comida", label: "Comida" },
    { id: "mascotas", label: "Mascotas" },
    { id: "arte", label: "Arte" },
    { id: "deporte", label: "Deporte" },
    { id: "turismo", label: "Turismo" },
    { id: "cocinar", label: "Cocinar" },
    { id: "anime", label: "Anime" },
    { id: "bailar", label: "Bailar" },
    { id: "fotografia", label: "Fotografía" },
    { id: "compras", label: "Compras" },
    { id: "comic-manga", label: "Cómic/Manga" },
    { id: "cine", label: "Cine" },
    { id: "libros", label: "Libros" },
    { id: "fiestas", label: "Fiestas" },
    { id: "jardineria", label: "Jardinería" }
  ];
  
  const gruposIntereses = [
    intereses.slice(0, 6),
    intereses.slice(6, 12),
    intereses.slice(12)
  ];
  
    const [checkedIntereses, setCheckedIntereses] = useState(() => {
      const savedIntereses = localStorage.getItem('checkedIntereses');
      return savedIntereses ? JSON.parse(savedIntereses) : {};
    });
  
    const [mensaje, setMensaje] = useState(() => {
      const savedMensaje = localStorage.getItem('mensaje');
      return savedMensaje || '';
    });
  
    useEffect(() => {
      localStorage.setItem('checkedIntereses', JSON.stringify(checkedIntereses));
    }, [checkedIntereses]);
  
    useEffect(() => {
      localStorage.setItem('mensaje', mensaje);
    }, [mensaje]);
  
    const handleCheckboxChange = (e) => {
      const { id, checked } = e.target;
      setCheckedIntereses(prevState => ({
        ...prevState,
        [id]: checked
      }));
    };

    const handleMensajeChange = (e) => {
      const { value } = e.target;
      setMensaje(value);
    };
  
  return(
    <div>
      <Navbar/>
      <h1>Intereses del Amigo(*)</h1>
        <h5>selecciona al menos 3</h5>
      <form>
      <div className="border3">
      {gruposIntereses.map((grupo, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          {grupo.map(interes => (
            <div key={interes.id} style={{ marginRight: '40px', margin: '8px' }}>
              <input
                type="checkbox"
                id={interes.id}
                checked={checkedIntereses[interes.id] || false}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={interes.id}>{interes.label}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
      <h1>ACERCA DE MI(*)</h1>
      <textarea
        id="mensaje"
        name="mensaje"
        rows="4"
        cols="60"
        value={mensaje}
        onChange={handleMensajeChange}
      />
      <div>
          <Link to ="/RegistrarDatosAmigo">
              <button class = "btn-1">Volver</button>
          </Link>
          <Link to ="/RegistrarFotosAmigo">
              <button class = "btn-2">Siguiente</button>
          </Link>
      </div>
      </form>
    </div>   
    );
  }
  
  export default RegistrarInteresesAmigo;
  