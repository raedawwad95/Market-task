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