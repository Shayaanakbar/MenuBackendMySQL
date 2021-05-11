const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.listen('5000', () => {
    console.log('server started on port 5000')
});
