const express = require('express');
const bodyParser = require('body-parser');

// item routes
const menuRoutes = require('./routes/menu');
const itemRoutes = require('./routes/item');
const modifierRoutes = require('./routes/modifiers');
const fullMenuRoutes = require('./routes/fullmenu');
const itemsAndModifers = require('./routes/itemsAndModifiers')


//Middleware
var app = express();
app.use(bodyParser.json());

// endpoint routes
app.use('/menu', menuRoutes);
app.use('/item', itemRoutes);
app.use('/modifier', modifierRoutes);
app.use('/fullmenu', fullMenuRoutes);
app.use('/itemsandmodifiers', itemsAndModifers);

// server running
app.listen('5001', () => {
    console.log('server started on port 5001')
});
