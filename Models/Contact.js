var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var contactSchema = new Schema({
  name: String,
  email: String,
  sub: String,
  msg:String
  
});

module.exports = mongoose.model('ContactInfo', contactSchema);