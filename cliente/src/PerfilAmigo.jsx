<<<<<<< HEAD

import Button from "react-bootstrap/esm/Button";
=======
>>>>>>> 6ce782f5fe37bb35506468792b87f4041934723f
import Navbar from "./Componentes/Navbar";
import InterestType from "./InterestType";
import './PerfilAmigo.css';
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useActionData } from 'react-router-dom'; // Importa Link desde react-router-dom
import Axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import CardAmigo from "./Componentes/CardAmigo";
=======
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Importa Button desde react-bootstrap
import * as bootstrap from 'bootstrap'; // Importa todo de bootstrap
>>>>>>> 6ce782f5fe37bb35506468792b87f4041934723f

function PerfilAmigo() {
    const [amigos, setamigos] = useState([]);
    const profile = {
    name: "Juan Perez",
    registration: "Registro realizado en Febrero del 2022 para Bolivia",
    price: "100 BS/Hora",
    interests: ["Cine", "Baile", "Natación"],
    description: "Esta es una descripción del usuario."
<<<<<<< HEAD
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
=======
  };

  useEffect(() => {
    const carousel = document.querySelector('#carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel);
  }, []); // Se ejecuta solo una vez después de que el componente se monta

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel"style={{ marginTop:'90px' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://img.freepik.com/fotos-premium/guapo-hombre-latino-sonriente-elegante-camiseta-blanca-compras-telefonos-moviles-linea_695242-226.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://thumbs.dreamstime.com/b/hombre-cauc%C3%A1sico-hermoso-con-la-barba-76425603.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.dzoom.org.es/wp-content/uploads/2019/06/fotografia-paisaje-consejos-12.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="perfil">
>>>>>>> 6ce782f5fe37bb35506468792b87f4041934723f
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
<<<<<<< HEAD
            </fieldset>
=======
          <div>
            <strong>Intereses:</strong>
            <div style={{ flexDirection: 'row' }}>
              {profile.interests.map((interest, index) => (
                <InterestType key={index} interest={interest} />
              ))}
            </div>
>>>>>>> 6ce782f5fe37bb35506468792b87f4041934723f
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
<<<<<<< HEAD
          
          </fieldset>
          </div>
          <Link to="/BuscadorAmigo" style={{ marginRight: '10px', textDecoration: 'none' }}><button>Volver</button></Link>
          <Button variant="success">Rentar Amigo</Button>
          
          
          </div>
          </div>
=======
          <div className="botones">
            <Link to="/BuscadorAmigo" style={{ textDecoration: 'none' }}>
              <button className="boton-buscar-amigos">Volver</button>
            </Link>
            <Button variant="success">Rentar Amigo</Button>
          </div>
        </div>
>>>>>>> 6ce782f5fe37bb35506468792b87f4041934723f
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default PerfilAmigo;
=======
export default PerfilAmigo;
>>>>>>> 6ce782f5fe37bb35506468792b87f4041934723f
