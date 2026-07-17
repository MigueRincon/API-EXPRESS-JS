const express = require('express');
const router = express.Router();
const {
    obtenerUsuarios,
    obtenerUsuariosPorId,
    crearUsuario,
    atualizarUsuario,
    eliminarUsuario
} = require('../controllers/userController');

//GET - Obtener todos los usuarios 
router.get('/', obtenerUsuarios);

// GET - Obtener un usuario por ID
router.get('/:id', obtenerUsuarioPorId);

// POST - Crear un nuevo usuario
router.post('/',crearUsuario);

// Put - Actualizar un usuario
router.put('/:id', actualizarUsuario);

// DELETE - Eliminar un usuario
router.delete('/:id', eliminarUsuario);

module.exports = router;