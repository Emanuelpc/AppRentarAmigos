import Navbar from "./Componentes/Navbar";
import {  Link } from 'react-router-dom';
function RegistrarUbicacionAmigo() {
    return (
      <div>
        <Navbar/>
      <h1>Esta es la página de Registrar Ubicacion Amigo</h1>
      <h1>Hola Mundo!!!</h1>
      <div>
          <Link to ="/RegistrarDatosAmigo">
              <button class = "btn-1">Volver</button>
          </Link>
          <Link to ="/BuscadorAmigo">
              <button class = "btn-2">CrearPerfil</button>
          </Link>
      </div>
      </div>
    );
}
  export default RegistrarUbicacionAmigo;