import Navbar from "./Componentes/Navbar";
import "./RegistrarUbicacionAmigo.css"

function RegistrarUbicacionAmigo() {
    return (
      <div>
        <Navbar/>
        
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
      </div>
    );
}
  export default RegistrarUbicacionAmigo;
  