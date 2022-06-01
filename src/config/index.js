
require ('dotenv').config();

config={
    server:{
        PORT: process.env.PORT,
        JWT: process.env.SECRETORPRIVATEKEY
    }

}


module.exports=config
