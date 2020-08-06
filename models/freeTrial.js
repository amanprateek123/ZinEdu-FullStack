const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    grade:{
            type:String,
            required:true,
            trim: true
        },
        stream:{
            type:String,
            required:true,
            trim: true
        },
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
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        }
})

const freeTrial = mongoose.model('freeTrial',userSchema) 

module.exports = freeTrial