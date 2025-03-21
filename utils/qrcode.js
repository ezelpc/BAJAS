const QRCode = require('qrcode');

exports.generarQR = (id, estado) => {
    const data = `${id}-${estado}`;
    QRCode.toDataURL(data, (err, url) => {
      if (err) {
        console.log('Error al generar QR:', err);
      } else {
        console.log('QR generado:', url);
       
      }
    });
  };
