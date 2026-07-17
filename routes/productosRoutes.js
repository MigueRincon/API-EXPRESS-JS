const express = require('express');
const router = express.Router();
const {
    obtenerProductos,
    obtenerProductosPorCategoria,
    obtenerProductosPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/productController');

// GET - todos los productos
router.get('/', obtenerProductos);

// GET - Obtener un producto por categoria
router.get('/categoria/:categoria', obtenerProductosPorCategoria);

// GET - Obtener un producto por ID
router.get('/:id', obtenerProductosPorId);

// POST - Crear un nuevo producto
router.post('/', crearProducto);

// PUT - Actualizar un producto
router.put('/:id', actualizarProducto);

// DELETE - Eliminar un producto
router.delete('/:id', eliminarProducto);

module.exports = router;