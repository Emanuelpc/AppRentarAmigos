import Navbar from "./Componentes/Navbar";
import InterestType from "./InterestType";
import './PerfilAmigo.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Importa Button desde react-bootstrap
import * as bootstrap from 'bootstrap'; // Importa todo de bootstrap

function PerfilAmigo() {
  const profile = {
    name: "Denis Pinto Paredes",
    registration: "Registro realizado en Febrero del 2022 para Bolivia",
    price: "100 BS/Hora",
    interests: ["Cine", "Baile", "Natación"],
    description: "Esta es una descripción del usuario."
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
          <h1 id="titulo">Perfil</h1>
          <p>Nombre: {profile.name}</p>
          <p>Registro: {profile.registration}</p>
          <p>Precio: {profile.price}</p>
          <div>
            <strong>Intereses:</strong>
            <div style={{ flexDirection: 'row' }}>
              {profile.interests.map((interest, index) => (
                <InterestType key={index} interest={interest} />
              ))}
            </div>
          </div>
          <p>Descripción: {profile.description}</p>
          <div className="botones">
            <Link to="/BuscadorAmigo" style={{ textDecoration: 'none' }}>
              <button className="boton-buscar-amigos">Volver</button>
            </Link>
            <Button variant="success">Rentar Amigo</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilAmigo;
