import Navbar from "./Componentes/Navbar";
<<<<<<< HEAD
import {  Link } from 'react-router-dom';
=======
import "./RegistrarUbicacionAmigo.css"

>>>>>>> aed2be3e0c98d94eca721b3d7f8ae180ca8bef01
function RegistrarUbicacionAmigo() {
    return (
      <div>
        <Navbar/>
<<<<<<< HEAD
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
=======
        
      <h1>Seleccionar tu ubicacion</h1>
      <br></br>
          <div className="Form">
                <form>
                  <h3>Seleccionar Departamento(*)</h3>
                    <select name="Departamento" id="Departamento">
                    <option value="1">Santa Cruz</option>
                    <option value="2">Cochabamba</option>
                    <option value="3">La Paz</option>
                    <option value="4">Oruro</option>
                    <option value="5">Tarija</option>
                    <option value="6">Potosi</option>
                    <option value="7">Pando</option>
                    <option value="8">Sucre</option>
                    <option value="9">Beni</option>
                  </select>
                  <br></br>
                  <h3>Seleccionar Ciudad(*)</h3>

            




            </form>
          </div>
>>>>>>> aed2be3e0c98d94eca721b3d7f8ae180ca8bef01
      </div>
    );
}
  export default RegistrarUbicacionAmigo;