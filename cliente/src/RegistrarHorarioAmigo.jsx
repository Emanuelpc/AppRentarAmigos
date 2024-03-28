import Navbar from "./Componentes/Navbar";
 dev
import { useState } from "react";
import './RegistrarHorarioAmigo.css';
import React from "react";


 Jhonn
function RegistrarHorarioAmigo() {
    return (
      <div>
        <Navbar/>
 dev
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

      <h1>Esta es la página de RegistrarHorarioAmigo</h1>
      <h1>Hola Mundo!!!</h1>
      
 Jhonn

            <input type="checkbox" id="domingo" name="domingo" value="domingo"/>
            <label for="domingo"> Domingo</label>
            </form>
          </div>
      </div>
    );
  }
  
  export default RegistrarHorarioAmigo;