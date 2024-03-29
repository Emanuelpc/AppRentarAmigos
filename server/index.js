const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors()); // Permite peticiones desde diferentes dominios
app.use(express.json()); // Permite el análisis del cuerpo de las solicitudes en formato JSON

//Conexión a la base de datos MySQL:

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "basedatosappamigo"
});

//Inicialización del servidor:

app.listen(3001, () => {
    console.log("Se está ejecutando en el puerto 3001");
});
