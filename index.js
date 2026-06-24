const express = require('express')   // 1. Importar Express
const productosRoutes = require('./routes/productosRoutes')
const usuariosRoutes = require('./routes/usuariosRoutes')

const app = express()              // 2. Crear la aplicación
app.use(express.json())

// Montar las rutas bajo el prefijo /productos
app.use('/productos', productosRoutes)
app.use('/usuarios', usuariosRoutes)

app.listen(3000, () => 
    console.log('🚀 Servidor en :3000'))