var Equipment =require('./Equipments');


exports.retrieve=function(req,res){
  Equipment.find({},function(err,data){
	 if(err){
	  res.send(err);
	 }
	 res.json(data);
  });
}

exports.add=function(req,res){
  var Equi = new Equipment({
	name:req.body.name,
	serialNumber:req.body.serialNumber,
	image:req.body.image,
  });
Equi.save(function(err,data){
	console.log(data)
  if(err){
	return err
	}
	res.json(data);
	})
}

exports.edit =function(req,res){
	Equipment.findOne({name:req.body.name}).exec(function (err,equipment){
    if(err){
	  console.error(err);
	}
	if(!equipment){//doctor not found
	  console.error("No equipment found");
	} else {
	  equipment.image = req.body.image;
	  equipment.serialNumber = req.body.serialNumber;
	  equipment.save();
	  res.json("Updated");
	}
})
}

exports.deleteOne=function(req,res){
  var name=req.params.equipmentName;
  Equipment.findOneAndRemove({name:name},function(err,deleted){

	if(err){
	  console.log("error");
	 }

	res.send(deleted)
  })
}
