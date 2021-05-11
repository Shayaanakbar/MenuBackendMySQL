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

// Delete an menu
Router.delete('/:id', (req, res) => {
    mySqlConnection.query("DELETE FROM menus WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send('Deleted Successfully');
        } else {
            console.log(err)
        }
    })
})

//edit an menu
Router.put('/', (req, res) => {
    mySqlConnection.query('UPDATE `menu`  SET `name`=?, `description`=?', [req.body.name, req.body.description])
})

module.exports = Router
