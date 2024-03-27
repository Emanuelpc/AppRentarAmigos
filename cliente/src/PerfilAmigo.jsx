import Button from "react-bootstrap/esm/Button";
import React from 'react';
import InterestType from './InterestType';
import Navbar from "./Componentes/Navbar"

function PerfilAmigo() {
    const profile = {
        name: "Denis Pinto Paredes",
        registration: "Registro realizado en Febrero del 2022 para Bolivia",
        price: "100 BS/Hora",
        interests: ["Cine", "Baile", "Natación"],
        description: "Esta es una descripción del usuario."
    };

    return (
      <div>
        <Navbar/>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ border: '2px solid black', padding: '400px', marginRight: '20px' }}>
                {/* Aquí colocarías la imagen del perfil */}
            </div>
            <div>
                <h1>Perfil</h1>
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
        </div>
    );
}

export default PerfilAmigo;
