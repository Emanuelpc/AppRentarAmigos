
import Button from "react-bootstrap/esm/Button";
import Navbar from "./Componentes/Navbar";
import './PerfilAmigo.css';
import React, { useState } from 'react';
import { Link, useActionData } from 'react-router-dom'; // Importa Link desde react-router-dom
import Axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import CardAmigo from "./Componentes/CardAmigo";

function PerfilAmigo() {
    const [amigos, setamigos] = useState([]);
    const profile = {
    name: "Juan Perez",
    registration: "Registro realizado en Febrero del 2022 para Bolivia",
    price: "100 BS/Hora",
    interests: ["Cine", "Baile", "Natación"],
    description: "Esta es una descripción del usuario."
            };
    const hombreGenericoUrl = "https://img.freepik.com/foto-gratis/hombre-feliz-pie-playa_107420-9868.jpg";


    // function obtenerListaAmigo
    const getAmigo = () => {
        Axios.get("http://localhost:3001/amigos").then((response) => {
          setamigos(response.data);
        });

        } 
        //Funcion para Crear Card de Amigos al entrar a la pagina 
      useEffect(() => {
        // Esta función se ejecutará cuando el componente se monte por primera vez
        getAmigo();
       
      }, []); // El segundo argumento [] indica que este efecto solo se ejecuta una vez, 

return (
  <div>
    
    <Navbar/>
  
  <div style={{ display: 'flex', alignItems: 'center' }}>
    
      <div style={{ marginTop:'90px' }}>
          {/* Aquí colocarías la imagen del perfil */}
          <img src={hombreGenericoUrl} alt="Hombre Genérico" />
      </div>
      
      <div className="perfil">
          <h1 id="titulo">Perfil</h1>
          {
            amigos.map((val, index)=>(
                const nombre= val.Nombre+""+val.Apellido;
                return 
            ))
          }<div class="container">
            <div class="border3">
            <fieldset>
            <legend>Datos Personales</legend>

          <p>Nomebre: {profile.name}</p>
          <p>Registro: {profile.registration}</p>
          <p>Precio: {profile.price}</p>
            </fieldset>
          </div>
          <div class="border3">
          <fieldset>
          <legend>Intereses</legend><br></br>
              <span class="badge rounded-pill text-bg-primary">Cine</span>
              < span class="badge rounded-pill text-bg-secondary">baile</span>
              <span class="badge rounded-pill text-bg-success">Natacion</span>
              <span class="badge rounded-pill text-bg-danger"></span>
              <span class="badge rounded-pill text-bg-warning"></span>
              <span class="badge rounded-pill text-bg-info"></span>
              <span class="badge rounded-pill text-bg-light"></span>
               <span class="badge rounded-pill text-bg-dark"></span>
               </fieldset>
          </div>
          <div >
            <div class="border3">
          <fieldset>
          <legend>Descricion</legend><br></br>
          <p>Descripción: {profile.description}</p>
          
          </fieldset>
          </div>
          <Link to="/BuscadorAmigo" style={{ marginRight: '10px', textDecoration: 'none' }}><button>Volver</button></Link>
          <Button variant="success">Rentar Amigo</Button>
          
          
          </div>
          </div>
      </div>
  </div>
  </div>
);
}

export default PerfilAmigo;
