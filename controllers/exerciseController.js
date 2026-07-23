const Exercise = require('../models/exercise');

// GET - Obtener todos los ejercicios
exports.obtenerEjercicios = async (req, res) => {
    try {
        const ejercicios = await Exercise.find();

        res.status(200).json({
            exitoso: true,
            cantidad: ejercicios.length,
            datos: ejercicios
        });
    } catch (error) {
        res.status(500).json({
            exitoso: false,
            mensaje: 'Error al obtener ejercicios',
            error: error.message
        });
    }
};

// GET - Obtener un ejercicio por grupo muscular
exports.obtenerEjerciciosPorGrupoMuscular = async (req, res) => {
    try {
        const { grupoMuscular } = req.params;

        const ejercicios = await Exercise.find({ grupoMuscular: grupoMuscular });

        res.status(200).json({
            exitoso: true,
            cantidad: ejercicios.length,
            datos: ejercicios
        });
    } catch (error) {
        res.status(500).json({
            exitoso: false,
            mensaje: 'Error al obtener ejercicios',
            error: error.message
        });
    }
};

// GET - Obtener un ejercicio por ID
exports.obtenerEjerciciosPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const ejercicio = await Exercise.findById(id);

        if (!ejercicio) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'Ejercicio no encontrado'
            });
        }

        res.status(200).json({
            exitoso: true,
            datos: ejercicio
        });
    } catch (error) {
        res.status(500).json({
            exitoso: false,
            mensaje: 'Error al obtener ejercicio',
            error: error.message
        });
    }
};

// POST - Crear un nuevo ejercicio
exports.crearEjercicio = async (req, res) => {
    try {
        const { grupoMuscular, nombre, series, repeticiones } = req.body;

        const nuevoEjercicio = new Exercise({
            grupoMuscular,
            nombre,
            series,
            repeticiones
        });

        const ejercicioGuardado = await nuevoEjercicio.save();

        res.status(201).json({
            exitoso: true,
            datos: ejercicioGuardado
        });
    } catch (error) {
        res.status(500).json({
            exitoso: false,
            mensaje: 'Error al crear ejercicio',
            error: error.message
        });
    }
};

// PUT - Actualizar un ejercicio
exports.actualizarEjercicio = async (req, res) => {
    try {
        const { id } = req.params;
        const { grupoMuscular, nombre, series, repeticiones } = req.body;

        const ejercicioActualizado = await Exercise.findByIdAndUpdate(
            id,
            datosActualizados,
            { new: true, runValidators: true }
        );

        if (!ejercicioActualizado) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'Ejercicio no encontrado'
            });
        }

        res.status(200).json({
            exitoso: true,
            datos: ejercicioActualizado
        });
    } catch (error) {
        res.status(400).json({
            exitoso: false,
            mensaje: 'Error al actualizar ejercicio',
            error: error.message
        });
    }
};

// DELETE - Eliminar un ejercicio
exports.eliminarEjercicio = async (req, res) => {
    try {
        const { id } = req.params;

        const ejercicioEliminado = await Exercise.findByIdAndDelete(id);

        if (!ejercicioEliminado) {
            return res.status(404).json({
                exitoso: false,
                mensaje: 'Ejercicio no encontrado'
            });
        }

        res.status(200).json({
            exitoso: true,
            mensaje: 'Ejercicio eliminado',
            datos: ejercicioEliminado
        });
    } catch (error) {
        res.status(500).json({
            exitoso: false,
            mensaje: 'Error al eliminar ejercicio',
            error: error.message
        });
    }   
};
