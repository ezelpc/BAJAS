// routes/bajaRoutes.js
const express = require('express');
const router = express.Router();
const bajaController = require('../controllers/bajaController');

// Ruta para registrar una baja
router.post('/bajas', bajaController.registrarBaja);

module.exports = router;
