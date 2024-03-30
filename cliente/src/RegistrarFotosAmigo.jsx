import Navbar from "./Componentes/Navbar"
import './RegistrarFotosAmigo.css';
import {  Link } from 'react-router-dom';

function RegistrarFotosAmigo(props) {
  return (
    <div>
      <Navbar/>
    <h1>Seleccionar tu foto</h1>

            <Link to ="/RegistrarInteresesAmigo">
                <button class = "btn-1">Volver</button>
            </Link>
            <Link to ="/RegistrarUbicacionAmigo">
                <button class = "btn-2">Siguiente</button>
            </Link>
        </div>
  );
}
export default RegistrarFotosAmigo;