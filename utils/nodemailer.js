const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

exports.enviarNotificacion = (equipoId) => {
    const mailOptions = {
      from: '',
      to: '',  
      subject: '',
      text: `El equipo con ID ${equipoId} ha sido dado de baja.`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error al enviar el email:', error);
      } else {
        console.log('Correo enviado: ' + info.response);
      }
    });
  };
