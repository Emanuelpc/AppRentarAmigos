import Navbar from "./Componentes/Navbar";
import './Inicio.css'; // Importa el archivo CSS

function Inicio() {
    return (
      <div >
      <Navbar/>
      <div className="EsloganBienvenida">
      <h1>Bienvenidos a Amigo Rentable</h1>
      </div>
      </div>
    );
  }
  
  export default Inicio;
  