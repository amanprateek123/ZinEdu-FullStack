const express = require('express')
const freeTrial = require('../models/freeTrial')
const auth = require('../middleware/auth')

const route = new express.Router()

route.post('/free-trial',auth,async (req,res)=>{
    const instance = new freeTrial({...req.body,userId:req.user._id})
    console.log(req.body)
    try{
     if(req.user){
        await instance.save()
        res.json({data:req.body,message:"Details sent successfully!"})
     }
     else{
         req.json({message:'Please Login'})
     }
    }       
    catch(e){
        console.log(e)
        res.json({message:'Please login',status:'401'})
    }

})

module.exports = route