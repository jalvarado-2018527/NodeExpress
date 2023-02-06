const express = require('express')
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {

    constructor() {
        // Cariables de configuracion
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuario';
        
        //conectar a base de datos
        this.conectarDB();

        this.middlewares();
        //rutas de mi ap
        this.routes();

  
    }

    //Metodo de conexion a mongo
    async conectarDB(){
        await dbConection();                              
    }


    middlewares(){
        //cors
        this.app.use(cors());


        //lECTURA Y PARSEO DEL BODY
        this.app.use( express.json());
        
        //Directorio publico del Proyecto
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.usuarioPath , require('../routes/usuario'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;