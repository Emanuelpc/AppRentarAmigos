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
//Endpoint para obtener todos los Datos de : Amigo
app.get("/amigos", (req, res) => {
    // Consultar todos los departamentos en la base de datos
    db.query('SELECT * FROM amigo',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigos");
            } else {
                res.send(result);
            }
        }
    );
});
//Endpoint para obtener todos los Datos de : Departamento
app.get("/departamentos", (req, res) => {
    // Consultar todos los departamentos en la base de datos
    db.query('SELECT * FROM departamento',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigos");
            } else {
                res.send(result);
            }
        }
    );
});
//Endpoint para obtener todos los Datos de : Departamento
app.get("/ciudades", (req, res) => {
    // Consultar todos los departamentos en la base de datos
    db.query('SELECT * FROM ciudad',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigos");
            } else {
                res.send(result);
            }
        }
    );
});

//Endpoint para obtener todos los Datos de : intereses
app.get("/intereses", (req, res) => {
    // Consultar todos los intereses en la base de datos
    db.query('SELECT * FROM intereses',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigos");
            } else {
                res.send(result);
            }
        }
    );
});

//Endpoint para obtener todos los Datos de : AmigoFiltrado
app.get("/amigosfiltrado", (req, res) => {
    //Obtener Valores de los parámetros de la URL
    const { Departamento, Ciudad,Slider, Genero, Intereses } = req.query;

    // Construir la consulta SQL base
    let query = 'SELECT * FROM amigo WHERE 1=1';

    // Agregar condiciones según los parámetros recibidos
    if (Departamento) {
        const departamentoId = parseInt(Departamento.valor);
        query += ` AND Departamento_idDepartamento = '${departamentoId}'`;
        console.log("Entro 1");
    }
    if (Ciudad) {
        const ciudadId = parseInt(Ciudad.valor);
        query += ` AND Ciudad_idCiudad = '${ciudadId}'`;
        console.log("Entro 2");
    }
    if (Genero) {
        let valorgenero="";
        if(Genero.valor==="option1"){valorgenero="Hombre"}
        if(Genero.valor==="option2"){valorgenero="Mujer"}
        if(Genero.valor==="option3"){valorgenero="Otro"}
        query += ` AND Genero = '${valorgenero}'`;
        console.log("Entro 3"+Genero.valor);
    }
    if (Slider) {
        let SliderEdad = parseInt(Slider.valor);
        let YearSlider = 2024-SliderEdad;
        query += ` AND YEAR(fechaNacimiento) = '${YearSlider}'`;
        console.log("Entro 4");
    }
    if (Intereses) {
        // Suponiendo que Intereses es un array de IDs de intereses
        console.log(Intereses)
        let interesopciones = extraerDatos(Intereses, 'valor');
        console.log(interesopciones); // Output: [25, 30, 28] 
        let palabraABorrar = "option";
        let interesesSinoption = quitarPalabraDeArray(interesopciones, palabraABorrar);
        console.log(interesesSinoption);
        let interesesEnteros = interesesSinoption.map(string => parseInt(string, 10));
        console.log(interesesEnteros);

        //query += ` AND interes IN (${Intereses.join(',')})`;
    }
    console.log(query);
    // Ejecutar la consulta en la base de datos
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener amigos");
        } else {
            res.send(result);
        }
    });
});

//Endpoint para obtener La Busqueda de Amigo por Nombre
app.get("/amigoBusqueda", (req, res) => {
    //Obtener Valores de los parámetros de la URL
    const { Nombre , Apellido } = req.query;

    // Construir la consulta SQL base
    let query = 'SELECT * FROM amigo WHERE 1=1';

    // Agregar condiciones según los parámetros recibidos
    if (Nombre) {
        query += ` AND Nombre = '${Nombre}'`;
        console.log("Entro 1");
    }

    if (Apellido) {
        query += ` AND Apellido = '${Apellido}'`;
        console.log("Entro 2");
    }
    
    console.log(query);
    // Ejecutar la consulta en la base de datos
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener amigos");
        } else {
            res.send(result);
        }
    });
});


//Inicialización del servidor:

app.listen(3001, () => {
    console.log("Se está ejecutando en el puerto 3001");
});

function extraerDatos(array, propiedad) {
    return array.map(objeto => objeto[propiedad]);
}
function quitarParte(cadena, parte) {
    return cadena.replace(parte, '');
}

function quitarPalabraDeArray(array, palabra) {
    return array.map(cadena => quitarParte(cadena, palabra));
}