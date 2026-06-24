const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/productosController')

router.get('/', ctrl.obtenerTodos)   // GET /productos
router.post('/', ctrl.crearProducto) // POST /productos

module.exports = router
