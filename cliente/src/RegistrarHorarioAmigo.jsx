import Navbar from "./Componentes/Navbar";
import { useState } from "react";
import './RegistrarHorarioAmigo.css';
import React from "react";



function RegistrarHorarioAmigo() {
    return (
      <div>
        <Navbar/> 
      <h1>Seleccionar Horarios</h1>

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
            
          </div>


      </div>
    );
  }
  
  export default RegistrarHorarioAmigo;