const express = require('express');
const mysql = require('mysql');
const contactRoute = require('./api/routes/contactus.route.js')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
const port = 4500 
const contactus = require('./api/controllers/contactus.controller.js')


app.use('/api/contact-us', contactRoute)

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }else {
        console.log("on port " + port)
    }
})