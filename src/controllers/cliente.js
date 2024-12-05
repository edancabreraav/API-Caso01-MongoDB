const Cliente = require('../models/cliente');

//Controlador para añadir un nuevo cliente
exports.postCliente = async (req, res) => {
    const {curp_id, nombres, apellidos, email, envios} = req.body;

    try {
        //Verificar si el cliente ya existe
        const existingCliente = await Cliente.findOne({ curp_id });
        if (existingCliente) {
            return res.status(400).json({ message: `El cliente con el CURP ${curp_id} ya existe` });
        }

        const newCliente = new Cliente({
            curp_id,
            nombres,
            apellidos,
            email,
            envios
        })

        await newCliente.save();

        res.status(201).json({message:'Cliente añadido', cliente: newCliente});
    } catch (error) {
        res.status(500).json({message: 'Error al añadir al cliente', error:error.message});
    }
}