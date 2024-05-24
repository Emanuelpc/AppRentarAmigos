import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Componentes/Navbar";
import Axios from "axios";
import { useUser } from "./UserContext";
import { format, addDays } from "date-fns";

function AgendaAmigo() {
  const { user } = useUser();
  const [citas, setCitas] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const getAmigoPerfil = (fecha) => {
    const fechaF = format(fecha, 'yyyy-MM-dd');
    console.log("la fecha es:", fechaF);

    Axios.get("https://deployado.vercel.app/CitasAmigo", {
      params: {
        idAmigo: user.idAmigo,
        fechacita: fechaF,
      },
    })
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
        setCitas(response.data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  const handleFechaSeleccionada = (fecha) => {
    setFechaSeleccionada(fecha);
    getAmigoPerfil(fecha);
  };

  return (
    <header className="pb-10 h-screen">
      <Navbar />
      <section className="container flex w-full text-black mt-5 mx-auto h-full gap-2">
        <div className="bg-celeste p-5 rounded-lg shadow-md w-1/2 h-5/6 flex flex-col">
          <div>
            <h1 className="text-2xl font-bold mb-4">Agenda del Amigo</h1>
            <p className="mb-4">Selecciona el día para ver tus citas</p>
          </div>
          <div className="flex justify-center">
            <Calendar
              onChange={handleFechaSeleccionada}
              value={fechaSeleccionada}
              className="rounded-lg shadow"
            />
          </div>
        </div>
        <div className="bg-celeste p-5 gap-5 w-1/2 flex flex-col h-5/6 overflow-y-auto rounded-lg shadow-md">
          <div>
            <article className="flex gap-5 items-center">
              <ul>
                {citas.length > 0 ? citas.map((cita) => (
                  <div className="flex items-center gap-7 bg-white text-black p-4 rounded shadow mb-4" key={cita.id}>
                    <div className="w-40 h-40 flex-shrink-0">
                      <img src={cita.foto} alt="imagen de perfil" className="w-full h-full object-cover rounded" />
                    </div>
                    <li className="flex-1 flex flex-col">
                      <p >Cliente: {cita.nombreCliente} {cita.apellidoCliente}</p>
                      <p className="mb-2">Horas: {cita.horas}</p>
                      <p className="mb-2">Fecha: {format(fechaSeleccionada, 'yyyy-MM-dd')}</p>
                      <p className="mb-2">Ubicacion: {cita.ubicacion}</p>
                      <p className="mb-2">Motivo: {cita.motivoAlquiler}</p>
                    </li>
                  </div>
                )) : <p>No hay citas para el día seleccionado</p>}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </header>
  );
}

export default AgendaAmigo;
