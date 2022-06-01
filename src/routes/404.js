const {Router}=require('express');


const router= Router()


router.get('/*', (req,res)=>{return res.status(404).json({
    msg: 'ruta incorrecta' }
) });

 module.exports=router