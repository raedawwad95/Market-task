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
exports.edit =function(req,res){
	Project.findOne({name:req.body.name}).exec(function (err,project){
    if(err){
	  console.error(err);
	}
	if(!project){//doctor not found
	  console.error("No project found");
	} else {
	  project.from = req.body.from;
	  project.to = req.body.to;
	  project.type = req.body.type;
	  project.save();
	  res.json("Updated");
	}
})
}
exports.add=function(req,res){
  var Proj = new Project({
	name:req.body.name,
	type:req.body.type,
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

exports.deleteOne=function(req,res){
  var name=req.params.projectName;
  Project.findOneAndRemove({name:name},function(err,deleted){

	if(err){
	  console.log("error");
	 }

	res.send(deleted)
  })
}