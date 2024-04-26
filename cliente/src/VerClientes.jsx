import Navbar from "./Componentes/Navbar";
import './VerClientes.css'; // Importa el archivo CSS

function VerClientes() {
    return (
      <div >
      <Navbar/>
      <div className="Cliente">
      <h1>Aqui se veran los clientes</h1>
      </div>
      </div>
    );
  }
  
  export default VerClientes;