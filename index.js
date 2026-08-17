const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conexión a la Base de Datos de MOVIYA (Pasajeros y Choferes)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('¡Conectado con éxito a MongoDB Atlas (Moviya-Data)!'))
.catch(err => console.error('Error al conectar a la base de datos:', err));

// Ruta de prueba
app.get('/', (req, res) => {
res.send('¡El servidor de MOVIYA está encendido y conectado a la base de datos!');
});

app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});
