const supabase = require('../config/supabaseClient');

exports.registrarBaja = async ( equipo_id, motivo) => {
    const { data, error } = await supabase
    .from('historial_bajas')
    .insert([{equipo_id, motivo }])
    .select();

    if (error) throw new Error(error.message);
    return data[0];
};
