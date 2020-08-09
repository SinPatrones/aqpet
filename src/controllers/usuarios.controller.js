const Usuarios = require('../models/usuarios.model');

exports.crearUsuarioSimple = (req, res) => {
    let nuevoUsuario = new Usuarios(req.body);
    nuevoUsuario.fechacreacion = new Date();
    nuevoUsuario.tipousuario = 0;

    Usuarios.crearUsuario(nuevoUsuario, (err, result) => {
        if (err){
            res.send("ERROR AL REGISTRAR");
        }else{
            res.send("TODO BIEN");
        }
    });

};