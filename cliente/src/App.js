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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="RegistrarDatosAmigo" element={ <RegistrarDatosAmigo /> } />
        <Route path="RegistrarInteresesAmigo" element={ <RegistrarInteresesAmigo /> } />
        <Route path="RegistrarFotosAmigo" element={ <RegistrarFotosAmigo /> } />
        <Route path="RegistrarHorarioAmigo" element={ <RegistrarHorarioAmigo /> } />
        <Route path="RegistrarUbicacionAmigo" element={ <RegistrarUbicacionAmigo /> } />
        <Route path="BuscadorAmigo" element={ <BuscadorAmigo /> } />
        <Route path="PerfilAmigo" element={ <PerfilAmigo /> } />
      </Routes>
      
    </div>
  );
}

export default App;