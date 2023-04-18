const mongoose=require('mongoose')
var Schema = mongoose.Schema;


var otpSchema =new Schema({
    email: String,
    code:String,
    expireIn:Number
})
module.exports=mongoose.model('otp',otpSchema)
