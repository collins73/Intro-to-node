var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'collinsd73@gmail.com',
        pass: 'Boaz**1973'
    }
});

var mailOptions = {
    from: 'collinsd73@gmail.com',
    to: 'demayne.collins@navy.mil',



    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});