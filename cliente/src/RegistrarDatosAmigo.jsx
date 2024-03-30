import { useState } from "react";
import Navbar from "./Componentes/Navbar";
import './RegistrarDatosAmigo.css';
import Axios from "axios";
<<<<<<< HEAD
import {  Link } from 'react-router-dom';
=======

>>>>>>> e5fc7ee24445ea0e639b2f54490c7fb25b911841


function RegistrarDatosAmigo() {

  const[Nombre,setNombre] = useState("");

  const[Apellido,setApellido] = useState("");

  const[CorreoElectronico,setCorreoElectronico] = useState("");

  const[Password, setPassword] = useState("");

  const[fechaNacimiento, setfechaNacimiento] = useState(""); 

  const[Genero, setGenero] = useState("Masculino")
  
  function handleChange(e) {
    console.log(e.target.va);
    setGenero(e.target.value);
  }

  const add = () => {
    Axios.post("http://localhost:3001/create",{
      Nombre:Nombre,
      Apellido:Apellido,
      CorreoElectronico:CorreoElectronico,
      Passwod:Password,
      fechaNacimiento:fechaNacimiento,
      Genero:Genero
    }).then(()=>{
      alert("Amigo registrado");
    });
  }

  return (
      <div >
        <Navbar/>
      
        <form class = "border3">
          <h1>Crear Perfil alqui-amigo</h1>
          <h3>Nombre(*)</h3>
          <input type="text" onChange={(event)=> setNombre(event.target.value)}required="" /> 
          <br></br>

          <h3>Apellidos(*)</h3>
          <input type="text" onChange={(event)=> setApellido(event.target.value)} required="" />
          <br></br>

          <h3>Correo Electronico(*)</h3>
          <input type="email" onChange={(event)=> setCorreoElectronico(event.target.value)} required="" />
          <br></br>

          <h3>Contraseña(*)</h3>
          <input type="password" onChange={(event)=> setPassword(event.target.value)} required=""/>
          <br></br>

          <h3>Fecha de nacimiento(*)</h3>
          <input type="date" onChange={(event)=> setfechaNacimiento(event.target.value)} required="" />
          <br></br>

          <h3>Género(*)</h3>
            <div className="RadioButtons">
              <input type="radio" name="Genero" id="Masculino" value="Masculino" onChange={handleChange} required/>  
              <label htmlFor="masculino">Masculino</label>
              <input type="radio" name="Genero" id="Femenino" value="Femenino" onChange={handleChange} />
              <label htmlFor="femenino">Femenino</label>
              <input type="radio" name="Genero" id="Otro" value="Otro" onChange={handleChange}/>
              <label htmlFor="otro">Otro</label>
            </div>
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
<<<<<<< HEAD
=======
              <button class = "btn-1">Cancelar</button>
              <button class = "btn-2">Siguiente</button>
              <button onClick={add} > Registrar</button>
>>>>>>> e5fc7ee24445ea0e639b2f54490c7fb25b911841
              <br></br>
        </form>
        <div>
          <Link to ="/BuscadorAmigo">
              <button class = "btn-1">Cancelar</button>
          </Link>
          <Link to ="/RegistrarInteresesAmigo">
              <button class = "btn-2">Siguiente</button>
          </Link>
      </div>
      </div> 
    );
  }
  
  export default RegistrarDatosAmigo;
