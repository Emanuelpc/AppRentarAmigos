import Navbar from "./Componentes/Navbar"
import './RegistrarFotosAmigo.css';
import { useCallback } from "react";
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {  Link } from 'react-router-dom';

function RegistrarFotosAmigo() {
  return(
      <div>
        <Navbar/>
      <h1>fotos</h1>
      <div>
          <Link to ="/RegistrarInteresesAmigo">
              <button class = "btn-1">Volver</button>
          </Link>
          <Link to ="/RegistrarHorarioAmigo">
              <button class = "btn-2">Siguiente</button>
          </Link>
      </div>
      </div>
  )
}
export default RegistrarFotosAmigo;