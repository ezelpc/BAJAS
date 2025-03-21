// server.js
const express = require('express');
const bodyParser = require('body-parser');
const equipoRoutes = require('./routes/equipoRoutes');
const bajaRoutes = require('./routes/bajaRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', equipoRoutes);
app.use('/api', bajaRoutes);

// Configuración para servir vistas (opcional, en caso de que uses plantillas)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
