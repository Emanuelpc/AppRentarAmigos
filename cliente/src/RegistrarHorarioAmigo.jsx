import Navbar from "./Componentes/Navbar";
import './RegistrarHorarioAmigo.css';
import React from "react";
import {  Link ,useLocation} from 'react-router-dom';
import { useState,useEffect } from 'react';

function RegistrarHorarioAmigo() {

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,aboutMe,seleccionPrecio)
  
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('turnoFormData');
    return savedData ? JSON.parse(savedData) : [
      { id: 1, lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: '' },
      { id: 2, lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: '' },
      { id: 3, lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: '', domingo: '' }
    ];
  });
  const [showOptions, setShowOptions] = useState({
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
    domingo: false
  });

  const [selectedDay, setSelectedDay] = useState('');

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

  const handleSelectChange = (e, day) => {
    const { value } = e.target;
    const id = value === 'Mañana' ? 1 : value === 'Tarde' ? 2 : value === 'Noche' ? 3 : 0;
    setData(prevData => {
      return prevData.map(item => {
        const newItem = { ...item };
        if (item.id === id) {
          newItem[day] = value;
        }
        return newItem;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('turnoFormData', JSON.stringify(data));
  }, [data]);


    return (
      <div>
        <Navbar/> 
      <h1>Seleccionar Horarios</h1>
      <div class = "border3">   
          <div>
            <br></br>
            <h3>Selecciona los dias que tiene disponible</h3>
            <div className="container">
              {Object.keys(data[0]).map((day, index) => (
              index !== 0 && (
                <div key={day} className="day-container">
                  <input
                    type="checkbox"
                    checked={showOptions[day]}
                    onChange={e => handleCheckboxChange(e, day)}
                  />
                    <label>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                    {showOptions[day] && (
                      <div className="select-container">
                        <select value={data.find(item => item[day] !== '')?.[day] || ''} onChange={e => handleSelectChange(e, day)}>
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
            <div className="Horarios">
                  <h5>Mañana (5:00 AM - 11:00 AM)</h5>
                  <h5>Tarde (12:00 PM - 8:00 PM)</h5>
                  <h5>Noche (9:00 AM - 1:00 AM)</h5> 
             </div>
      <h2>Previsualización del Horario </h2>
      <div className="datagrid-container">
      <table className="datagrid"> 
        <thead>
          <tr>
            <th>Horario</th>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
            <th>Domingo</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.lunes}</td>
              <td>{item.martes}</td>
              <td>{item.miercoles}</td>
              <td>{item.jueves}</td>
              <td>{item.viernes}</td>
              <td>{item.sabado}</td>
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
                <button class = "btn-1">Volver</button>
            </Link>
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
                seleccionPrecio
              }
            }}>
                <button class = "btn-2">Siguiente</button>
            </Link>
          </div>
            
          </div>
    );
  }
  
  export default RegistrarHorarioAmigo;