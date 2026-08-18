const mongoose = require('mongoose');

// Este es el formulario base para registrar a cada Pasajero
const PassengerSchema = new mongoose.Schema({
nombre: {
type: String,
required: true
},
correo: {
type: String,
required: true,
unique: true // No permite dos pasajeros con el mismo correo
},
celular: {
type: String,
required: true
},
contrasena: {
type: String,
required: true
},
fechaRegistro: {
type: Date,
default: Date.now
}
});