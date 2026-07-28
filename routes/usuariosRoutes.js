const express = require('express');
const router = express.Router();
const {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require('../controllers/userController');
const { proteger, autorizar } = require('../middleware/auth');

//GET - Obtener todos los usuarios 
router.get('/',obtenerUsuarios);

// GET - Obtener un usuario por ID
// PROTEGIDA: Requiere token valido
router.get('/:id', proteger,obtenerUsuarioPorId);

// POST - Crear un nuevo usuario
router.post('/',crearUsuario);

// Put - Actualizar un usuario
router.put('/:id', proteger, autorizar('admin'), actualizarUsuario);

// DELETE - Eliminar un usuario
router.delete('/:id', proteger, autorizar('admin'), eliminarUsuario);

module.exports = router;
