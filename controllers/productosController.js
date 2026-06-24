const productos = [
    { id: 1, nombre: 'Laptop', precio: 2500000 },
    { id: 2, nombre: 'Mouse', precio: 45000 },
]

const obtenerTodos = (req, res) => {
    res.status(200).json(productos)
}

const crearProducto = (req, res) => {
    const { nombre, precio } = req.body
    const nuevo = {
        id: productos.length + 1,
        nombre,
        precio,
    }
    productos.push(nuevo)
    res.status(201).json(nuevo)
}

module.exports = { obtenerTodos, crearProducto }