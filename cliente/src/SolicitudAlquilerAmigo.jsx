import React, { useState, useEffect } from 'react';
import Navbar from "./Componentes/Navbar";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import './SolicitudAlquilerAmigo.css';
import 'material-icons/css/material-icons.css';
import { TiClipboard, TiLocation } from 'react-icons/ti'; // Importa el icono de ubicación
import { CiMoneyBill,CiAlarmOn,CiCalendar,CiViewList } from "react-icons/ci";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useLocation } from "react-router-dom";
import Axios from "axios";

function SolicitudAlquilerAmigo() {
    const [date, setDate] = useState(new Date());
    const [diasLaborables, setDiasLaborables] = useState(['Monday', 'Wednesday', 'Friday']); // Lista de días laborables
    const [amigoalquiler, setamigoalquiler] = useState([]);
    const [amigoalquilerhorario, setamigoalquilerhorario] = useState([]);
    const [seleccionesUsuario, setSeleccionesUsuario] = useState({
        turno: '',
        horas: []
    });
    const location = useLocation();
    const { id } = location.state?.data || {};
    const [total, setTotal] = useState(0);


    const getAmigoAlquiler = () => {
        Axios.get("http://localhost:3001/amigoalquiler", {
            params: {
                id: id
            }
        }).then((response) => {
            console.log(response.data);
            setamigoalquiler(response.data);
        }).catch((error) => {
            console.error("Error en la solicitud:", error);
        });
    }

    const getAmigoHorarioAlquiler = () => {
        Axios.get("http://localhost:3001/amigohorarioalquiler", {
            params: {
                id: id
            }
        }).then((response) => {
            console.log(response.data);
            setamigoalquilerhorario(response.data);
        }).catch((error) => {
            console.error("Error en la solicitud:", error);
        });
    }

    useEffect(() => {
        setDate(new Date());
        getAmigoAlquiler();
        getAmigoHorarioAlquiler();
    }, []);
    
    // Función para convertir los datos de amigoalquilerhorario en diasLaborables
const convertirHorarioADiasLaborables = (horario) => {
    const diasLaborables = [];
    let primerElemento = true; // Variable de control para omitir el primer elemento
    for (const dia in horario) {
        if (horario.hasOwnProperty(dia) && horario[dia] !== "(No Trabaja)") {
            if (primerElemento) {
                primerElemento = false; // Marcar que se ha omitido el primer elemento
            } else {
                diasLaborables.push(dia);
            }
        }
    }
    // Eliminar el último elemento si existen más de uno
    if (diasLaborables.length > 1) {
        diasLaborables.pop();
    }
    return diasLaborables;
};


const convertirADiaIngles = (dia) => {
    switch (dia) {
        case 'DiaLunes':
            return 'Monday';
        case 'DiaMartes':
            return 'Tuesday';
        case 'DiaMiercoles':
            return 'Wednesday';
        case 'DiaJueves':
            return 'Thursday';
        case 'DiaViernes':
            return 'Friday';
        case 'DiaSabado':
            return 'Saturday';
        case 'DiaDomingo':
            return 'Sunday';
        default:
            return dia;
    }
};
    
    useEffect(() => {
        // Si hay datos en amigoalquilerhorario, conviértelos en diasLaborables
        if (amigoalquilerhorario.length > 0) {
            let nuevosDiasLaborables = convertirHorarioADiasLaborables(amigoalquilerhorario[0]);
            nuevosDiasLaborables = nuevosDiasLaborables.map(dia => convertirADiaIngles(dia));
            console.log(nuevosDiasLaborables)
            setDiasLaborables(nuevosDiasLaborables);
        }
    }, [amigoalquilerhorario]);
    
    

    const isDayWorking = (date) => {
        const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        return diasLaborables.includes(dayOfWeek);
    };

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            return !isDayWorking(date);
        }
    };

    function obtenerEdad(cadena) {
        let primerosCuatro = cadena.substring(0, 4);
        let edad = 2024 - parseInt(primerosCuatro, 10);
        return edad;
    }

    const handleTurnoChange = (event) => {
        setSeleccionesUsuario({ ...seleccionesUsuario, turno: event.target.value });
    };

    const handleHoraChange = (event) => {
        const horaSeleccionada = event.target.value;
        let nuevasHoras = [...seleccionesUsuario.horas];

        if (nuevasHoras.includes(horaSeleccionada)) {
            nuevasHoras = nuevasHoras.filter(hora => hora !== horaSeleccionada);
        } else {
            nuevasHoras.push(horaSeleccionada);
        }

        setSeleccionesUsuario({ ...seleccionesUsuario, horas: nuevasHoras });
    };

    const calcularTotal = (precioPorHora, horasSeleccionadas) => {
        const precioPorHoraNum = parseFloat(precioPorHora); // Convertir el precio por hora a número
        const total = precioPorHoraNum * horasSeleccionadas.length; // Calcular el total multiplicando el precio por hora por la cantidad de horas seleccionadas
        return total.toFixed(2); // Redondear el total a dos decimales
    };
    useEffect(() => {
        if (amigoalquiler.length > 0 && seleccionesUsuario.horas.length > 0) {
            const nuevoTotal = calcularTotal(amigoalquiler[0].Precio_Hora, seleccionesUsuario.horas);
            setTotal(nuevoTotal);
        }
    }, [seleccionesUsuario.horas]);

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
                                                {amigoalquiler.length > 0 && (
                                                    <MDBCardImage src={amigoalquiler[0].foto} alt="Imagen de perfil" position="top" style={{ width: '200px', height: '150px' }} />
                                                )}
                                                <div className="ms-3">
                                                    <div>
                                                        {amigoalquiler.length > 0 && (
                                                            <h3 style={{ textAlign: 'left' }}>Nombre: {amigoalquiler[0].Nombre}  {amigoalquiler[0].Apellido}</h3>
                                                        )}
                                                    </div>
                                                    <div>
                                                        {amigoalquiler.length > 0 && (
                                                            <h3 style={{ textAlign: 'left' }}>Edad: {obtenerEdad(amigoalquiler[0].fechaNacimiento)} Precio/hora: {amigoalquiler[0].Precio_Hora} BS</h3>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h4 style={{ textAlign: 'left' }}>Selecciona el día de alquiler disponible</h4>
                                            <div className="d-flex justify-content-center" >
                                                <Calendar
                                                    onChange={setDate}
                                                    value={date}
                                                    minDate={new Date()}
                                                    tileDisabled={tileDisabled}
                                                />
                                            </div>
                                            <h4 style={{ textAlign: 'left' }}>Selecciona el Turno del Amigo</h4>
                                            <select id="turno" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleTurnoChange}>
                                                <option value="">Elegir Turno del Dia Disponible</option>
                                                <option value="Mañana">Mañana</option>
                                                <option value="Tarde">Tarde</option>
                                                <option value="Noche">Noche</option>
                                            </select>
                                            <h4 style={{ textAlign: 'left' }}>Selecciona las horas Disponibles de alquiler</h4>
                                            <div className="checkbox-container">
                                                <MDBCheckbox name='flexCheck' value='12:00-1:00' id='flexCheckDefault1' label='12:00-1:00' onChange={handleHoraChange} />
                                                <MDBCheckbox name='flexCheck' value='1:00-2:00' id='flexCheckDefault2' label='1:00-2:00' onChange={handleHoraChange} />
                                                <MDBCheckbox name='flexCheck' value='2:00-3:00' id='flexCheckDefault3' label='2:00-3:00' onChange={handleHoraChange} />
                                                <MDBCheckbox name='flexCheck' value='4:00-5:00' id='flexCheckDefault4' label='4:00-5:00' onChange={handleHoraChange} />
                                                <MDBCheckbox name='flexCheck' value='5:00-6:00' id='flexCheckDefault5' label='5:00-6:00' onChange={handleHoraChange} />
                                                <MDBCheckbox name='flexCheck' value='6:00-7:00' id='flexCheckDefault6' label='6:00-7:00' onChange={handleHoraChange} />
                                            </div>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol sm="12" lg="6">
                                        <MDBCard className="border border-dark p-3">
                                            <h2>Detalles del Alquiler</h2>
                                            <h4 style={{ textAlign: 'left' }}>Ubicacion Encuentro del Alquiler</h4>
                                            <div className="d-flex align-items-center">
                                                <TiLocation style={{ fontSize: '3rem' }} />
                                                <input type="text" className="form-control mx-3" placeholder="Ingrese la ubicación" />
                                            </div>
                                            <h4 style={{ textAlign: 'left' }}>Motivo del Alquiler</h4>
                                            <div className="d-flex ">
                                                <TiClipboard style={{ fontSize: '3rem' }} />
                                                <textarea className="form-control mx-3" rows="9" placeholder="Ingrese los detalles del alquiler"></textarea>
                                            </div>
                                            <h2>Previsualizacion Alquiler</h2>
                                            <div className="border border-dark p-3">
                                                <div className="d-flex align-items-center">
                                                <CiViewList style={{ fontSize: '3rem' }} />
                                                <h3 className="ms-3  fw-bold">Turno: {seleccionesUsuario.turno}</h3>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                <CiAlarmOn style={{ fontSize: '3rem' }} />
                                                <h3 className="ms-3  fw-bold">Horas: {seleccionesUsuario.horas.join(', ')}</h3>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                <CiCalendar style={{ fontSize: '3rem' }} />
                                                <h3 className="ms-3  fw-bold">Fecha: {date.toDateString()}</h3>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                <CiMoneyBill style={{ fontSize: '3rem' }} />
                                                <h3 className="ms-3 text-primary fw-bold">Total: {total} BS</h3>
                                                </div>
                                            </div>
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
