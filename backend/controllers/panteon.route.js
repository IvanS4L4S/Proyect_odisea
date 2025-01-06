//defino controlador para el manejo de CRUD
const panteonCtrl = require('./../controllers/panteon.controller'); 
//creamos el manejador de rutas
const express = require('express'); 
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', panteonCtrl.getPanteon);
router.post('/', panteonCtrl.createPanteon);
router.get('/:id', panteonCtrl.getPanteon);
router.put('/:id', panteonCtrl.editPanteon);
router.delete('/:id', panteonCtrl.deletePanteon); 
//exportamos el modulo de rutas
module.exports = router;