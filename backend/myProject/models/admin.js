var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var admin =new Schema(
    {
        name:String,
        email:String,
        phone:Number,
        password:String

    }
)

module.exports=mongoose.model('admin',admin)