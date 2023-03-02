const con = require('../../config/database.js')
const nodemailer = require('nodemailer');

const ContactUs = () => {
    return {


        allcontactus: async (req, res) => {
            con.query("select * from a", (err, result) => {
                if (err) {
                    res.send('error: ' + err)
                } else {
                    res.send(result);
                }
            })
        },
        createcontactus: async (req, res) => {

            const value = [req.body.name, req.body.email, req.body.phone, req.body.message]

            con.query('INSERT INTO a(name , email , phone , message) VALUES(?, ?, ?, ?)', value, (err, result) => {
                console.log("5")
                if (err) {
                    console.log(err)
                } else {
                    res.send("posted")
                }
            })
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: 'tusharparmar10050@gmail.com',
                    pass: 'zcozedhsrhtjpfzm'
                }
            });
            let info = await transporter.sendMail({
                from: '"Tushar Parmar 👻" <zoey43@ethereal.email>',
                to: req.body.email, 
                subject: "Thank you for contact us",
                text: "We Will Give You Response Soon As Posibble.",
                // html: "<b>Hello world?</b>", // html body
            });


        }
    }
}

module.exports = ContactUs