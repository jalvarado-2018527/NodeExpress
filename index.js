require('dotenv').config()

//Importacion de configuracion de server
const Server = require("./models/server")

const servidorIniciado = new Server();

servidorIniciado.listen();