const express = require('express');
const mySqlConnection = require('../connection');
const Router = express.Router();

// get all items
Router.get('/', (req, res) => {
    mySqlConnection.query("SELECT * from items", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})


module.exports = Router
