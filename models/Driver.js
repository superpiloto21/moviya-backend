const mongoose = require('mongoose');

// Este es el formulario base para registrar a cada Conductor/Chofer
const DriverSchema = new mongoose.Schema({
nombre: {
type: String,
required: true
},
correo: {
type: String,
required: true,
unique: true
},
celular: {
type: String,
required: true
},
contrasena: {
type: String,
required: true
},
// Datos específicos del vehículo para seguridad del pasajero
autoModelo: {
type: String,
required: true // Ejemplo: "Fiat Cronos"
},
autoPatente: {
type: String,
required: true,
unique: true // No puede haber dos autos con la misma patente
},
estado: {
type: String,
enum: ['libre', 'ocupado', 'desconectado'],
default: 'desconectado' // Arranca desconectado hasta que abra la app
},
fechaRegistro: {
type: Date,
default: Date.now
}
});

module.exports = mongoose.model('Driver', DriverSchema);
