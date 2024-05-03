import Navbar from "./Componentes/Navbar"
import DragAndDropCliente from "./Componentes/DragAndDropCliente"
import './RegistrarFotosCliente.css';
import {  useLocation } from 'react-router-dom';


function RegistrarFotosCliente() {

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio)


  return (
    <div>
      <Navbar/>
      <div className="center-container">
      <DragAndDropCliente
          Nombre={Nombre}
          Apellido={Apellido}
          CorreoElectronico={CorreoElectronico}
          Password={Password}
          fechaNacimiento={fechaNacimiento}
          Genero={Genero}
          seleccionPrecio={seleccionPrecio}
        />
      </div>
    </div>
  );
}
export default RegistrarFotosCliente;