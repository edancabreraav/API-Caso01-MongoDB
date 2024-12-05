const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const oficinasSchema = new mongoose.Schema ({
    oficina_id: {type: String, required: true, unique: true},
    nombre: {type: String},
    direccion:{
        calle: {type: String},
        numero: {type: Number},
        ciudad: {type: String},
        cp: {type: Number}
    },
    telefono: {type: String},
    email: {type: String},
    envios: [
        {
            envio_id: {type: String, required: true},
            fecha_envio: {type: String},
            destino: {type: String},
            tipo_envio:{
                descripcion: {type: String},
                precio_km: {type: Number},
                tiempo_entrega: {type: String}
            },
            cliente: {
                curp_id: {type: String},
                nombre: {type: String},
                apellidos: {
                    paterno: {type: String},
                    materno: {type: String}
                },
                email: {type: String},
            },
            peso: {type: String},
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

const Oficina = model('oficinas', oficinasSchema);
module.exports = Oficina;