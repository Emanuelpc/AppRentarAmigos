import Navbar from "./Componentes/Navbar"
import './RegistrarFotosAmigo.css';
import { useCallback } from "react";
import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {  Link } from 'react-router-dom';

function RegistrarFotosAmigo() {
  const onDrop = useCallback(acceptedFiles => {
    //Hacer algo con los archivos
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <form>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
          
    </div>
    <div>
      <Link to ="/RegistrarInteresesAmigo">
              <button class = "btn-1">Volver</button>
          </Link>
          <Link to ="/RegistrarHorarioAmigo">
              <button class = "btn-2">Siguiente</button>
          </Link>
    </div>
    </form>
  )
  }
  export default RegistrarFotosAmigo;