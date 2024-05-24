import React, { useState, useEffect } from 'react';
import Navbar from "./Componentes/Navbar";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBRadio, MDBBtn } from 'mdb-react-ui-kit';
import './ModificarAlquilerCliente.css';
import 'material-icons/css/material-icons.css';
import { TiClipboard, TiLocation } from 'react-icons/ti'; // Importa el icono de ubicación
import { CiMoneyBill,CiAlarmOn,CiCalendar,CiViewList } from "react-icons/ci";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useLocation,useNavigate } from "react-router-dom";
import Axios from "axios";
import Button from 'react-bootstrap/esm/Button';
import { useUser } from './UserContext';
import Modal from 'react-bootstrap/esm/Modal';
import { Link } from "react-router-dom";

function ModificarAlquilerCliente() {
    const [date, setDate] = useState(new Date());
    const [diasLaborables, setDiasLaborables] = useState([]); // Lista de días laborables
    const [DiasTurnos, setDiasTurnos] = useState([]); // Lista de Turnos laborables
    const [HorasDisponiblesSeleccionadas, setHorasDisponiblesSeleccionadas] = useState([]);
    const [amigoalquiler, setamigoalquiler] = useState([]);
    const [amigoalquilerhorario, setamigoalquilerhorario] = useState([]);
    const [seleccionesUsuario, setSeleccionesUsuario] = useState({ turno: '',horas: []});
    const [ubicacion, setUbicacion] = useState('');
    const [motivoAlquiler, setMotivoAlquiler] = useState('');
    const [solicitudesAlquiler, setSolicitudesAlquiler] = useState([]);
    const { user } = useUser();
    const navigate = useNavigate();
    const [modalText, setModalText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText2, setModalText2] = useState('');
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [modalText3, setModalText3] = useState('');
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [modalText4, setModalText4] = useState('');
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const location = useLocation();
    const {valoridSolicitud, valorTurno, valorHoras, valorFecha, valorUbicacion, valorMotivo, valorTotal, valoridAmigo, valoridCliente} = location.state?.data || {};    
    const [id] = useState(valoridAmigo);
    const [total, setTotal] = useState(0);

    const openModal = (text) => { 
        setModalText(text);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openModal2 = (text) => {
        setModalText2(text);
        setIsModalOpen2(true);
    };
    const closeModal2 = () => {
        setIsModalOpen2(false);
    };
    const openModal3 = (text) => {
        setModalText3(text);
        setIsModalOpen3(true);
    };
    const closeModal3 = () => {
        setIsModalOpen3(false);
    };
    const openModal4 = (text) => {
        setModalText4(text);
        setIsModalOpen4(true);
    };
    const closeModal4 = () => {
        setIsModalOpen4(false);
        navigate(`/SolicitudesaAmigos`);
    };

    useEffect(() => {
        if (valorUbicacion) {
            setUbicacion(valorUbicacion);
        }
        if (valorMotivo) {
            setMotivoAlquiler(valorMotivo);
        }
        if (valorTotal) {
            const totalEntero = parseInt(Math.round(valorTotal));
            setTotal(totalEntero);
        }
        if (valorFecha) {
            const fechaConvertida = new Date(valorFecha);
            setDate(fechaConvertida);
        }
        if(valorTurno){
            setSeleccionesUsuario(valorTurno);
        }
    }, [valorUbicacion, valorMotivo, valorTurno, valoridAmigo, valorTotal, valorFecha]);

    const getAmigoAlquiler = () => {
        Axios.get("https://deployado.vercel.app/amigoalquiler", {
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
        Axios.get("https://deployado.vercel.app/amigohorarioalquiler", {
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
        const turnoSeleccionado = event.target.value;
        setSeleccionesUsuario({ ...seleccionesUsuario, turno: turnoSeleccionado });

        // Filtrar las horas disponibles según el turno seleccionado
        const horasDisponibles = obtenerHorasDisponibles(turnoSeleccionado);
        setHorasDisponiblesSeleccionadas(horasDisponibles);
    };

    const handleHoraChange = (event) => {
        const horaSeleccionada = event.target.value;
        
        // Establece la hora seleccionada como la nueva hora en lugar de agregarla a la lista
        setSeleccionesUsuario({ turno: seleccionesUsuario.turno, horas: [horaSeleccionada] });
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

    // Actualiza los turnos disponibles cuando cambia la fecha seleccionada
    useEffect(() => {
        if (amigoalquilerhorario.length > 0) {
            console.log(date.getDay());
            const turnosDisponibles = obtenerTurnosDisponibles(date.getDay());
            setDiasTurnos(turnosDisponibles);
            
            // Verificar si la opción seleccionada aún está disponible
            if (seleccionesUsuario.turno && !turnosDisponibles.includes(seleccionesUsuario.turno)) {
                // Si la opción seleccionada ya no está disponible, selecciona la primera opción disponible
                const primerTurnoDisponible = turnosDisponibles.length > 0 ? turnosDisponibles[0] : '';
                setSeleccionesUsuario({ ...seleccionesUsuario, turno: primerTurnoDisponible });
                
                // Actualiza las horas disponibles para el nuevo turno seleccionado
                const horasDisponibles = obtenerHorasDisponibles(primerTurnoDisponible);
                setHorasDisponiblesSeleccionadas(horasDisponibles);
            }
            
            // Si la opción seleccionada aún está disponible, no es necesario hacer nada
        }
    }, [date]);
    
    useEffect(() => {
        limpiarSeleccionesUsuario();
        limpiarTotal(); // Limpiar las horas seleccionadas
        setSeleccionesUsuario(prevState => ({ ...prevState, turno: '' }));
    }, [date]);

    // Función para limpiar las selecciones del usuario
    const limpiarSeleccionesUsuario = () => {
        setSeleccionesUsuario({ turno: '', horas: [] });
    };
    // Función para limpiar el total
    const limpiarTotal = () => {
        setTotal(0);
    };
    // Función para limpiar el total
    const limpiarTurnosandHoras = () => {
        
        setHorasDisponiblesSeleccionadas([])
        };
    // Función para obtener los turnos disponibles según el día seleccionado
    const obtenerTurnosDisponibles = (dia) => {
        switch (dia) {
            case 0:
                return amigoalquilerhorario[0].DiaDomingo !== '(No Trabaja)' ? [amigoalquilerhorario[0].DiaDomingo] : [];
            case 1:
                return amigoalquilerhorario[0].DiaLunes !== '(No Trabaja)' ? [amigoalquilerhorario[0].DiaLunes] : [];
            case 2:
                return amigoalquilerhorario[0].DiaMartes !== '(No Trabaja)' ? [amigoalquilerhorario[0].DiaMartes] : [];
            case 3:
                console.log(amigoalquilerhorario[0])
                return amigoalquilerhorario[0].DiaMiercoles !== '(No Trabaja)' ? [amigoalquilerhorario[0].DiaMiercoles] : [];
            case 4:
                return amigoalquilerhorario[0].DiaJueves !== '(No Trabaja)' ? [amigoalquilerhorario[0].DiaJueves] : [];
            case 5:
                return amigoalquilerhorario[0].DiaViernes !== '(No Trabaja)' ? [amigoalquilerhorario[0].DiaViernes] : [];
            case 6:
                return amigoalquilerhorario[0].DiaSabado !== '(No Trabaja)' ? [amigoalquilerhorario[0].DiaSabado] : [];
            default:
                return [];
        }
    };
    // Función para obtener las horas disponibles según el turno seleccionado
    const obtenerHorasDisponibles = (turnoSeleccionado) => {
        // Define las horas disponibles según el turno seleccionado
        switch (turnoSeleccionado) {
            case 'Mañana':
                return ['5:00 am-6:00 am', '6:00 am-7:00 am', '7:00 am-8:00 am','8:00 am-9:00 am','10:00 am-11:00 am'];
            case 'Tarde':
                return ['12:00 pm-13:00 pm', '13:00 pm-14:00 pm', '14:00 pm-15:00 pm','15:00 pm-16:00 pm','16:00 pm-17:00 pm'];
            case 'Noche':
                return ['17:00 pm-18:00 pm', '18:00 pm-19:00 pm', '20:00 pm-21:00 pm','22:00 pm-23:00 pm','23:00 pm-24:00 pm'];
            default:
                return [];
        }
    };
    // Actualiza las horas disponibles cuando cambia el turno seleccionado
    useEffect(() => {
        if (seleccionesUsuario.turno !== '') {
            const horasDisponibles = obtenerHorasDisponibles(seleccionesUsuario.turno);
            setHorasDisponiblesSeleccionadas(horasDisponibles);
        }
    }, [seleccionesUsuario.turno]);

    // Función para manejar cambios en el campo de ubicación
    const handleUbicacionChange = (event) => {
        const value = event.target.value;
        if (value.length <= 50) {
            setUbicacion(value);
        } else {
            // Muestra una alerta o modal informando al usuario que se superó el límite de caracteres
            openModal2("Se ha superado el límite de caracteres para la ubicación (50 caracteres máximo)");
        }
    };

    // Función para manejar cambios en el campo de motivo del alquiler
    const handleMotivoAlquilerChange = (event) => {
        const value = event.target.value;
        if (value.length <= 150) {
            setMotivoAlquiler(value);
        } else {
            // Muestra una alerta o modal informando al usuario que se superó el límite de caracteres
            openModal2("Se ha superado el límite de caracteres para el motivo de alquiler (150 caracteres máximo)");
        }
    };

     // Manejar el envío de la solicitud de alquiler
     const handleEnviarSolicitud = () => {
        if (
            seleccionesUsuario.turno === '' ||
            seleccionesUsuario.horas.length === 0 ||
            ubicacion === '' ||
            motivoAlquiler === ''
        ) {
            openModal3("Por favor completa todos los campos antes de enviar la solicitud de alquiler.");
            return; // Detener la ejecución si algún campo obligatorio está vacío
        }
        // Crear objeto que representa la solicitud de alquiler
        const nuevaSolicitud = {
            turno: seleccionesUsuario.turno,
            horas: seleccionesUsuario.horas,
            fecha: date.toDateString(),
            ubicacion: ubicacion,
            motivoAlquiler: motivoAlquiler,
            total: total,
            idAmigo:id,
            idCliente:user.idCliente
        };

        // Agregar la nueva solicitud al array de solicitudes de alquiler
        setSolicitudesAlquiler([...solicitudesAlquiler, nuevaSolicitud]);

        Axios.post("https://deployado.vercel.app/modificaralquiler", {
            idSolicitud:valoridSolicitud,
            turno: seleccionesUsuario.turno,
            horas: seleccionesUsuario.horas,
            fecha: date.toDateString(),
            ubicacion: ubicacion,
            motivoAlquiler: motivoAlquiler,
            total: total,
            idAmigo:id,
            idCliente:user.idCliente
        })
            .then((response) => {
                // Manejar la respuesta del servidor si es necesario
                console.log("Solicitud de alquiler actualizada con éxito:", response.data);
                openModal4("Se Actualizo Correctamente la Solicitud de Alquiler al AlquiAmigo");
                //navigate(`/SolicitudesaAmigos`);
            })
            .catch((error) => {
                console.error("Error al enviar la solicitud de alquiler:", error);
            });
    };

    useEffect(() => {
        console.log(solicitudesAlquiler);
    }, [solicitudesAlquiler]);



    // Función para limpiar todos los estados relevantes
    const limpiarSeleccion = () => {
        limpiarSeleccionesUsuario(); // Limpiar las selecciones de turno y horas
        limpiarTotal(); // Limpiar el total
        limpiarTurnosandHoras(); // Limpiar los turnos y horas disponibles
        setUbicacion(''); // Limpiar la ubicación
        setMotivoAlquiler(''); // Limpiar el motivo del alquiler
    };
    // Manejar el clic en el botón "Cancelar"
    const handleCancelar = () => {      
        limpiarSeleccion(); // Llamar a la función para limpiar los estados relevantes
    };


    return (
        <div>
            <Navbar />
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="30" xl="30">
                        <MDBCard className="p-3">
                            <MDBCardBody>
                                <h1> Modificar Solicitud de Alquiler Amigo</h1>
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
                                            
                                            <h4 style={{ textAlign: 'left' }}>Modifica la fecha de alquiler a tu preferencia</h4>
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
                                                {DiasTurnos.map((turno, index) => (
                                                <option key={index} value={turno}>{turno}</option>
                                                ))}
                                            </select>
                                            <h4 style={{ textAlign: 'left' }}>Selecciona las horas Disponibles de alquiler</h4>
                                            <div className="radio-container">
                                                {HorasDisponiblesSeleccionadas.map((hora, index) => (
                                                    <div key={index} className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="horaSeleccionada"
                                                            id={`horaSeleccionada${index}`}
                                                            value={hora}
                                                            checked={seleccionesUsuario.horas[0] === hora}
                                                            onChange={handleHoraChange}
                                                        />
                                                        <label className="form-check-label" htmlFor={`horaSeleccionada${index}`}>
                                                            {hora}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>

                                        </MDBCard>
                                    </MDBCol>
                                    <MDBCol sm="12" lg="6">
                                        <MDBCard className="border border-dark p-3">
                                            <h2>Detalles del Alquiler</h2>
                                           {/* Input para cargar la ubicacion del alquiler */}
                                            <h4 style={{ textAlign: 'left' }}>Ubicación Encuentro del alquiler</h4>
                                            <div className="d-flex align-items-center">
                                                <TiLocation style={{ fontSize: '3rem' }} />
                                                <input 
                                                    type="text" 
                                                    className="form-control mx-3" 
                                                    placeholder="Ingrese la ubicación" 
                                                    value={ubicacion} 
                                                    onChange={handleUbicacionChange} 
                                                    maxLength="51"
                                                />
                                            </div>
                                            <h4 style={{ textAlign: 'left' }}>Motivo del Alquiler</h4>
                                            {/* Input para cargar el motivo del alquiler */}
                                            <div className="d-flex ">
                                                <TiClipboard style={{ fontSize: '3rem' }} />
                                                <textarea className="form-control mx-3" rows="4" placeholder="Ingrese los detalles del alquiler" value={motivoAlquiler} onChange={handleMotivoAlquilerChange} maxLength="151"></textarea>
                                            </div>
                                            <h2>Previsualización alquiler</h2>
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
                                                <h3 className="ms-3  fw-bold">Fecha: {date.toLocaleDateString()}</h3>
                                                </div>
                                                {/* Agrega la ubicación y el motivo del alquiler */}
                                                <div className="d-flex align-items-center">
                                                    <TiLocation style={{ fontSize: '3rem' }} />
                                                    <h3 className="ms-3 fw-bold">Ubicación: </h3>
                                                    <Button style={{ margin: '5px' }} onClick={() => openModal(`Ubicación: ${ubicacion}`)}>
                                                    Ver Detalles de la Ubicacion
                                                    </Button>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <TiClipboard style={{ fontSize: '3rem' }} />
                                                    <h3 className="ms-3 fw-bold">Motivo de Alquiler: </h3>
                                                    <Button style={{ margin: '5px' }} onClick={() => openModal(`Motivo Alquiler: ${motivoAlquiler}`)}>
                                                    Ver Detalles del Motivo
                                                    </Button>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                <CiMoneyBill style={{ fontSize: '3rem' }} />
                                                <h3 className="ms-3 text-primary fw-bold">Total: {total} BS</h3>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <Link to="/SolicitudesaAmigos">
                                                    <Button variant="danger" size="lg" style={{ marginRight: '50px'}}>Volver</Button>
                                                </Link>
                                                <Button variant="success" size="lg" onClick={handleEnviarSolicitud} style={{ marginRight: '10px'}}>Editar Solicitud Alquiler</Button>                                          
                                            </div>     
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            {/* Modal de React-Bootstrap */}
            <Modal show={isModalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del Alquiler</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isModalOpen2} onHide={closeModal2}>
                <Modal.Header closeButton>
                    <Modal.Title>Alerta de Maximo de Caracteres</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText2}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal2}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isModalOpen3} onHide={closeModal3}>
                <Modal.Header closeButton>
                    <Modal.Title>Alerta Solicitud Imcompleta</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText3}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal3}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isModalOpen4} onHide={closeModal4}>
                <Modal.Header closeButton>
                    <Modal.Title>Solicitud Alquiler Exitoso</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalText4}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal4}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModificarAlquilerCliente;
