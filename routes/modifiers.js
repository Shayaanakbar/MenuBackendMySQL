const express = require('express');
const mySqlConnection = require('../connection');
const Router = express.Router();

// get all modifiers
Router.get('/', (req, res) => {
    mySqlConnection.query("SELECT * from modifiers ", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})

// Get an specific modifiers
Router.get('/:id', (req, res) => {
    mySqlConnection.query("SELECT * from modifiers WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})

module.exports = Router
