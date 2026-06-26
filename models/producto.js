const mongoose = require('mongoose')

// 1. Definir el schema - la "plantilla" de cada documento
const productoSchema = new mongoose.Schema(
    {
        // Campo obligatorio de texto
        nombre: {
            type: String,
            required: [true, 'El nombre del producto es obligatorio'],
            trim: true,
            minlength: 2,
            maxlength: 100
        },

        // Número con valor mínimo
        precio: {
            type: Number,
            required: [true, 'El precio es obligatorio'],
            min: [0, 'El precio no puede ser negativo']
        },

        // Texto con opciones fijas (enum)
        categoria: {
            type: String,
            enum: ['electronica', 'ropa', 'alimentos', 'hogar'],
            default: 'hogar'
        },

        // Booleano con valor por defecto
        disponible: {
            type: Boolean,
            default: true
        },

        // Número entero simple
        stock: {
            type: Number,
            default: 0
        },

        // Arreglo de strings 
        tags: [String]
    },

    {
        // Opciones del schema
        timestamps: true  // agrega automaticamente createdAt y updatedAt
    }
);

// 2. Crear el modelo a partir del schema
// Primer argumento: nombre de la coleccion (MongoDB la pone en minusculas + plural -> "productos")
// segundo argumento: el schema
const producto = mongoose.model('producto', productoSchema)

// 3. Exportar el modelo para usarlo en las rutas
module.exports = producto;