// cargar variables de entorno PRIMERO (antes de cualquier import)
require('dotenv').config()

const express = require('express')   // 1. Importar Express
const mongoose = require('mongoose')

const app = express()              // 2. Crear la aplicación
app.use(express.json())

//conexion a MongoDB Atlas
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado a MongoDB Atlas')
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error.message)
        process.exit(1) //detener la app si no hay conexion
    })

// Importar rutas
const productosRoutes = require('./routes/productosRoutes')
const usuariosRoutes = require('./routes/usuariosRoutes')

// ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'API funcionando', db: 'MongoDB Atlas' })
})

// Montar las rutas bajo el prefijo /productos
app.use('/productos', productosRoutes)
app.use('/usuarios', usuariosRoutes)

// levantar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})