var mongoose =require('mongoose');
var db=require('../../db');

//Employee schema 

var EmployeeSchema = mongoose.Schema({
	name :{
		type: String,
		required:true,
		unique:true,
	},
	nationality :{
		type :String,
		required true,
	},
	jobTitle: {
		type :String,
		required true,
	}
})


var Employee =mongoose.model('Employee',EmployeeSchema);

module.exports=Employee;