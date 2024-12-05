const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const clienteSchema = new mongoose.Schema({
    curp_id: {type: String, required: true},
    nombres: {type: String},
    apellidos: {
        paterno: {type: String},
        materno: {type: String}
    },
    email: {type: String},
    envios: [
        {
            envios_id: {type: String},
            origen: {type: String},
            destino: {type: String},
            tipo_envio: {type: String},
            fecha_envio: {type: String},
            peso: {type: Number},
            dimensiones:{
                alto: {type: Number},
                ancho: {type: Number},
                profundidad: {type: Number}
            },
            costo: {type: Number},
            estatus: {type: String}
        }
    ]
},
{ versionKey: false }
)

const Cliente = model('clientes', clienteSchema);
module.exports = Cliente;