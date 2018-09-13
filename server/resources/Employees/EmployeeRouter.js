var EmployeeRouter =require('express').Router();

var EmployeeController = require('./EmployeeController.js');

EmployeeRouter.route('/')
.post(function(req,res){
	EmployeeController.add(req,res);
})
