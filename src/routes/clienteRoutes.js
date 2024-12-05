const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/cliente');

//Ruta para añadir un cliente
router.post('/', clienteController.postCliente);

module.exports = router;