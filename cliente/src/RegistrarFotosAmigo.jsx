import Navbar from "./Componentes/Navbar"
import DragAndDropImage from "./Componentes/DragAndDropImage"
import './RegistrarFotosAmigo.css';
import {  useLocation } from 'react-router-dom';


function RegistrarFotosAmigo() {

  const location = useLocation();
  const {Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio,aboutMe} = location.state?.data ||{};
  console.log(Nombre, Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,seleccionPrecio,aboutMe)


  return (
    <div>
      <Navbar/>
      <div className="center-container">
      <DragAndDropImage
          Nombre={Nombre}
          Apellido={Apellido}
          CorreoElectronico={CorreoElectronico}
          Password={Password}
          fechaNacimiento={fechaNacimiento}
          Genero={Genero}
          seleccionPrecio={seleccionPrecio}
          aboutMe={aboutMe}
        />
      </div>
    </div>
  );
}
export default RegistrarFotosAmigo;