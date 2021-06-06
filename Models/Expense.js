var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var expenseSchema = new Schema({
  name: String,
  email: String,
  password: String,
  dateofbirth: String,
  age: Number,
  Gender:String,
  qualification:String,
  CollegeName:String,
  graduationyear:String,
  skills:String,
  Companyname:String,
  experience:Number,
  designation:String,
  projects:Number,
  certifications:Number,
  freelance:String,
  mobilenumber:Number,
  address:String,
  githubid:String,
  linkedinid:String

});

module.exports = mongoose.model('UserDetails', expenseSchema);