const { registrarBaja } = require('../models/bajaModel');
const { enviarNotificacion } = require('../utils/nodemailer');

exports.registrarBaja = async (req, res) => {
    const { equipo_id, motivo } = req.body;
    try {
        const baja = await registrarBaja(equipo_id, motivo);

        enviarNotificacion(equipo_id);
        res.status(201).json(baja);
    }catch {
        res.status(500).json({error: error.message});
    }
};
