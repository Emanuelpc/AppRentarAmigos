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
import LoginCliente from "./LoginCliente";
import LoginAmigo from "./LoginAmigo"
import SolicitudesaAmigos from "./SolicitudesaAmigos";
import SolicitudesClientes from "./SolicitudesClientes";
import CitasAmigos from "./CitasAmigos";
<<<<<<< HEAD
import ModificarAlquilerCliente from "./ModificarAlquilerCliente";
=======
import AgendaAmigo from "./AgendaAmigo";
import PerfilAmigoPrime from "./PerfilAmigoPrime";
>>>>>>> eab8899738f870d5385001a3ff0901a956550537
import { UserProvider } from './UserContext';
import AgendaCliente from "./AgendaCliente";


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
        <Route path="LoginCliente" element={<LoginCliente />}/>
        <Route path="LoginAmigo" element={<LoginAmigo />}/>
        <Route path="PerfilCliente" element={<PerfilCliente />}/>
        <Route path="SolicitudAlquilerAmigo" element={<SolicitudAlquilerAmigo />}/>
        <Route path="RegistrarDatosCliente" element={<RegistrarDatosCliente />}/>
        <Route path="RegistrarFotosCliente" element={<RegistrarFotosCliente />}/>
        <Route path="RegistrarUbicacionCliente" element={<RegistrarUbicacionCliente />}/>
        <Route path="CitasAmigos" element={<CitasAmigos />}/>
        <Route path="SolicitudesaAmigos" element={<SolicitudesaAmigos />}/>
        <Route path="SolicitudesClientes" element={<SolicitudesClientes />}/>
<<<<<<< HEAD
        <Route path="ModificarAlquilerCliente" element={<ModificarAlquilerCliente />}/>
=======
        <Route path="PerfilAmigoPrime" element={<PerfilAmigoPrime />}/>
        <Route path="AgendaAmigo" element={<AgendaAmigo />}/>
        <Route path="AgendaCliente" element={<AgendaCliente />}/>
        <Route path="PerfilAmigoPrime" element={<PerfilAmigoPrime />}/>
>>>>>>> eab8899738f870d5385001a3ff0901a956550537
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

