const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
            trim: true
        },
        phone:{
            type:String,
            required:true,
            maxlength:10
        },
        location:{
            type:String,
            required:true,
            trim: true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        }
})

const freeTrial = mongoose.model('Interest',userSchema) 

module.exports = freeTrial