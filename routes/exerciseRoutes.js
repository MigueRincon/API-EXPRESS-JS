const express = require('express');
const router = express.Router();
const {
    obtenerEjercicios,
    obtenerEjerciciosPorGrupoMuscular,
    obtenerEjerciciosPorId,
    crearEjercicio,
    actualizarEjercicio,
    eliminarEjercicio
} = require('../controllers/exerciseController');

// GET - todos los ejercicios
router.get('/', obtenerEjercicios);

// GET - Obtener un ejercicio por grupo muscular
router.get('/grupo-muscular/:grupoMuscular', obtenerEjerciciosPorGrupoMuscular);

// GET - Obtener un ejercicio por ID
router.get('/:id', obtenerEjerciciosPorId);

// POST - Crear un nuevo ejercicio
router.post('/', crearEjercicio);

// PUT - Actualizar un ejercicio
router.put('/:id', actualizarEjercicio);

// DELETE - Eliminar un ejercicio
router.delete('/:id', eliminarEjercicio);

module.exports = router;