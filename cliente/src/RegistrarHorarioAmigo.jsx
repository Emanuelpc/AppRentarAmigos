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
            </form>
          </div>
          <h1>Seleccionar turno </h1>
          <select name="tarifa" id="tarifa" >
               <option value="valorDefecto">Valor por defecto</option>
              <option value="Tmañana">Mañana</option>
              <option value="Ttarde">Tarde</option>
              <option value="Tnoche">Noche</option>
          </select>
          <select name="tarifa" id="tarifa">
              <option value="Tmañana">Mañana</option>
              <option value="Ttarde">Tarde</option>
              <option value="Tnoche">Noche</option>
          </select>
          <select name="tarifa" id="tarifa">
              <option value="Tmañana">Mañana</option>
              <option value="Ttarde">Tarde</option>
              <option value="Tnoche">Noche</option>
          </select>
          <select name="tarifa" id="tarifa">
              <option value="Tmañana">Mañana</option>
              <option value="Ttarde">Tarde</option>
              <option value="Tnoche">Noche</option>
          </select>
          <select name="tarifa" id="tarifa">
              <option value="Tmañana">Mañana</option>
              <option value="Ttarde">Tarde</option>
              <option value="Tnoche">Noche</option>
          </select>
          <select name="tarifa" id="tarifa">
              <option value="Tmañana">Mañana</option>
              <option value="Ttarde">Tarde</option>
              <option value="Tnoche">Noche</option>
          </select>
          <select name="tarifa" id="tarifa">
              <option value="Tmañana">Mañana</option>
              <option value="Ttarde">Tarde</option>
              <option value="Tnoche">Noche</option>
          </select>
          <h1>Previzualizacion del horario</h1>
          <br></br>
          <br></br>
              <button class = "btn-1">Volver</button>
              <button class = "btn-2">Siguiente</button>
              <br></br>
      </div>
    );
  }
  
  export default RegistrarHorarioAmigo;