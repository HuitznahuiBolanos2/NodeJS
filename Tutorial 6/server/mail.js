var nodemailer = require('nodemailer');

 var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false,
    auth: {
      user: 'honicsking@gmail.com',
      pass: 'Haulitarenas2@'
    },
    secureConnection: 'false',
    tls: {
        ciphers: 'SSLv3'
    }
  });

  var mailOptions = {
    from: 'honicsking@gmail.com',
    to: 'Huitznahui_2@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hello World'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      console.log('Email -->'+ mailOptions);
    }
  }); 