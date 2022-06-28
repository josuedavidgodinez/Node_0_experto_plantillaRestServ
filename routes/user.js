const { Router } = require('express')

const router = Router();  //con Router creamos rutas 
const { 
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}= require('../controllers/user')



router.get('/', usuariosGet)

  router.put('/:id', usuariosPut)

  router.post('/',  usuariosPost)

  router.delete('/', usuariosDelete)


module.exports = router;