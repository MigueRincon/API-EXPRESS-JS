const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Función auxiliar: generar un token JWT
const generarToken = (usuario) => {
  return jwt.sign(
    { id: usuario._id, rol: usuario.rol },   // payload
    process.env.JWT_SECRET,                   // clave secreta
    { expiresIn: process.env.JWT_EXPIRES_IN } // expiración
  );
};

// POST /api/auth/register
exports.registrar = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // 1. Validar que vengan los datos
    if (!nombre || !email || !password) {
      return res.status(400).json({
        exitoso: false,
        mensaje: 'Nombre, email y contraseña son requeridos'
      });
    }

    // 2. Verificar si el email ya está registrado
    const usuarioExiste = await User.findOne({ email });
    if (usuarioExiste) {
      return res.status(400).json({
        exitoso: false,
        mensaje: 'Este email ya está registrado'
      });
    }

    // 3. Crear el usuario (el hook cifra la contraseña solo)
    const usuario = await User.create({ nombre, email, password });

    // 4. Generar token para que entre directo sin re-login
    const token = generarToken(usuario);

    // 5. Responder (sin enviar la contraseña)
    res.status(201).json({
      exitoso: true,
      mensaje: 'Usuario registrado exitosamente',
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    });
  } catch (error) {
    res.status(500).json({
      exitoso: false,
      mensaje: 'Error al registrar usuario',
      error: error.message
    });
  }
}; 