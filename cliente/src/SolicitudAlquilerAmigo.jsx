import React, { useState,useEffect } from 'react';
import Navbar from "./Componentes/Navbar";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import './SolicitudAlquilerAmigo.css';
import 'material-icons/css/material-icons.css';
import { TiClipboard, TiLocation } from 'react-icons/ti'; // Importa el icono de ubicación
import { CiMoneyBill } from "react-icons/ci";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




function SolicitudAlquilerAmigo() {
    const [date, setDate] = useState(new Date());
    const [diasLaborables, setDiasLaborables] = useState(['Monday', 'Wednesday', 'Friday']); // Lista de días laborables

    useEffect(() => {
        // Al montar el componente, establecer el estado 'date' en la fecha actual
        setDate(new Date());
    }, []);

    const isDayWorking = (date) => {
        // Obtener el nombre del día de la semana
        const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        // Devolver true si el día está en la lista de días laborables
        return diasLaborables.includes(dayOfWeek);
    };

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            return !isDayWorking(date);
        }
    };

    return (
        <div>
            <Navbar />
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="30" xl="30">
                        <MDBCard className="p-3">
                            <MDBCardBody>
                                <h1 >Solicitud Alquiler Amigo</h1>
                                <MDBRow>
                                    <MDBCol sm="12" lg="6">
                                        <MDBCard className="border border-dark p-3">
                                        <h2>Amigo del Alquiler</h2>
                                            <div className="d-flex align-items-center">
                                                <MDBCardImage src="https://www.clarin.com/img/2015/03/20/HkwKuZR7x_312x240.jpg" alt="Imagen de perfil" position="top" style={{ width: '200px', height: '150px' }} />
                                                <div className="ms-3">
                                                    <div>
                                                        <h3 style={{ textAlign: 'left' }}>Nombre: Maria Gomez</h3>
                                                    </div>
                                                    <div><h3 style={{ textAlign: 'left' }}>Edad: 21 Precio/hora: 60 BS</h3></div>
                                                </div>
                                            </div>
                                            <h2>Fecha del Alquiler</h2>
                                            <h4 style={{ textAlign: 'left' }}>Selecciona el día de alquiler disponible</h4>
                                            <div className="d-flex justify-content-center"> {/* Agrega estilos de centrado horizontal */}
                                                <Calendar
                                                    onChange={setDate}
                                                    value={date}
                                                    minDate={new Date()}
                                                    tileDisabled={tileDisabled}
                                                />
                                            </div>
                                            <h4 style={{ textAlign: 'left' }}>Selecciona el Turno del Amigo</h4>
                                            <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Elegir Turno del Dia Disponible</option>
                                                <option value="1">Mañana</option>
                                                <option value="2">Tarde</option>
                                                <option value="3">Noche</option>
                                            </select>
                                            <h4 style={{ textAlign: 'left' }}>Selecciona las horas Disponibles de alquiler</h4>
                                            <div className="checkbox-container">
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault1' label='12:00-1:00' />
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault2' label='1:00-2:00' />
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault3' label='2:00-3:00' />
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault1' label='4:00-5:00' />
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault2' label='5:00-6:00' />
                                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault3' label='6:00-7:00' />
                                                {/* Agrega más elementos MDBCheckbox aquí */}
                                            </div>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol sm="12" lg="6">
                                        <MDBCard className="border border-dark p-3">
                                        <h2>Detalles del  Alquiler</h2>
                                            <h4 style={{ textAlign: 'left' }}>Ubicacion Encuentro del Alquiler</h4>
                                            <div className="d-flex align-items-center">
                                            <TiLocation style={{ fontSize: '3rem' }} /> {/* Icono de ubicación */}
                                            <input type="text" className="form-control mx-3" placeholder="Ingrese la ubicación" />
                                            </div>
                                            <h4 style={{ textAlign: 'left' }}>Motivo del Alquiler</h4>
                                            <div className="d-flex ">
                                            <TiClipboard style={{ fontSize: '3rem' }} /> {/* Icono de ubicación */}
                                            <textarea className="form-control mx-3" rows="9" placeholder="Ingrese los detalles del alquiler"></textarea>
                                            </div>
                                            <h4 style={{ textAlign: 'left' }}>Monto Total del Aquiler</h4>
                                            <div className="d-flex align-items-center">
                                                <CiMoneyBill style={{ fontSize: '3rem' }} /> {/* Icono de moneda */}
                                                <h3 className="ms-3 text-primary fw-bold">60 BS</h3> {/* Estilos de texto resaltado */}
                                            </div>
                                            {/* Contenido relacionado con los detalles del alquiler */}

                                            <MDBBtn>Mandar Solicitud Alquiler</MDBBtn>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default SolicitudAlquilerAmigo;
