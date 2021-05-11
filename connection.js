const mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "menu",
    multipleStatements: true
});

mysqlConnection.connect(function (err) {
    if (err) throw err;
    console.log('Connected')
})

module.exports = mysqlConnection;
