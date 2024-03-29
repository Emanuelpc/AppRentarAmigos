import Navbar from "./Componentes/Navbar";
function RegistrarDatosAmigo() {
    return (

      <div>
        <Navbar/>
      <h1>Crear Perfil alqui-amigo</h1>
        <form>
          <h3>Nombre(*)</h3>
          <input type="text" required="" /> 
          <br></br>
          <h3>Apellidos(*)</h3>
          <input type="text" required="" />
          <br></br>
          <h3>Correo Electronico(*)</h3>
          <input type="email" required="" />
          <br></br>
          <h3>Contraseña(*)</h3>
          <input type="password" required=""/>
          <br></br>
          <h3>Fecha de nacimiento(*)</h3>
          <input type="date" required="" />
          <br></br>
          <h3>Género(*)</h3>
          <input type="radio" value="Masculino" />
          <label for="masculino">Masculino</label>
          <input type="radio" value="Femenino" />
          <label for="femenino">Femenino</label>
          <input type="radio" value="Otro" />
          <label for="otro">Otro</label>
          <br></br>
          <h3>Elige cuánto que te gustaría obtener por hora(*)</h3>
          <select name="tarifa" id="tarifa">
              <option value="ganar10">Quiero ganar 10Bs por hora</option>
              <option value="ganar20">Quiero ganar 20Bs por hora</option>
              <option value="ganar30">Quiero ganar 30Bs por hora</option>
              <option value="ganar40">Quiero ganar 40Bs por hora</option>
              <option value="ganar50">Quiero ganar 50Bs por hora</option>
          </select>
          <br></br>
          <br></br>
          <input type="submit" value="Cancelar" />
          <input type="submit" value="Siguiente" />
        </form>
       
      </div> 
    );
  }
  
  export default RegistrarDatosAmigo;