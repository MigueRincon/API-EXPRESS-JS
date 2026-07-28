const express = require('express');
const router = express.Router();
const { registrar, login } = require('../controllers/authController');

// POST - Registrar nuevo usuario
router.post('/register', registrar);
router.post('/login', login);

module.exports = router;
