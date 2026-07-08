const mongoose = require('mongoose');

const conectaDB = async () => {
    try {
        const conexion = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('✅ MongoDB conectada:', conexion.connection.host);
        return conexion;
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = conectaDB;