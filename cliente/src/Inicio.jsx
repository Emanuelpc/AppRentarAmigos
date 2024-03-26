import { Link } from "react-router-dom";

function Inicio() {
    return (
      <div>
      <h1>Esta es la página de inicio</h1>
      <h1>Hola Mundo!!!</h1>
      <ol>
      <li><Link to="RegistrarDatosAmigo">Pagina Para Registrar Datos Amigo</Link></li>
      <li><Link to="RegistrarInteresesAmigo">Pagina Para Registrar Intereses  Amigo</Link></li>
      <li><Link to="RegistrarFotosAmigo">Pagina Para Registrar Fotos  Amigo</Link></li>
      <li><Link to="RegistrarHorarioAmigo">Pagina Para Registrar Horario  Amigo</Link></li>
      <li><Link to="RegistrarUbicacionAmigo">Pagina Para Registrar Ubicacion  Amigo</Link></li>
      <li><Link to="BuscadorAmigo">Pagina Para Buscador Amigo </Link></li>
      <li><Link to="PerfilAmigo">Pagina Para Perfil Amigo </Link></li>
      </ol>
      </div>
    );
  }
  
  export default Inicio;