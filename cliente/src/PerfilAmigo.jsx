import Button from "react-bootstrap/esm/Button";
import Navbar from "./Componentes/Navbar";
import './PerfilAmigo.css';
import React from 'react';


function PerfilAmigo() {
<<<<<<< HEAD
return (
  <div>
    <Navbar/>
=======
  const profile = {
    name: "Denis Pinto Paredes",
    registration: "Registro realizado en Febrero del 2022 para Bolivia",
    price: "100 BS/Hora",
    interests: ["Cine", "Baile", "Natación"],
    description: "Esta es una descripción del usuario."
};
const hombreGenericoUrl = "https://img.freepik.com/foto-gratis/hombre-feliz-pie-playa_107420-9868.jpg";
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
      </div>
  </div>
>>>>>>> e5fc7ee24445ea0e639b2f54490c7fb25b911841
  </div>
);
}

export default PerfilAmigo;