var ProjectRouter = require('express').Router();

var ProjectController = require('./ProjectController.js');

ProjectRouter.route('/retrieve')
.get(function(req,res){
	ProjectController.retrieve(req,res);
})

ProjectRouter.route('/add')
.post(function(req,res){
	ProjectController.add(req,res);
})

ProjectRouter.route('/addEmpToProj')
.post(function(req,res){
	ProjectController.addEmployeeToProject(req,res);
})

ProjectRouter.route('/addEquToProj')
.post(function(req,res){
	ProjectController.addEquipmentToProject(req,res);
})

module.exports=ProjectRouter;


