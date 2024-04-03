import Navbar from "./Componentes/Navbar";
import './RegistrarHorarioAmigo.css';
import React from "react";
import {  Link ,useLocation} from 'react-router-dom';

function RegistrarHorarioAmigo() {

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio)
  const data = [
    { id: 1, lunes: '', martes: '', miercoles: '',
  jueves:'',viernes:'',sabado:'',domingo:'' },
    { id: 2, lunes: '', martes: '', miercoles: '',
  jueves:'',viernes:'',sabado:'',domingo:'' },
  { id: 3, lunes: '', martes: '', miercoles: '',
  jueves:'',viernes:'',sabado:'',domingo:'' },
  { id: 4, lunes: '', martes: '', miercoles: '',
  jueves:'',viernes:'',sabado:'',domingo:'' },
    // contenedor de datos para la tabla
  ];
    return (
      <div>
        <Navbar/> 
      <h1>Seleccionar Horarios</h1>
      <div class = "border3">
      <h3>Selecciona los dias que tiene disponible</h3>
          <div className="Checkbox">
            <form>
            <input type="checkbox" id="lunes" name="lunes" value="lunes"/>
            <label for="lunes">Lunes</label>

            <input type="checkbox" id="martes" name="martes" value="martes"/>
            <label for="martes"> Martes</label>

            <input type="checkbox" id="miercoles" name="miercoles" value="miercoles"/>
            <label for="miercoles"> Miercoles</label>

            <input type="checkbox" id="jueves" name="jueves" value="jueves"/>
            <label for="jueves"> Jueves</label>

            <input type="checkbox" id="viernes" name="viernes" value="viernes"/>
            <label for="viernes"> Viernes</label>

            <input type="checkbox" id="sabado" name="sabado" value="sabado"/>
            <label for="sabado"> Sabado</label>
    
            <input type="checkbox" id="domingo" name="domingo" value="domingo"/>
            <label for="domingo"> Domingo</label>

            <br></br>
            <br></br> 

            <h3>Seleccionar Turno</h3>
            <div className = "Turnos">
                  <select name="Lunes" id="1">
                    <option selected>Turno</option>
                    <option value="1">Mañana</option>
                    <option value="2">Tarde</option>
                    <option value="3">Noche</option>
                  </select>
    
                  <select name="Martes" id="2">
                  <option selected>Turno</option>
                    <option value="1">Mañana</option>
                    <option value="2">Tarde</option>
                    <option value="3">Noche</option>
                  </select>

                  <select name="Miercoles" id="3">
                  <option selected>Turno</option>
                    <option value="1">Mañana</option>
                    <option value="2">Tarde</option>
                    <option value="3">Noche</option>
                  </select>

                  <select name="Jueves" id="4">
                  <option selected>Turno</option>
                    <option value="1">Mañana</option>
                    <option value="2">Tarde</option>
                    <option value="3">Noche</option>
                  </select>

                  <select name="Viernes" id="5">
                  <option selected>Turno</option>
                    <option value="1">Mañana</option>
                    <option value="2">Tarde</option>
                    <option value="3">Noche</option>
                  </select>

                  <select name="Sabado" id="6">
                  <option selected>Turno</option>
                    <option value="1">Mañana</option>
                    <option value="2">Tarde</option>
                    <option value="3">Noche</option>
                  </select>

                  <select name="Domingo" id="7">
                  <option selected>Turno</option>
                    <option value="1">Mañana</option>
                    <option value="2">Tarde</option>
                    <option value="3">Noche</option>
                  </select>
            </div>
            </form>
            <br></br> 
              <div className="Horarios">
                  <h5>Mañana (5:00 AM - 11:00 AM)</h5>
                  <h5>Tarde (12:00 PM - 8:00 PM)</h5>
                  <h5>Noche (9:00 AM - 1:00 AM)</h5> 
              </div>
          </div>

          <div>
            <br></br>
              <h2>Previsualización del Horario </h2>
              
              <div className="datagrid-container">
                  <table className="datagrid"> 
                  <thead>
                    <tr>
                      <th>Horarios</th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miercoles</th>
                      <th>Jueves</th>
                      <th>Viernes</th>
                      <th>Sabado</th>
                      <th>Domingo</th>
                    </tr>
                  </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.lunes}</td>
              <td>{item.martes}</td>
              <td>{item.miercoles}</td>
              <td>{item.jueves}</td>
              <td>{item.viernes}</td>
              <td>{item.sabado}</td>
              <td>{item.domingo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
        </div>
          <div>
            <Link to ="/RegistrarFotosAmigo">
                <button class = "btn-1">Volver</button>
            </Link>
            <Link to="/RegistrarUbicacionAmigo" state={
            {
              data: {
                Nombre,
                Apellido,
                CorreoElectronico,
                Password,
                fechaNacimiento,
                Genero,
                aboutMe,
                seleccionPrecio
              }
            }}>
                <button class = "btn-2">Siguiente</button>
            </Link>
          </div>
            
          </div>
    );
  }
  
  export default RegistrarHorarioAmigo;