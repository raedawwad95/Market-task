var Employee =require('./Employees');

exports.add=function(req,res){
  var Empl=new Employee({
	name:req.body.name,
	nationality:req.body.nationality,
	jobTitale:req.body.jobTitale,
  });
empl.save(function(err,data){
  if(err){
	return err
	}
	res.json(data);
	})
}