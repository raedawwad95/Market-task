var express = require('express');
var bodyParser = require('body-parser');

var Employees = require('./resources/Employees/EmployeeRouter')

var db = require ('./db');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/employee',Employees);
app.get('/', (req, res) => res.send('Hello World!'))

module.exports= app;