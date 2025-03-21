const supabase = require('../config/supabaseClient');
const QRCode = require('qrcode');

exports.crearEquipo = async (nombre, descripcion, estado) => {
    const { data, error } = await supabase
    .from ('equipos')
    .insert([{nombre, descripcion, estado }])
    .select();

    if (error) throw new Error(error.message);
    return data[0];
};

exports.generarQR = (id, estado) => {
    const data = `${id}-${estado}`;
    QRCode.toDataURL(data, (err, url) => {
        if (err) {
            console.log('Error al generar el QR: ', err);
        } else {
            console.log('QR Generado: ', url);

        }
    });
};
