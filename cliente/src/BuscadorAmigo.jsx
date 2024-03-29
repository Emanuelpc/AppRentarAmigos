import Buscador from "./Componentes/Buscador";
import Navbar from "./Componentes/Navbar"

function RegistrarDatosAmigo() {
    return (
      <div>
        <Navbar/>
        <div className="EsloganBuscador">
        <h1>Busca a tu Amigo Rentable Ahora!! </h1>
        <h2>Rentar fácil, rentar inteligente. Amigo Rentable, tu mejor opción siempre.</h2>
        </div>
        <Buscador/>
      
      

      </div>
    );
  }
  
  export default RegistrarDatosAmigo;