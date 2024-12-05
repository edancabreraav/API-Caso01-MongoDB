const Oficina = require('../models/oficina');
const Cliente = require('../models/cliente');

//Controlador Q1.- Listar los datos de todas las oficinas
exports.getOficinas = async (req, res) => {
    try {
        const oficinas = await Oficina.find({},{_id:0, envios:0});
        res.status(200).json(oficinas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Controlador Q2.- Listar los envíos realizados en determinada oficina con estatus en tránsito
exports.getEnviosTransitoPorOficina = async (req, res) => {
    const {oficina_id} = req.params;
    try {
        const enviosTransito = await Oficina.aggregate([
            { $match: { 'oficina_id': oficina_id } }, //Filtra los documentos por el ide de la oficina
            { $unwind: '$envios' }, //Deglosa el array envios en documentos individuales
            { $match: {'envios.estatus': 'tránsito'} }, //Filtra solo los envíos con el estatus tránsito
            { $project: { _id:0, envio: '$envios' } } //Excluye el campo _id y proyecta solo el campo envío
        ])
        res.status(200).json(enviosTransito)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//Controlador Q3.- Listar los envíos que utilizan un tipo específico de envío
exports.getEnviosPorTipo = async (req, res) => {
    const {tipoEnvio} = req.params;
    try {
        const envios = await Oficina.aggregate([
            { $unwind: "$envios" }, // Desglosa el array "envios"
            { $match: { "envios.tipo_envio.descripcion": tipoEnvio } }, // Filtra por el tipo de envío
            { $project: { _id: 0, envio: "$envios" } } // Proyecta solo el envío sin el _id del documento
          ]);
        res.status(200).json(envios);
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}

//Controlador Q4.- Listar los clientes que han realizado envios en una determinada oficina
exports.getEnviosPorCliente = async (req, res) => {
    const {curp_id} = req.params;
    try {
        const envios = await Oficina.aggregate([
            { $unwind: '$envios' },
            { $match: { 'envios.cliente.curp_id': curp_id } },
            { $project: { _id:0, envio:'$envios' } }
        ])
        res.status(200).json(envios);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

//Controlador para Q5.- Listar los clientes que han realizado envíos en una determinada oficina
exports.getClientesEnviosPorOficina = async (req, res) => {
    const {oficina_id} = req.params;
    try {
        const envios = await Oficina.aggregate([
            { $match: {'oficina_id': oficina_id} },
            { $unwind: '$envios' },
            { $group: {
                '_id': '$envios.cliente.curp_id',
                'nombres': {$first:'$envios.cliente.nombres'},
                'apellidos': {$first: '$envios.cliente.apellidos'},
                'email': {$first: '$envios.cliente.email'}    
            }}
        ])
        res.status(200).json(envios);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Controlador para Q6.- Listar los envíos de todas las oficinas con estatus de entregado
exports.getEnviosEntregados = async (req, res) => {
    try {
        const enviosEntregados = await Oficina.aggregate([
            { $unwind: "$envios" },
            { $match: { "envios.estatus": "entregado" } },
            { $project: { _id: 0, envio: "$envios" } }
          ])
        res.status(200).json(enviosEntregados);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Controlador para Q7.- Listar los clientes y sus envíos que se han remitido por el servicio terrestre considerando todas las oficinas
exports.getClientesEnviosTerrestreGeneral = async (req, res) => {
    try {
        const envios = await Oficina.aggregate([
            { $unwind: "$envios" },
            { $match: { "envios.tipo_envio.descripcion": "terrestre" } },
            { $project: { _id: 0, cliente: "$envios.cliente", envio: "$envios" } }
          ])
        res.status(200).json(envios);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Controlador para Q8.- Listar los clientes y sus envíos que se han remitido por el servicio express considerando una oficina en específico
exports.getClientesEnviosExpress = async (req, res) => {
    const {oficina_id} = req.params;
    try {
        const clientes = await Oficina.aggregate([
            { $match: { oficina_id: oficina_id } },
            { $unwind: "$envios" },
            { $match: { "envios.tipo_envio.descripcion": "express" } },
            { $project: { _id: 0, cliente: "$envios.cliente", envio: "$envios" } }
          ]);
          res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//Controlador para añadir un nuevo envío
exports.postEnvio = async (req, res) => {
    const {oficina_id, curp_id} = req.params;
    const {
        envio_id,
        fecha_envio,
        destino,
        tipo_envio,
        cliente,
        peso,
        dimensiones,
        costo,
        estatus
    } = req.body;

    try {
        const existingCliente = await Cliente.findOne({ curp_id });
        if (!existingCliente) {
            return res.status(404).json({ message: `El cliente al que tratas de añadir un envío no existe` });
        }

        const oficina = await Oficina.findOne({ oficina_id });
        if (!oficina) {
            return res.status(404).json({ message: `Oficina con ID ${oficina_id} no encontrada` });
        }

        const newEnvio = {
            envio_id,
            fecha_envio,
            destino,
            tipo_envio,
            cliente,
            peso,
            dimensiones,
            costo,
            estatus
        }

        oficina.envios.push(newEnvio);
        await oficina.save();

        res.status(201).json({message: 'Envío añadido', envio: newEnvio});
    } catch (error) {
        res.status(500).json({message: 'Error al añadir el envio', error: error.message})
    }
}