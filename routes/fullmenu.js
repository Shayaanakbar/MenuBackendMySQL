const express = require('express');
const mySqlConnection = require('../connection');
const Router = express.Router();

// get full menu
Router.get('/', (req, res) => {
    mySqlConnection.query("", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})

module.exports = Router
