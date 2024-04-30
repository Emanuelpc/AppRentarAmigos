import Navbar from "./Componentes/Navbar";
import './RegistrarHorarioAmigo.css';
import React from "react";
import {  Link ,useLocation} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import Axios from 'axios';

function RegistrarHorarioAmigo() {

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio,images} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio,images)
  //metodo para almacenar los datos en distintas columnas id 1 para mañana id 2 para tarde e id 3 para noche 
  const [data, setData] = useState([
    { id: 1, lunes: '', martes: '', miércoles: '', jueves: '', viernes: '', sábado: '', domingo: '' },
    { id: 2, lunes: '', martes: '', miércoles: '', jueves: '', viernes: '', sábado: '', domingo: '' },
    { id: 3, lunes: '', martes: '', miércoles: '', jueves: '', viernes: '', sábado: '', domingo: '' }
  ]);
//constante para mostrar las opciones de dias que tendra en los checkbox
  const [showOptions, setShowOptions] = useState({
    lunes: false,
    martes: false,
    miércoles: false,
    jueves: false,
    viernes: false,
    sábado: false,
    domingo: false
  });

  const [setSelectedDay] = useState('');

  const handleCheckboxChange = (e, day) => {
    const { checked } = e.target;
    setShowOptions(prevState => ({
      ...prevState,
      [day]: checked
    }));
    setSelectedDay(checked ? day : '');
    if (!checked) {
      setData(prevData =>
        prevData.map(item => ({
          ...item,
          [day]: ''
        }))
      );
    }
  };

//metodo para actualizar correctamente los horarios en un dia determinado
  const handleSelectChange = (e, day) => {
    const { value } = e.target;
    let id;
    if (value === 'Mañana') {
      id = 1;
    } else if (value === 'Tarde') {
      id = 2;
    } else if (value === 'Noche'){
      id = 3; 
    }else {
      id = 0;
    }
    //Almacenar los horarios en una lista aparte para ser guardadas luego en la base de datos
    const newHorario = { ...horario };
    const diaKey = `dia${day.charAt(0).toUpperCase() + day.slice(1)}`;
    newHorario[diaKey] = value;
    setHorario(newHorario);
    // Eliminar cualquier registro existente en el día
    const newData = data.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem[day] = value;
      } else {
        newItem[day] = ''; // Limpiar cualquier registro en el día si no es el ID correspondiente
      }
      return newItem;
    });
    setData(newData);
  };

  const hasSelectedSchedule = data.some(day =>
    Object.values(day).slice(1).some(schedule => schedule !== '')
  );

  const [horario, setHorario] = useState({
    diaLunes: "(No Trabaja)",
    diaMartes: "(No Trabaja)",
    diaMiércoles: "(No Trabaja)",
    diaJueves: "(No Trabaja)",
    diaViernes: "(No Trabaja)",
    diaSábado: "(No Trabaja)",
    diaDomingo: "(No Trabaja)"
  });

  const [lunes, setLunes] = useState("");
  const [martes, setMartes] = useState("");
  const [miercoles, setMiercoles] = useState("");
  const [jueves, setJueves] = useState("");
  const [viernes, setViernes] = useState("");
  const [sabado, setSabado] = useState("");
  const [domingo, setDomingo] = useState("");
  
  useEffect(() => {
    setLunes(horario.diaLunes);
    setMartes(horario.diaMartes);
    setMiercoles(horario.diaMiércoles);
    setJueves(horario.diaJueves);
    setViernes(horario.diaViernes);
    setSabado(horario.diaSábado);
    setDomingo(horario.diaDomingo);
  }, [horario]);


  const handleNextButtonClick = () => {
    console.log(horario);
  };

  const add = () => {
      Axios.post("http://localhost:3001/horarios",{
        lunes: lunes,
        martes: martes,
        miercoles: miercoles,
        jueves: jueves,
        viernes: viernes,
        sabado: sabado,
        domingo: domingo
      })
  }



    return (
      <div>
        <Navbar/> 
      <form className="form-horarios">
      <h1>Registrar Amigo Rentable </h1>
          <div className="Checkbox">
            <form>
            <h3 style={{ textAlign: 'left' }}>Selecciona los días que tiene disponibles</h3>
            <div className="horario">
              {Object.keys(data[0]).map((day, index) => (
               index !== 0 && (
              <div key={day} className="day-container">
                <div className="checkbox-label-container">
                   <input
                      type="checkbox"
                      checked={showOptions[day]}
                      onChange={e => handleCheckboxChange(e, day)}
                    />
                   <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
               </div>
                  {showOptions[day] && (
                  <div className="Turnos">
                    <select value={data.find(item => item[day] !== '')?.[day] || ''} onChange={e => handleSelectChange(e, day) }>
                      <option value="">Turno</option>
                      <option value="Mañana">Mañana</option>
                      <option value="Tarde">Tarde</option>
                      <option value="Noche">Noche</option>
                    </select>
                  </div>
                  )}
                  </div>
                 )
                  ))}
                </div>
            <br></br>
              <div className="Horarios">
                  <h5>Mañana (5:00 AM - 11:00 AM)</h5>
                  <h5>Tarde (12:00 PM - 8:00 PM)</h5>
                  <h5>Noche (9:00 AM - 1:00 AM)</h5> 
              </div>
          </form>
          <div>
            <br></br>
              <h2>Previsualización del Horario </h2>
              <div className="datagrid-container">
                  <table className="datagrid"> 
                  <thead>
                    <tr>
                      <th>Horarios</th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miércoles</th>
                      <th>Jueves</th>
                      <th>Viernes</th>
                      <th>Sábado</th>
                      <th>Domingo</th>
                    </tr>
                  </thead>
                     <tbody>
                        {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.lunes}</td>
                            <td>{item.martes}</td>
                            <td>{item.miércoles}</td>
                            <td>{item.jueves}</td>
                            <td>{item.viernes}</td>
                            <td>{item.sábado}</td>
                            <td>{item.domingo}</td>
                        </tr>
                        ))}
                     </tbody>
                  </table>

                </div>
          </div>
        </div>
          <div>
            <Link to ="/RegistrarFotosAmigo">
                <Button variant="secondary" className="ml-2 custom-cancel-button">Volver</Button>
            </Link>

            {hasSelectedSchedule ? (
            <Link to="/RegistrarUbicacionAmigo" state={
            {
             data: {
              Nombre,
              Apellido,
              CorreoElectronico,
              Password,
              fechaNacimiento,
              Genero,
              aboutMe,
              seleccionPrecio,
              images,
              horario
              }
            }}>
              <Button variant="primary" onClick={handleNextButtonClick} className="custom-next-button">Siguiente</Button>
            </Link>
            ) : (
              <Button variant="primary" disabled className="custom-next-button">Siguiente</Button>
            )}

          </div>
          </form>    
          </div>
    );
  }
  
  export default RegistrarHorarioAmigo;