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

// delete an modifiers
Router.delete('/:id', (req, res) => {
    mySqlConnection.query("DELETE FROM modifiers WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send('Deleted Successfully');
        } else {
            console.log(err)
        }
    })
});

// add to modifiers
Router.post('/', (req, res) => {
    var postData = req.body;
    mySqlConnection.query('INSERT INTO modifiers SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
});

//edit an modifiers
Router.put('/', (req, res) => {
    mySqlConnection.query('UPDATE `menu`  SET `name`=?, `description`=?', [req.body.menu_id, req.body.item_id, req.body.description])
})

module.exports = Router
