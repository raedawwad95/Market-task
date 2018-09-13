var EmployeeRouter =require('express').Router();

var EmployeeController = require('./EmployeeController.js');

EmployeeRouter.route('/retrieve')
.get(function(req,res){
	EmployeeController.retrieve(req,res);
})

EmployeeRouter.route('/add')
.post(function(req,res){
	EmployeeController.add(req,res);
})

EmployeeRouter.route('/edit')
.put(function(req,res){
	EmployeeController.edit(req,res);
})

EmployeeRouter.route('/:nameEmployee')
.delete(function(req,res){
	EmployeeController.deleteOne(req,res);
})
module.exports=EmployeeRouter;