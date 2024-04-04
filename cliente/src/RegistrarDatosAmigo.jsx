import { useState, useEffect } from "react";
import Navbar from "./Componentes/Navbar";
import "./RegistrarDatosAmigo.css";
import Axios from "axios";
import { Link } from "react-router-dom";
function RegistrarDatosAmigo() {
  const [Nombre, setNombre] = useState("");

  const [Apellido, setApellido] = useState("");

  const [CorreoElectronico, setCorreoElectronico] = useState("");

  const [Password, setPassword] = useState("");

  const [fechaNacimiento, setfechaNacimiento] = useState("");

  const [Genero, setGenero] = useState("Masculino");
  const [precioshora, setprecioshora] = useState([]); //Lista de Precios Hora Bd
  const [seleccionPrecio, setseleccionPrecio] = useState("");

  //funcion para obtener la lista de precios
  const getPreciosHora = () => {
    Axios.get("http://localhost:3001/precioshora").then((response) => {
      setprecioshora(response.data);
    });
  };

  function handleChange(e) {
    console.log(e.target.va);
    setGenero(e.target.value);
  }

  useEffect(() => {
    getPreciosHora();
  });

  return (
    <div>
      <Navbar />

      <form class="border3">
        <h1>Crear Perfil alqui-amigo</h1>
        <div className="inputform">
          <h3>Nombre(*)</h3>
          <input
            type="text"
            onChange={(event) => setNombre(event.target.value)}
            required
          />
          <br></br>
        </div>
        <div>
          <h3>Apellidos(*)</h3>
          <input
            type="text"
            onChange={(event) => setApellido(event.target.value)}
            required
          />
          <br></br>
        </div>

        <h3>Correo Electronico(*)</h3>
        <input
          type="email"
          onChange={(event) => setCorreoElectronico(event.target.value)}
          required
        />
        <br></br>

        <h3>Contraseña(*)</h3>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br></br>

        <h3>Fecha de nacimiento(*)</h3>
        <input
          type="date"
          onChange={(event) => setfechaNacimiento(event.target.value)}
          required
        />
        <br></br>

        <h3>Género(*)</h3>
        <div className="RadioButtons">
          <input
            type="radio"
            name="Genero"
            id="Hombre"
            value="Hombre"
            onChange={handleChange}
            required
          />
          <label htmlFor="masculino">Hombre</label>
          <input
            type="radio"
            name="Genero"
            id="Mujer"
            value="Mujer"
            onChange={handleChange}
          />
          <label htmlFor="femenino">Mujer</label>
          <input
            type="radio"
            name="Genero"
            id="Otro"
            value="Otro"
            onChange={handleChange}
          />
          <label htmlFor="otro">Otro</label>
        </div>
        <br></br>

        <h3>Elige cuánto que te gustaría obtener por hora(*)</h3>
        <select
          name="tarifa"
          id="tarifa"
          onChange={(event) => setseleccionPrecio(event.target.value)}
        >
          {precioshora.map((precio, index) => (
            <option key={index} value={precio.idPreciosPorHora}>
              {`Quiero ganar ${precio.Precio_Hora}Bs por hora`}
            </option>
          ))}
        </select>
        <br></br>
        <br></br>
      </form>
      <div>
        <Link to="/BuscadorAmigo">
          <button class="btn-1">Cancelar</button>
        </Link>
        <Link
          to="/RegistrarInteresesAmigo"
          state={{
            data: {
              Nombre,
              Apellido,
              CorreoElectronico,
              Password,
              fechaNacimiento,
              Genero,
              seleccionPrecio,
            },
          }}
        >
          <button class="btn-2">Siguiente</button>
        </Link>
      </div>
    </div>
  );
}

export default RegistrarDatosAmigo;
