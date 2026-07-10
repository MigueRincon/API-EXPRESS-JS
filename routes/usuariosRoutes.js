const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/userController')

router.get('/', ctrl.obtenerUsuarios)
router.post('/', ctrl.crearUsuario)

module.exports = router;