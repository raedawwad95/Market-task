var express = require('express');
var bodyParser = require('body-parser');

var Employees = require('./resources/Employees/EmployeeRouter');
var Equipment = require('./resources/Equipments/EquipmentRouter');
var Project = require('./resources/Projects/ProjectRouter');

var db = require ('./db');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/employee',Employees);
app.use('/equipment',Equipment);
app.use('/project',Project);
app.get('/', (req, res) => res.send('Hello World!'))

module.exports= app;