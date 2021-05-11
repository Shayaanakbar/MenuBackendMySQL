const express = require('express');
const mySqlConnection = require('../connection');
const Router = express.Router();

// get all menus
Router.get('/', (req, res) => {
    mySqlConnection.query("SELECT * from menus", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})

// Get an menu
Router.get('/:id', (req, res) => {
    mySqlConnection.query("SELECT * from menus WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})

module.exports = Router
