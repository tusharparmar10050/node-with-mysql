const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    
    res.send("i am sending mail")
}

module.exports = sendMail