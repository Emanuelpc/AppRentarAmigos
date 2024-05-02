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
//Endpoint para obtener todos los Datos de : Amigo
app.get("/cliente", (req, res) => {
    // Consultar todos los departamentos en la base de datos
    const{correoCliente} = req.query;
    const{contraCliente} = req.query;
    console.log(correoCliente);
    db.query(`SELECT * FROM cliente WHERE cliente.correoCliente = '${correoCliente}' AND cliente.contraCliente = '${contraCliente}'`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener cliente");
            } else {
                res.send(result);
            }
        }
    );
});

//Endpoint para obtener todos los Datos de : Amigo
app.get("/ClientePerfil", (req, res) => {
    // Consultar todos los departamentos en la base de datos
    const{idCliente} = req.query;
    console.log(idCliente);
    db.query(`SELECT * FROM cliente WHERE idCliente='${idCliente}'`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener cliente");
            } else {
                res.send(result);
            }
        }
    );
});

//Endpoint para obtener todos los Datos de : Amigo
app.get("/Perfilcliente1", (req, res) => {
    // Consultar todos los departamentos en la base de datos
    const{id} = req.query
    db.query(`SELECT * FROM cliente WHERE cliente.idCliente = '${id}'`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener cliente");
            } else {
                res.send(result);
            }
        }
    );
});
//Endpoint para obtener todos los Datos de : clientePerfil fotos
app.get("/ClientePerfilFotos", (req, res) => {
    //Obtener Valores de los parámetros de la URL
    const{id} = req.query
    db.query(`SELECT foto From cliente_fotos  WHERE idCliente = '${id}' `,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener cliente");
            } else {
                res.send(result);
            }
        }
    );
});

//Endpoint para obtener todos los Datos de : AmigoPerfil intereses
app.get("/AmigoPerfil", (req, res) => {
    //Obtener Valores de los parámetros de la URL
    const { idAmigo } = req.query;
    let id = parseInt(idAmigo);
    console.log(id);
    let query=`SELECT intereses.Interes FROM amigo, amigo_has_intereses, intereses WHERE amigo.idAmigo = '${id}'  AND   amigo.idAmigo = amigo_has_intereses.Amigo_idAmigo AND amigo_has_intereses.Intereses_idIntereses = intereses.idIntereses`
    console.log(query)
    db.query(query,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigo");
            } else {
                res.send(result);
            }
        }
    );
});

//Endpoint para obtener todos los Datos de : AmigoPerfil fotos
app.get("/AmigoPerfilFotos", (req, res) => {
    //Obtener Valores de los parámetros de la URL
    const { idAmigo } = req.query;
    let id = parseInt(idAmigo);
    console.log(id);
    let query=`SELECT foto From amigo_fotos  WHERE Amigo_idAmigo = '${id}' `
    console.log(query)
    db.query(query,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigo");
            } else {
                res.send(result);
            }
        }
    );
});

//Endpoint para obtener todos los Datos de : Amigo con su Departamentos y Ciudad
app.get("/amigosconDepartamento", (req, res) => {
    // Consultar todos los departamentos en la base de datos
    db.query(`SELECT 
    amigo.idAmigo,
    amigo.Nombre,
    amigo.Apellido,
    amigo.Correoelectronico,
    amigo.fechaNacimiento,
    amigo.Genero,
    amigo.Acercademi,
    departamento.Departamento,
    ciudad.Ciudad,
    (
        SELECT foto
        FROM amigo_fotos
        WHERE amigo_fotos.Amigo_idAmigo = amigo.idAmigo
        LIMIT 1
    ) AS foto
FROM 
    amigo
JOIN 
    departamento ON amigo.Departamento_idDepartamento = departamento.idDepartamento
JOIN 
    ciudad ON amigo.Ciudad_idCiudad = ciudad.idCiudad
ORDER BY 
    amigo.idAmigo;
`,
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
//Endpoint para obtener todos los Datos de : Ciudad
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

//Endpoint para obtener todos los Datos de : intereses
app.get("/precioshora", (req, res) => {
    // Consultar todos los intereses en la base de datos
    db.query('SELECT * FROM preciosporhora',
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener preciosporhora");
            } else {
                res.send(result);
            }
        }
    );
});

app.post("/create", (req,res)=>{
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const CorreoElectronico = req.body.CorreoElectronico;
    const Password = req.body.Password;
    const fechaNacimiento = req.body.fechaNacimiento;
    const Genero = req.body.Genero;
    const PreciosPorHora_idPreciosPorHora=req.body.PreciosPorHora_idPreciosPorHora;
    const Acercademi=req.body.Acercademi;
    const Departamento_idDepartamento=req.body.Departamento_idDepartamento;
    const Ciudad_idCiudad=req.body.Ciudad_idCiudad;
    console.log(Nombre,Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,PreciosPorHora_idPreciosPorHora,Acercademi,Departamento_idDepartamento,Ciudad_idCiudad)

        db.query('INSERT INTO amigo(Nombre,Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,PreciosPorHora_idPreciosPorHora,Acercademi,Departamento_idDepartamento,Ciudad_idCiudad) VALUES(?,?,?,?,?,?,?,?,?,?)',
        [Nombre,Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,PreciosPorHora_idPreciosPorHora,Acercademi,Departamento_idDepartamento,Ciudad_idCiudad],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Amigo Registrado con exito");
            }
        } 
        );
});

app.post("/lastUserIDFotos", async (req, res) => {
    const idAmigo = req.body.idAmigo;
    const images = req.body.images;

    // Recorre el array de imágenes y ejecuta una inserción en la base de datos para cada una
    images.forEach(async (imageUrl) => {
        try {
            await db.query('INSERT INTO amigo_fotos (Amigo_idAmigo, foto) VALUES (?, ?)', [idAmigo, imageUrl]);
            console.log(`Imagen ${imageUrl} asociada al usuario con ID ${idAmigo} guardada en la base de datos.`);
        } catch (error) {
            console.error(`Error al guardar la imagen ${imageUrl} asociada al usuario con ID ${idAmigo} en la base de datos:`, error);
        }
    });

    res.send("Imágenes guardadas correctamente.");
});

app.post("/lastUserhorario", async (req, res) => {
    const idAmigo = req.body.idAmigo;
    const horario = req.body.horario;

    for (const dia in horario) {
        if (horario.hasOwnProperty(dia)) {
            const turno = horario[dia];
            switch (dia) {
                case 'diaLunes':
                    var LunesTurno = turno;
                    break;
                case 'diaMartes':
                    var MartesTurno = turno;
                    break;
                case 'diaMiércoles':
                    var MiercolesTurno = turno;
                    break;
                case 'diaJueves':
                    var JuevesTurno = turno;
                    break;
                case 'diaViernes':
                    var ViernesTurno = turno;
                    break;
                case 'diaSábado':
                    var SabadoTurno = turno;
                    break;
                case 'diaDomingo':
                    var DomingoTurno = turno;
                    break;
                default:
                    break;
            }
        }
    }
    console.log(LunesTurno, MartesTurno, MiercolesTurno, JuevesTurno, ViernesTurno, SabadoTurno, DomingoTurno);

        try {
            await db.query('INSERT INTO horariodia_amigo (DiaLunes,DiaMartes,DiaMiercoles,DiaJueves,DiaViernes,DiaSabado,DiaDomingo,idAmigo) VALUES (?,?,?,?,?,?,?,?)', [LunesTurno,MartesTurno,MiercolesTurno,JuevesTurno,ViernesTurno,SabadoTurno,DomingoTurno,idAmigo]);
            console.log(`el horario asociada al usuario con ID ${idAmigo} guardada en la base de datos.`);
        } catch (error) {
            console.error(`Error al guardar el horario asociada al usuario con ID ${idAmigo} en la base de datos:`, error);
        }
    

    res.send("Se guardo correctamente el Horario");
});

app.post("/crearCliente", (req,res)=>{
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const CorreoElectronico = req.body.CorreoElectronico;
    const Password = req.body.Password;
    const fechaNacimiento = req.body.fechaNacimiento;
    const Genero = req.body.Genero;
    const PreciosPorHora_idPreciosPorHora=req.body.PreciosPorHora_idPreciosPorHora;
    const Departamento_idDepartamento=req.body.Departamento_idDepartamento;
    const Ciudad_idCiudad=req.body.Ciudad_idCiudad;
    console.log(Nombre,Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,PreciosPorHora_idPreciosPorHora,Departamento_idDepartamento,Ciudad_idCiudad)

        db.query('INSERT INTO cliente(nombreCliente,apellidoCliente,correoCliente,contraCliente,fechaNacimientoCliente,generoCliente,acercaDeMiCliente,Departamento_idDepartamento,Ciudad_idCiudad) VALUES(?,?,?,?,?,?,?,?,?)',
        [Nombre,Apellido,CorreoElectronico,Password,fechaNacimiento,Genero,PreciosPorHora_idPreciosPorHora,Departamento_idDepartamento,Ciudad_idCiudad],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Amigo Registrado con exito");
            }
        } 
        );
});

app.post("/lastUserIDFotosC", async (req, res) => {
    const idAmigo = req.body.idAmigo;
    const images = req.body.images;

    // Recorre el array de imágenes y ejecuta una inserción en la base de datos para cada una
    images.forEach(async (imageUrl) => {
        try {
            await db.query('INSERT INTO cliente_fotos (foto, idCliente) VALUES (?, ?)', [imageUrl, idAmigo]);
            console.log(`Imagen ${imageUrl} asociada al usuario con ID ${idAmigo} guardada en la base de datos.`);
        } catch (error) {
            console.error(`Error al guardar la imagen ${imageUrl} asociada al usuario con ID ${idAmigo} en la base de datos:`, error);
        }
    });

    res.send("Imágenes guardadas correctamente.");
});

app.get("/lastUserIDC", (req, res) => {
    // Consultar el último ID de usuario en la base de datos
    db.query('SELECT MAX(idCliente) AS lastUserID FROM cliente', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener el último ID de usuario");
        } else {
            res.send(result[0]); // Devuelve el resultado que contiene el último ID de usuario
        }
    });
});

//Endpoint para obtener todos los Datos de : AmigoFiltrado
app.get("/amigosfiltrado", (req, res) => {
    //Obtener Valores de los parámetros de la URL
    const { Departamento, Ciudad,Slider, Genero, Intereses } = req.query;
    let departamentoId=null;

    // Construir la consulta SQL base
    let query = `SELECT amigo.idAmigo, amigo.Nombre, amigo.Apellido, amigo.Correoelectronico, amigo.fechaNacimiento, amigo.Genero, amigo.Acercademi, departamento.Departamento, ciudad.Ciudad,
    (
        SELECT foto
        FROM amigo_fotos
        WHERE amigo_fotos.Amigo_idAmigo = amigo.idAmigo
        LIMIT 1
    ) AS foto
    FROM amigo
    JOIN departamento ON amigo.Departamento_idDepartamento = departamento.idDepartamento
    JOIN ciudad ON amigo.Ciudad_idCiudad = ciudad.idCiudad
    WHERE 1`;

    // Agregar condiciones según los parámetros recibidos
    if (Departamento && !isNaN(Departamento.valor)) {
        departamentoId = parseInt(Departamento.valor);
        query += ` AND amigo.Departamento_idDepartamento = '${departamentoId}'`;
        //console.log("Entro 1");
    }
    if (Ciudad && !isNaN(Ciudad.valor)) {
        const ciudadId = parseInt(Ciudad.valor);
        query += `AND amigo.Departamento_idDepartamento = '${departamentoId}' 
        AND amigo.Ciudad_idCiudad = '${ciudadId}'`;
        //console.log("Entro 2");
    }
    console.log(Genero)
    if (Genero !== undefined && Genero.valor !== "Seleccion un Genero") {
        let valorgenero="";
        if(Genero.valor==="option1"){valorgenero="Hombre"}
        if(Genero.valor==="option2"){valorgenero="Mujer"}
        if(Genero.valor==="option3"){valorgenero="Otro"}
        query += ` AND amigo.Genero='${valorgenero}'`;
        //console.log("Entro 3"+Genero.valor);
    }
    if (Slider) {
        let SliderEdad = parseInt(Slider.valor);
        let YearSlider = 2024-SliderEdad;
        query += ` AND YEAR(amigo.fechaNacimiento) = '${YearSlider}'`;
        //console.log("Entro 4");
    }
    if (Intereses) {
        // Suponiendo que Intereses es un array de IDs de intereses
        console.log(Intereses)
        let interesopciones = extraerDatos(Intereses, 'valor');
        //console.log(interesopciones); // Output: [25, 30, 28] 
        let palabraABorrar = "option";
        let interesesSinoption = quitarPalabraDeArray(interesopciones, palabraABorrar);
        //console.log(interesesSinoption);
        let interesesEnteros = interesesSinoption.map(string => parseInt(string, 10));
        //console.log(interesesEnteros);

        // Construir la parte de la consulta para buscar amigos por intereses
        //let subQuery = `SELECT Amigo_idAmigo FROM amigo_has_intereses WHERE Intereses_idIntereses IN (${interesesEnteros.join(',')})`;
        let subQuery = `SELECT Amigo_idamigo, COUNT(*) AS num_intereses FROM amigo_has_intereses WHERE Intereses_idIntereses IN (${interesesEnteros.join(',')}) GROUP BY Amigo_idamigo`;

        // Agregar la subconsulta a la consulta principal usando un JOIN
        //query += ` AND idAmigo IN (${subQuery})`;
        query += ` AND idAmigo IN (SELECT Amigo_idamigo FROM (${subQuery}) AS sub WHERE num_intereses = ${interesesEnteros.length})`;

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
    let query = `SELECT amigo.idAmigo, amigo.Nombre, amigo.Apellido, amigo.Correoelectronico, amigo.fechaNacimiento, amigo.Genero, amigo.Acercademi, departamento.Departamento, ciudad.Ciudad,
    (
        SELECT foto
        FROM amigo_fotos
        WHERE amigo_fotos.Amigo_idAmigo = amigo.idAmigo
        LIMIT 1
    ) AS foto
    FROM amigo
    JOIN departamento ON amigo.Departamento_idDepartamento = departamento.idDepartamento
    JOIN ciudad ON amigo.Ciudad_idCiudad = ciudad.idCiudad
    WHERE 1`;

    // Agregar condiciones según los parámetros recibidos
    if (Nombre) {
        query += ` AND amigo.Nombre = '${Nombre}'`;
        //console.log("Entro 1");
    }

    if (Apellido) {
        query += ` AND Apellido = '${Apellido}'`;
        //console.log("Entro 2");
    }
    
    //console.log(query);
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

//Endpoint para obtener el último ID de usuario registrado
app.get("/lastUserID", (req, res) => {
    // Consultar el último ID de usuario en la base de datos
    db.query('SELECT MAX(idAmigo) AS lastUserID FROM amigo', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener el último ID de usuario");
        } else {
            res.send(result[0]); // Devuelve el resultado que contiene el último ID de usuario
        }
    });
});

//Endpoint para obtener todos los Datos de : Amigo Alquiler
app.get("/amigoalquiler", (req, res) => {

    const { id } = req.query;
    console.log(id)
    // Consultar todos los departamentos en la base de datos
    db.query(`SELECT 
    amigo.idAmigo,
    amigo.Nombre,
    amigo.Apellido,
    amigo.Correoelectronico,
    amigo.fechaNacimiento,
    amigo.Genero,
    amigo.Acercademi,
    departamento.Departamento,
    ciudad.Ciudad,
    preciosporhora.Precio_Hora,
    (
        SELECT foto
        FROM amigo_fotos
        WHERE amigo_fotos.Amigo_idAmigo = amigo.idAmigo
        LIMIT 1
    ) AS foto
FROM 
    amigo
JOIN 
    departamento ON amigo.Departamento_idDepartamento = departamento.idDepartamento
JOIN 
    ciudad ON amigo.Ciudad_idCiudad = ciudad.idCiudad
JOIN 
	 preciosporhora ON amigo.PreciosPorHora_idPreciosPorHora = preciosporhora.idPreciosPorHora
WHERE amigo.idAmigo='${id}' 
`,
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

app.get("/amigohorarioalquiler", (req, res) => {

    const { id } = req.query;
    console.log(id)
    // Consultar todos los departamentos en la base de datos
    db.query(`SELECT * FROM horariodia_amigo WHERE idAmigo='${id}' 
`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigo horario");
            } else {
                res.send(result);
            }
        }
    );
});

app.post("/solicitudalquiler", (req,res)=>{
    const turno = req.body.turno;
    const horas = req.body.horas;
    const fecha = convertirFechaMySQL(req.body.fecha);
    const ubicacion = req.body.ubicacion;
    const motivoAlquiler = req.body.motivoAlquiler;
    const total = req.body.total;
    const idAmigo = req.body.idAmigo;
    const idCliente = req.body.idCliente;
    
    
    console.log(turno);
    console.log(horas);
    console.log(fecha);
    console.log(ubicacion);
    console.log(motivoAlquiler);
    console.log(total);
    console.log(idAmigo);
    console.log(idCliente);

        db.query('INSERT INTO solicitudamigo(Turno,horas,fecha,ubicacion,motivoAlquiler,total,idAmigo,idCliente) VALUES(?,?,?,?,?,?,?,?)',
        [turno,horas[0],fecha,ubicacion,motivoAlquiler,total,idAmigo,idCliente],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Solicitud Registrado con Exito");
            }
        } 
        );
});

//Endpoint para obtener todos los Datos de : AmigoPerfil intereses
app.get("/solicitudescliente", (req, res) => {
    //Obtener Valores de los parámetros de la URL
    const { id } = req.query;
    console.log(id);
    let query=`SELECT solicitudamigo.idSolicitudAmigo,solicitudamigo.Turno,solicitudamigo.horas,solicitudamigo.fecha,solicitudamigo.ubicacion,solicitudamigo.motivoAlquiler,solicitudamigo.total,solicitudamigo.idAmigo,solicitudamigo.idCliente,amigo.Nombre,amigo.Apellido  
    FROM solicitudamigo , amigo 
    WHERE solicitudamigo.idCliente = '${id}' AND  solicitudamigo.idAmigo = amigo.idAmigo`
    console.log(query)
    db.query(query,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al obtener amigo");
            } else {
                res.send(result);
            }
        }
    );
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

function convertirFechaMySQL(fechaTexto) {
    // Parsea la fecha en formato texto
    var fechaObjeto = new Date(fechaTexto);

    // Obtiene los componentes de la fecha
    var año = fechaObjeto.getFullYear();
    var mes = fechaObjeto.getMonth() + 1; // Los meses van de 0 a 11, así que sumamos 1
    var dia = fechaObjeto.getDate();

    // Ajusta el formato de la fecha para MySQL
    var fechaMySQL = año + '-' + (mes < 10 ? '0' : '') + mes + '-' + (dia < 10 ? '0' : '') + dia + ' 00:00:00';

    return fechaMySQL;
}