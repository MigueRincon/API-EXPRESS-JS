const express = require('express');
const router = express.Router();
const { registrar, login, miPerfil } = require('../controllers/authController');
const { proteger } = require('../middleware/auth');

// POST - Registrar nuevo usuario
router.post('/register', registrar);
router.post('/login', login);
router.get('/me', proteger, miPerfil); // protegida

module.exports = router;
