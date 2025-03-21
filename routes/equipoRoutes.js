const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipoController');

router.post('/equipos', equipoController.crearEquipo);

module.exports = router;
