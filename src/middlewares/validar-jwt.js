const jwt = require('jsonwebtoken');
const config=require('../config/index')
const validarJWT= async (req=request,res=response,next) => {

    const token= req.header('token');
    if (!token){
        res.status(401).json({msg: 'no hay token en la peticion ' })
    }

    try{
       const {uid}= jwt.verify(token,config.server.JWT)
        next();

    }catch(error){
        console.log(error);
        res.status(401).json({msg:"token no valido"})

    }
    console.log(token)
 

}


module.exports = {
    validarJWT
}