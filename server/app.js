require('dotenv').config();


var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')

var sequelize = require('./db');

sequelize.sync();

app.listen(3001, function() {
    console.log('App is listening on 3001')
}); 

app.use('/test', test)

app.use('/api/test', (req, res) => {
    res.send('This is data from the endpoint.')
})