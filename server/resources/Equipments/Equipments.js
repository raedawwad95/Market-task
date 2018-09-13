var mongoose =require('mongoose');
var db=require('../../db');

//Equipment schema 

var EquipmentSchema = mongoose.Schema({
	name :{
		type: String,
		required:true,
		unique:true,
	},
	serialNumber :{
		type :Number,
		required :true,
	},
	image: {
		type :String,
		required :true,
	}
})


var Equipment =mongoose.model('Equipment',EquipmentSchema);

module.exports=Equipment;