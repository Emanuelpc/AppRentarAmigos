import Navbar from "./Componentes/Navbar";
import './RegistrarHorarioAmigo.css';
import React from "react";
import {  Link ,useLocation} from 'react-router-dom';
import { Button ,FormCheck } from 'react-bootstrap';

function RegistrarHorarioAmigo() {

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio,images} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio,images)
  const data = [
    { id: 1, lunes: '', martes: '', miercoles: '',
  jueves:'',viernes:'',sabado:'',domingo:'' },
    { id: 2, lunes: '', martes: '', miercoles: '',
  jueves:'',viernes:'',sabado:'',domingo:'' },
  { id: 3, lunes: '', martes: '', miercoles: '',
  jueves:'',viernes:'',sabado:'',domingo:'' },
    // contenedor de datos para la tabla
  ];
    return (
      <div>
        <Navbar/> 
      <form className="form-horarios">
      <h1>Registrar Amigo Rentable </h1>
          <div className="Checkbox">
            <form>
            <form className="form-seleccion">
            <h3 style={{ textAlign: 'left' }}>Selecciona los dias que tiene disponible</h3>
            <div className="d-flex">
            <FormCheck type="checkbox" id="lunes" name="lunes" value="lunes"/>
            <label for="lunes">Lunes</label>

            <FormCheck type="checkbox" id="martes" name="martes" value="martes"/>
            <label for="martes"> Martes</label>

            <FormCheck type="checkbox" id="miercoles" name="miercoles" value="miercoles"/>
            <label for="miercoles"> Miercoles</label>

            <FormCheck type="checkbox" id="jueves" name="jueves" value="jueves"/>
            <label for="jueves"> Jueves</label>

            <FormCheck type="checkbox" id="viernes" name="viernes" value="viernes"/>
            <label for="viernes"> Viernes</label>

            <FormCheck type="checkbox" id="sabado" name="sabado" value="sabado"/>
            <label for="sabado"> Sabado</label>
    
            <FormCheck  type="checkbox" id="domingo" name="domingo" value="domingo"/>
            <label for="domingo"> Domingo</label>

            <br></br>
            </div>
            </form>
            <br></br>
            <form className="form-seleccion">

            <h3 style={{ textAlign: 'left' }}>Seleccionar Turno</h3>
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
            
            <br></br>
              <div className="Horarios">
                  <h5>Mañana (5:00 AM - 11:00 AM)</h5>
                  <h5>Tarde (12:00 PM - 8:00 PM)</h5>
                  <h5>Noche (9:00 AM - 1:00 AM)</h5> 
              </div>
            </form> 
          </form>
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
                <Button variant="secondary" className="ml-2 custom-cancel-button">Volver</Button>
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
                seleccionPrecio,
                images
              }
            }}>
                <Button variant = "primary" className="custom-next-button">Siguiente</Button>
            </Link>
          </div>
          </form>    
          </div>
    );
  }
  
  export default RegistrarHorarioAmigo;