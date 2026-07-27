const express = require('express');
const router = express.Router();
const { registrar } = require('../controllers/authController');

// POST - Registrar nuevo usuario
router.post('/register', registrar);

module.exports = router;