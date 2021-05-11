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

// Get an specific items
Router.get('/:id', (req, res) => {
    mySqlConnection.query("SELECT * from items WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
});

// delete an items
Router.delete('/:id', (req, res) => {
    mySqlConnection.query("DELETE FROM items WHERE id = ?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send('Deleted Successfully');
        } else {
            console.log(err)
        }
    })
});

// add to items
Router.post('/', (req, res) => {
    var postData = req.body;
    mySqlConnection.query('INSERT INTO items SET ?', postData, function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    })
});


module.exports = Router
