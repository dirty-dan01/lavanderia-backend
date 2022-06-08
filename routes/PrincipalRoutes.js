let express = require('express')
let router = express.Router()
let clienteService = require('../services/PrincipalService')

router.post('/cliente', clienteService.createCliente) // http://localhost:3000/api/cliente
router.post('/usuario', clienteService.createUser) // http://localhost:3000/api/usuario
router.post('/prenda', clienteService.createPrenda) // http://localhost:3000/api/prenda

router.get('/cliente/:id', clienteService.getCliente)
router.get('/usuario/:id', clienteService.getUsuario)
router.get('/prenda/:id', clienteService.getPrenda)
router.get('/usuarios', clienteService.getUsuarios)

router.put('/cliente', clienteService.updateCliente)
router.put('/usuario', clienteService.updateUsuario)
router.put('/prenda', clienteService.updatePrenda)

router.delete('/cliente/:id', clienteService.deleteCliente)
router.delete('/usuario/:id', clienteService.deleteUsuario)
router.delete('/prenda/:id', clienteService.deletePrenda)

module.exports = router