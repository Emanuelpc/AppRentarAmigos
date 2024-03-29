
import React from "react";
import Navbar from "./Componentes/Navbar";
import './RegistrarInteresesAmigo.css';
import {  Link } from 'react-router-dom';

function RegistrarInteresesAmigo() {
  return(
    <div>
      <Navbar/>
      <div>
          <Link to ="/RegistrarInteresesAmigo">
              <button class = "btn-1">Volver</button>
          </Link>
          <Link to ="/RegistrarFotosAmigo">
              <button class = "btn-2">Siguiente</button>
          </Link>
      </div>
    </div>
      
    );
  }
  
  export default RegistrarInteresesAmigo;