const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({

    grupoMuscular: {
        type: String,
        required: [true, 'El grupo muscular es requerido'],
        enum: ['Pecho', 'Espalda', 'Piernas', 'Hombros', 'Brazos', 'Abdominales', 'Cardio', 'Otros']
    },

    nombre: {
        type: String,
        required: [true, 'El nombre del ejercicio es requerido'],
        trim: true,
        minlength: [2, 'El nombre del ejercicio debe tener al menos 2 caracteres'],
        maxlength: [100, 'El nombre del ejercicio no puede exceder 100 caracteres']
    },

    series: {
        type: Number,
        required: [true, 'El número de series es requerido'],
        min: [1, 'El número de series debe ser al menos 1'],
        max: [10, 'El número de series no puede exceder 10'],
        default: 3
    },

    repeticiones: {
        type: Number,
        required: [true, 'El número de repeticiones es requerido'],
        min: [1, 'El número de repeticiones debe ser al menos 1'],
        max: [100, 'El número de repeticiones no puede exceder 100'],
        default: 10
    },

}, { timestamps: true });

module.exports = mongoose.model('Exercise', exerciseSchema);