const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db'
})
console.log('1')
con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connection established")
    }
})

module.exports = con