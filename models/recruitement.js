const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
        post:{
            type:String,
            required:true,
            defaultValue: null
        },
        detail:{
            type:String,
            required:true,
            defaultValue: null            
        },
        location:{
            type:String,
            required:true,
            defaultValue: null              
        },
        date:{
            type:Date,
            required:true
        }
})

const recruitment  = mongoose.model('recruitment',userSchema) 

module.exports = recruitment