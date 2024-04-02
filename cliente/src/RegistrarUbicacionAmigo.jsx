import Navbar from "./Componentes/Navbar";
import "./RegistrarUbicacionAmigo.css"
import {  Link } from 'react-router-dom';
function RegistrarUbicacionAmigo() {

    return (
      <div>
          <Navbar/>        
          <h1>Seleccionar tu ubicacion</h1>
          <div>
                <form className="Form">
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
                  <select name="Ciudad" id="Ciudad">
                    <option value="1">Bolivia</option>
                  </select>
                  <h3>Terminos y Condiciones(*)</h3>
                  <textarea
                      readOnly
                      rows={5}
                      cols={50}
                  />
                  <div>
                  <input
                      type="radio"
                      id="accept"
                      name="option"
                      value="accept"
                      //checked={selectedOption === 'accept'}
                     // onChange={handleOptionChange}
                  />
                  <label htmlFor="accept">Aceptar Términos y Condiciones</label>
                  </div>
                  <div>
                  <input
                      type="radio"
                      id="accept"
                      name="option"
                      value="accept"
                      //checked={selectedOption === 'accept'}
                     // onChange={handleOptionChange}
                  />
                  <label htmlFor="accept">Aceptar Politicas de Privacidad</label>
                  </div>
            </form>
            <div>  
          <Link to ="/RegistrarHorarioAmigo">
              <button class = "btn-1">Volver</button>
          </Link>
          <Link to ="/BuscadorAmigo">
              <button class = "btn-2">Registrar Perfil</button>
          </Link>
      </div>
          </div>
      </div>
    );
  }
  
  export default RegistrarUbicacionAmigo;