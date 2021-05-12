const express = require('express');
const mySqlConnection = require('../connection');
const Router = express.Router();

// get full menu
Router.get('/', (req, res) => {
    const sql = `SELECT
                     items.id,
                     items.menu_description AS title,
                     modifiers.id,
                     modifiers.item_id,
                     modifiers.description
                 FROM items
                 JOIN modifiers
                 ON items.menu_id = modifiers.menu_id`
    mySqlConnection.query(sql, (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})

module.exports = Router

