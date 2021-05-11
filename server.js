const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');


var app = express();
app.use(bodyParser.json());

app.use('/menu', menuRoutes);

app.listen('5001', () => {
    console.log('server started on port 5001')
});
