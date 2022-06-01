
const {generarJWT}= require('../helpers/generar-jwt')
async function auth(req,res){
    const {username}= req.body;
    try{
        if (username!=='elias'){
            return res.status(400).json({
                msg: 'Escribi elias mierda -.-'
            })
        }

       const token= await generarJWT( username );

       res.json({
            username,
           token
       })

        
    }catch(error){
        console.log(error)   
        res.status(500).json ({
        msg:'Comunicate con el administrador'
           }
    )}
}

function test(req,res){
    res.json({
        message: "OK",

   })
}

module.exports= {auth,test}