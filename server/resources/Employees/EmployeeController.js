var Employee =require('./Employees');

exports.add=function(req,res){
  var Empl = new Employee({
	name:req.body.name,
	nationality:req.body.nationality,
	jobTitle:req.body.jobTitle,
  });
Empl.save(function(err,data){
	console.log(data)
  if(err){
	return err
	}
	res.json(data);
	})
}

exports.edit =function(req,res){
	Employee.findOne({name:req.body.name}).exec(function (err,employee){
    if(err){
	  console.error(err);
	}
	if(!employee){//doctor not found
	  console.error("No employee found");
	} else {
	  employee.jobTitle = req.body.jobTitle;
	  employee.save();
	  res.json("Updated");
	}
})
}

exports.deleteOne=function(req,res){
  var name=req.params.employeeName;
  Employee.findOneAndRemove({userName:name},function(err,deleted){

	if(err){
	  console.log("error");
	 }

	res.send(deleted)
  })
}
