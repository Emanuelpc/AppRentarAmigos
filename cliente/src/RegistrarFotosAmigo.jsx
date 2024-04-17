import Navbar from "./Componentes/Navbar";
import './RegistrarFotosAmigo.css';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";

function RegistrarFotosAmigo() {
  const [Url_Imagen, setUrl_Imagen] = useState("");
  const location = useLocation();
  const { Nombre, Apellido, CorreoElectronico, Password, fechaNacimiento, Genero, seleccionPrecio, aboutMe } = location.state?.data || {};

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "Presets_react");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dgaq8kh0o/image/upload",
      data
    );

    console.log(response.data);
    setUrl_Imagen(response.data.secure_url);

    // Enviar la URL de la imagen al backend
    guardarImagenEnBaseDeDatos(response.data.secure_url);
  };

  const guardarImagenEnBaseDeDatos = async (imageUrl) => {
    try {
      // Realiza una solicitud al backend para guardar la URL de la imagen
      await axios.post("/api/guardar-imagen", { imageUrl });
      console.log("URL de la imagen guardada en la base de datos correctamente.");
    } catch (error) {
      console.error("Error al guardar la URL de la imagen:", error);
    }
  };

  const FunctionDeleteImage = () => {
    setUrl_Imagen("");
  };

  return (
    <div>
      <Navbar />
      <form className="form-RegistroFotos">
        <h1>Registrar Amigo Rentable</h1>
        <h3 style={{ textAlign: 'left' }}>Registrar Fotos para el perfil Amigo</h3>
        <br />
        <br />
        <div>
          <input type="file" accept="image/*" onChange={changeUploadImage} />
          {Url_Imagen && (
            <div>
              <img src={Url_Imagen} style={{ maxWidth: '100%', maxHeight: '400px' }} alt="Imagen subida" />
              <button onClick={FunctionDeleteImage}>Eliminar Imagen</button>
            </div>
          )}
        </div>

        <div>
          <Link to="/RegistrarInteresesAmigo">
            <Button variant="secondary" className="ml-2 custom-cancel-button" >Volver</Button>
          </Link>
          <Link to="/RegistrarHorarioAmigo" state={{ data: { Nombre, Apellido, CorreoElectronico, Password, fechaNacimiento, Genero, seleccionPrecio, aboutMe } }}>
            <Button variant="primary" className="custom-next-button">Siguiente</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegistrarFotosAmigo;
