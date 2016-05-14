//binding modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//declare task schma
var taskSchema = new Schema({
	status: {type:String, default: 'TO-DO'},
	contents: String,
	createDate:{type:Date,default:Date.now},
	author:{type:String, default:'Mucky'}
});

//exports model for task-controller
module.exports = mongoose.model('Task',taskSchema);