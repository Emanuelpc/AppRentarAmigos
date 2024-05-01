import { Routes, Route } from "react-router-dom"
import './App.css';
import Inicio from "./Inicio";
import RegistrarDatosAmigo from "./RegistrarDatosAmigo";
import RegistrarInteresesAmigo from "./RegistrarInteresesAmigo";
import RegistrarFotosAmigo from "./RegistrarFotosAmigo";
import RegistrarHorarioAmigo from "./RegistrarHorarioAmigo";
import RegistrarUbicacionAmigo from "./RegistrarUbicacionAmigo";
import BuscadorAmigo from "./BuscadorAmigo";
import PerfilAmigo from "./PerfilAmigo";
import PerfilCliente from "./PerfilCliente";
import SolicitudAlquilerAmigo from "./SolicitudAlquilerAmigo";
import RegistrarDatosCliente from "./RegistrarDatosCliente";
import RegistrarFotosCliente from "./RegistrarFotosCliente";
import RegistrarUbicacionCliente from "./RegistrarUbicacionCliente";
import Login from "./Login";
import SolicitudesaAmigos from "./SolicitudesaAmigos";
import CitasAmigos from "./CitasAmigos";
import { UserProvider } from './UserContext';


function App() {

  return (
    <div className="App">
      <UserProvider>
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="RegistrarDatosAmigo" element={ <RegistrarDatosAmigo /> } />
        <Route path="RegistrarInteresesAmigo" element={ <RegistrarInteresesAmigo /> } />
        <Route path="RegistrarFotosAmigo" element={ <RegistrarFotosAmigo /> } />
        <Route path="RegistrarHorarioAmigo" element={ <RegistrarHorarioAmigo /> } />
        <Route path="RegistrarUbicacionAmigo" element={ <RegistrarUbicacionAmigo /> } />
        <Route path="BuscadorAmigo" element={ <BuscadorAmigo /> } />
        <Route path="PerfilAmigo" element={ <PerfilAmigo /> } />
        <Route path="Login" element={<Login />}/>
        <Route path="PerfilCliente" element={<PerfilCliente />}/>
        <Route path="SolicitudAlquilerAmigo" element={<SolicitudAlquilerAmigo />}/>
        <Route path="RegistrarDatosCliente" element={<RegistrarDatosCliente />}/>
        <Route path="RegistrarFotosCliente" element={<RegistrarFotosCliente />}/>
        <Route path="RegistrarUbicacionCliente" element={<RegistrarUbicacionCliente />}/>
        <Route path="CitasAmigos" element={<CitasAmigos />}/>
        <Route path="SolicitudesaAmigos" element={<SolicitudesaAmigos />}/>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

