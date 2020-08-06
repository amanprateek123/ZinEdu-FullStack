const express = require('express')
const interest = require('../models/interest')
const auth = require('../middleware/auth')

const route = new express.Router()

route.post('/interest',auth,async (req,res)=>{
    const interested = new interest({...req.body,user:req.user._id})
    console.log(req.body)
    try{
     if(req.user._id){
        await interested.save()
        res.json({data:req.body,message:"Details sent successfully!"})
     }
     else{
         res.json({message:"Please Login!"})
     }
    }       
    catch(e){
        console.log(e)
        res.json({message:'Please login',status:'401'})
    }

})
module.exports = route