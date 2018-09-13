var Project =require('./Projects');
var Employee = require('../Employees/Employees');
var Equipment = require('../Equipments/Equipments');

exports.retrieve=function(req,res){

  Project.find({})
  .populate({
  	path:'employees',
  	select:'name'
  })
  .populate({
  	path:'equipments',
  	select:'name'
  })
  .exec(function(err,data){
  	if(err){
  		console.log(err)
  	}else{
  		res.json(data)
  	}
  })

}

exports.add=function(req,res){
  var Proj = new Project({
	name:req.body.name,
	from:req.body.from,
	to:req.body.to,
  });

Proj.save(function(err,data){
	console.log(data)
  if(err){
	return err
	}
	res.json(data);
	})
}


exports.addEmployeeToProject=function(req,res){
  var query={name:req.body.Projectname};
  Employee.findOne({name: req.body.empName})
  .exec(function (err, employee) {
	if (err) {
		console.error(err);
	}
	if (!employee) {
		console.error("no employee with this name");
	} else {
	  Project.update(query,{$push:{'employees':employee._id}})
		.exec(function(err,data){
		  if(err){
			  console.error(err)
			}
			res.json(data)
		  })
	}
	})
}

exports.addEquipmentToProject=function(req,res){
  var query={name:req.body.Projectname};
  Equipment.findOne({name: req.body.equName})
  .exec(function (err, equipment) {
	if (err) {
		console.error(err);
	}
	if (!equipment) {
		console.error("no equipment with this name");
	} else {
	  Project.update(query,{$push:{'equipments':equipment._id}})
		.exec(function(err,data){
		  if(err){
			  console.error(err)
			}
			res.json(data)
		  })
	}
	})
}