const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: {
            type: String,
            required: true,
            unique: true
        }
    },
    creado: {
        type: Date,
        default: Date.now
    },
    activo: {
        type: Boolean,
        default: true
    },
    correo: {
        type: String
    }
})