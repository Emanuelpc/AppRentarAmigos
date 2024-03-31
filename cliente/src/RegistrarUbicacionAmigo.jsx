import ComboBox from "./Componentes/ComboBox";
import Navbar from "./Componentes/Navbar";
function RegistrarUbicacionAmigo() {
  return (
    <div>
      <Navbar />
      <h1>Selecionar tu Ubicacion</h1>
      <br />
      <h3>Seleccionar Departamento(*)</h3>
      <select name="Departamentos" id="departamentos">
        <option value="Cochabamba">Cochabamba</option>
        <option value="La Paz">La Paz</option>
        <option value="Santa cruz">Santa Cruz</option>
        <option value="Oruro">Oruro</option>
        <option value="Potosi">Potosi</option>
        <option value="Chuquisaca">Chuquisaca</option>
        <option value="Tarija">Tarija</option>
        <option value="Beni">Beni</option>
        <option value="Pando">Pando</option>
      </select>
      <h3>Selecionar Ciudad(*)</h3>
      <select name="Ciudades" id="Ciudades">
        <option value="El Alto">El Alto</option>
        <option value="viacha">Viacha</option>
        <option value="Achacachi">Achacachi</option>
        <option value="muchos">Otros</option>
        <br />
        <h3>Terminos y condiciones</h3>
        <br />
        <div className="Checkbox">
          <form >
          <input type="checkbox" id="AceptaTerminos" name="AceptaTerminos" value="AceptaTerminos"/>
            <label for="AceptaTerminos">Acepta terminos y condiciones</label>
            <input type="checkbox" id="AceptaPoliticas" name="AceptaPoliticas" value="AceptaPoliticas"/>
            <label for="AceptaPoliticas">Acepta politicas de privacidad</label>
          </form> 
          <button class = "btn-1">Volver</button>
              <button class = "btn-2">Registrar Perfil</button>
        </div>
      </select>
      <div className="Checkbox">
          <form >
          <input type="checkbox" id="AceptaTerminos" name="AceptaTerminos" value="AceptaTerminos"/>
            <label for="AceptaTerminos">Acepta terminos y condiciones</label>
            <br />
            <input type="checkbox" id="AceptaPoliticas" name="AceptaPoliticas" value="AceptaPoliticas"/>
            <label for="AceptaPoliticas">Acepta politicas de privacidad</label>
          </form> 
        <br />
        <br />
      
          <button class = "btn-1">Volver</button>
              <button class = "btn-2">Registrar Perfil</button>
        </div>
    </div>
  );
}

export default RegistrarUbicacionAmigo;
