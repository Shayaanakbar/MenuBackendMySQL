const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');
const itemRoutes = require('./routes/item');


var app = express();
app.use(bodyParser.json());

app.use('/menu', menuRoutes);
app.use('/item', itemRoutes);

app.listen('5001', () => {
    console.log('server started on port 5001')
});
