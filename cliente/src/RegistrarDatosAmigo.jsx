import { useState } from "react";
import Navbar from "./Componentes/Navbar";
function RegistrarDatosAmigo() {

  const[nombre,setNombre] = useState("");

  const[apellidos,setApellidos] = useState("");

  const[email,setEmail] = useState("");

  const[contraseña, setContraseña] = useState("");

  const[fecha_nacimiento, setFecha_Nacimiento] = useState(""); 

  const[genero, setGenero] = useState("Masculino")
  
  function handleChange(e) {
    console.log(e.target.va);
    setGenero(e.target.value);
  }

  const mostrarDatos = ()=> {  // llamar al atributo y ve como se esta guardando el dato
    alert(nombre);
  }
  return (
      <div>
        <Navbar/>
      <h1>Crear Perfil alqui-amigo</h1>
        <form>

          <h3>Nombre(*)</h3>
          <input type="text" onChange={(event)=> setNombre(event.target.value)}required="" /> 
          <br></br>

          <h3>Apellidos(*)</h3>
          <input type="text" onChange={(event)=> setApellidos(event.target.value)} required="" />
          <br></br>

          <h3>Correo Electronico(*)</h3>
          <input type="email" onChange={(event)=> setEmail(event.target.value)} required="" />
          <br></br>

          <h3>Contraseña(*)</h3>
          <input type="password" onChange={(event)=> setContraseña(event.target.value)} required=""/>
          <br></br>

          <h3>Fecha de nacimiento(*)</h3>
          <input type="date" onChange={(event)=> setFecha_Nacimiento(event.target.value)} required="" />
          <br></br>

          <h3>Género(*)</h3>
          <input type="radio" name="Genero" id="Masculino" value="Masculino" onChange={handleChange} required/>  
          <label htmlFor="masculino">Masculino</label>
          <input type="radio" name="Genero" id="Femenino" value="Femenino" onChange={handleChange} />
          <label htmlFor="femenino">Femenino</label>
          <input type="radio" name="Genero" id="Otro" value="Otro" onChange={handleChange}/>
          <label htmlFor="otro">Otro</label>
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
          <br></br>


          <button onClick={mostrarDatos}>Probar</button> //Es para ver como se estan guardando los datos

        </form>
       
      </div> 
    );
  }
  
  export default RegistrarDatosAmigo;