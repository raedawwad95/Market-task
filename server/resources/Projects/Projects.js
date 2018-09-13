var mongoose =require('mongoose');
var db=require('../../db');

//Project schema 

var ProjectSchema = mongoose.Schema({
	name :{
		type: String,
		required:true,
		unique:true,
	},
	employees :[{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}],
	equipments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Equipment'}],
	from :{
		type :Date,
		required true,
	},
	to :{
		type :Date,
		required true,
	}
})


var Project =mongoose.model('Project',ProjectSchema);

module.exports=Project;