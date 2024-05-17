import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from "./Componentes/Navbar";
import Axios from "axios";
import { useUser } from './UserContext';

function AgendaCliente() {
    const [citas, setCitas] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
    const getAmigoPerfil = fecha => {
        //const id = user.idCliente;    ;
        //console.log('Valor recibido:', id);
       const fechaF = fecha.toISOString().substring(0, 10);
       console.log(fechaSeleccionada);
        Axios.get("http://localhost:3001/CitasCliente", {
            params: {
              idCliente:17,
              fechacita:fechaF
            }
        }).then((response) => {
            console.log(response.data);
        setCitas(response.data);

        }).catch((error) => {
            console.error("Error en la solicitud:", error);
        });
  }
    
        

    const handleFechaSeleccionada = fecha => {
       
        const fechaFormateada = fecha.toISOString().substring(0, 10);
        console.log("Fecha seleccionada:", fechaFormateada);
        setFechaSeleccionada(fechaFormateada);
    };

  
    return (
        <header className="pb-10 h-screen">
            <Navbar />
            <section className="container flex w-full text-black mt-5 mx-auto h-full gap-2">
                <div className="bg-celeste p-5 gap-5 w-1/2 h-5/6">
                    <h1>Agenda del Amigo</h1>
                    <p>Selecciona el día para ver tus citas</p>
                    <div className="flex justify-center">
                        <Calendar onChange={handleFechaSeleccionada} value={fechaSeleccionada} onClickDay={getAmigoPerfil} />
                    </div>
                </div>
                <div className="bg-celeste p-5 gap-5 w-1/2 flex flex-col h-5/6">
                    <div className="flex flex-col gap-1 w-full bg-white p-5 rounded-lg shadow flex-grow mb-4">
                        <article className="px-5 py-7 bg-celeste flex gap-5 items-center text-start mb-5">
                        <ul>
              {citas.length > 0 ? citas.map((cita) => (
                    <div className="flex gap-5 bg-white text-black">
                    <img src={cita.url} alt="imagen de perfil" />
                    <li className="" key={cita.id}>
                        <p>Nombre: {cita.nombre}</p>
                        <p>Fecha de la cita:{fechaSeleccionada}</p>
                        <p>Horas: {cita.horas}</p>
                        <p>Ubicacion: {cita.ubicacion}</p>
                        <p>Motivo: {cita.motivoAlquiler}</p>
                    </li>
                    </div>
                )) : <p>No hay citas para el día seleccionado</p> }
              </ul>
                        </article>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default AgendaCliente;
