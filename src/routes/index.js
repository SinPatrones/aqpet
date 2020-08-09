const express = require('express');
const router = express.Router();

// GET POST PUT DELETE
const Usuarios = require('../controllers/usuarios.controller');

router.get('/saludo', (req, res) => {
    res.send("asdasdaasd");
});

router.post('/crear', Usuarios.crearUsuarioSimple);


module.exports = router;
