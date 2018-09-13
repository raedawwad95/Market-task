var EmployeeRouter =require('express').Router();

var EmployeeController = require('./EmployeeController.js');

EmployeeRouter.route('/add')
.post(function(req,res){
	EmployeeController.add(req,res);
})

module.exports=EmployeeRouter;