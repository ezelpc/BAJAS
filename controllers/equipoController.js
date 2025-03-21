const { crearEquipo, generarQR } = require('../models/equipoModel');

exports.crearEquipo = async (req, res) => {
    try{
    const { nombre, descripcion, estado } = req.body;

    generarQR(equipo.id, estado);

    res.status(201).json(equipo);
}catch (error){
res.status(500).json({error: error.message});
}
};
