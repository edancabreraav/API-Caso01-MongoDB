const express = require('express')
const router = express.Router()

const oficinaController = require('../controllers/oficina')

//Ruta para Q1
router.get('/', oficinaController.getOficinas);

//Ruta para Q2
router.get('/envios/transito/:oficina_id', oficinaController.getEnviosTransitoPorOficina);

//Ruta para Q3
router.get('/envios/porTipo/:tipoEnvio', oficinaController.getEnviosPorTipo);

//Ruta para Q4
router.get('/envios/cliente/:curp_id', oficinaController.getEnviosPorCliente);

//Ruta para Q5
router.get('/envios/oficina/:oficina_id', oficinaController.getClientesEnviosPorOficina);

//Ruta para Q6
router.get('/envios/estatus/entregados', oficinaController.getEnviosEntregados);

//Ruta para Q7
router.get('/envios/terrestres', oficinaController.getClientesEnviosTerrestreGeneral);

//Ruta para Q8
router.get('/envios/express/:oficina_id', oficinaController.getClientesEnviosExpress);

//Ruta para añadir un nuevo envío
router.post('/:oficina_id/envios/:curp_id', oficinaController.postEnvio);

module.exports = router;
