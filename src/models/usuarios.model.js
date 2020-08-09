const conexion = require('../config/connection');

class Usuarios{
    constructor(nuevoUsuario) {
        this.correo = nuevoUsuario.correo;
        this.clave = nuevoUsuario.clave;
        this.fechacreacion = nuevoUsuario.fechacreacion;
        this.tipousuario = nuevoUsuario.tipousuario;
    }

    static crearUsuario(nuevoUsuario, result){
        conexion.query(
            "INSERT INTO usuarios(correo,clave,fechacreacion,tipousuario) VALUES (?,?,?,?)",
            [nuevoUsuario.correo,nuevoUsuario.clave,nuevoUsuario.fechacreacion,nuevoUsuario.tipousuario],
            (err, res) => {
                if (err){
                    result(err, null);
                }else{
                    result(null, res);
                }
            }
        );
    }
}

module.exports = Usuarios;