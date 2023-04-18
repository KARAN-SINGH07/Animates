var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var user = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
})

module.exports = mongoose.model('User', user); 
/* var mongoose=require('mongoose')
var schema = mongosse(schema )
var user=new Schema({
    name:String,
    email:String,
    phone:number,
    password:String
})
    */