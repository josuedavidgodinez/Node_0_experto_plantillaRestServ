
const {response} = require('express')

const usuariosGet = (req, res = response)=> {
    const {q,nombre = 'No name'  /*param por defecto*/,apikey} = req.query;

    res.json({
        msg : "get api - controlador",
        q,
        nombre,
        apikey
    })
  }

  const usuariosPut = (req, res = response)=> {

    const id = req.params.id

    res.json({
        msg : `put api id ${id} - controlador`
    })
  }


  const usuariosPost = (req, res = response)=> {

    const {nombre , edad} = req.body


    res.json({
        msg : "post api - controlador",
        nombre,
        edad
    })
  }


  const usuariosDelete = (req, res = response)=> {
    res.json({
        msg : "delete api - controlador"
    })
  }





  module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
  }