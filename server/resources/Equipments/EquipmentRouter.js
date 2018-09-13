var EquipmentRouter =require('express').Router();

var EquipmentController = require('./EquipmentController.js');

EquipmentRouter.route('/retrieve')
.get(function(req,res){
	EquipmentController.retrieve(req,res);
})

EquipmentRouter.route('/add')
.post(function(req,res){
	EquipmentController.add(req,res);
})

EquipmentRouter.route('/edit')
.put(function(req,res){
	EquipmentController.edit(req,res);
})

EquipmentRouter.route('/:equipmentName')
.delete(function(req,res){
	EquipmentController.deleteOne(req,res);
})
module.exports=EquipmentRouter;

