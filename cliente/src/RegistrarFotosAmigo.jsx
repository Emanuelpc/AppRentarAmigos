import Navbar from "./Componentes/Navbar"
function RegistrarFotosAmigo() {
    return (
      <div>
        <Navbar/>
        <h1>Subir foto de perfil(*)</h1>
        <h5>Sube almenos 1 foto a 4</h5>
        <form>
        <br></br>
        <label for="img">Select image:</label>
          <input type="file" id="img" name="img" accept="image/*"/>
          <input type="submit"/>
          <br></br>
          <input type="submit" value="Cancelar" />
          <input type="submit" value="Siguiente" />
        </form>
      </div>
    );
  }
  
  export default RegistrarFotosAmigo;