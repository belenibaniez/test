const express = require('express');
const cors = require('cors');
const config= require('../config/index')

class Server{
    constructor (){
        this.app =express();
        this.port= config.server.PORT
        this.paths={
            test:'/api/v1',
            r404:'/'
    
        }
      

        //conectarme a la base de datos
        //this.conectarDB()


        //Middlewares

        this.middlewares()

    



        //rutas de la app



        this.routes();
    }


    middlewares(){
        //directorio publico
        this.app.use(cors());
        this.app.use(express.json());

      
    }

    async conectarDB(){
        await dbConnection()

    }

    routes(){
        this.app.use( this.paths.test, require('../routes/routes'));
        this.app.use( this.paths.r404, require('../routes/404'));

    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }



}

module.exports= Server