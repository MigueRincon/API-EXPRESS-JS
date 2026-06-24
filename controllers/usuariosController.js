const usuarios = [
    { id: 1, nombre: 'Ana Garcia', email: 'ana@mail.com' },
    { id: 2, nombre: 'Luis Perez', email: 'luis@mail.com' },
]

const obtenerUsuarios = (req, res) => {
    res.status(200).json(usuarios)
}

const crearUsuario = (req, res) => {
    const { nombre, email } = req.body
    if (!nombre || !email) {
        return res.status(400).json({ error: 'Faltan nombre o email' })
    }

    const nuevo = {
        id: usuarios.length + 1,
        nombre,
        email,
    }

    usuarios.push(nuevo)
    res.status(201).json(nuevo)
}

module.exports = { obtenerUsuarios, crearUsuario }