const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')

const route = new express.Router()

//signup
route.post('/users',async (req,res)=>{
    console.log('Signup')
    const user = new User(req.body)
    console.log(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({user,token,message:"Successfully Registered!"})
    }
    catch(e){
       res.status(400).send({message:"Account is already registered. Please Login!"})
    }
})

//login
route.post('/users/login',async (req,res)=>{
    console.log('Login')
    try{
       const user = await User.findByCredentials(req.body.email,req.body.password)
       const token = await user.generateAuthToken()
       res.status(200).json({user,token})
    }
    catch(e){
        res.status(404).json({message:e.message})
    }
})

//logout
// route.post('/users/logout',auth,async (req,res)=>{
//     try{
//         req.user.tokens = req.user.tokens.filter(itm=>{
//             return itm.token != req.token
//         })
//         await req.user.save()
//         res.send("Logout Successeful")
//     }
//     catch(e){
//         res.status(400).send(e)
//     }
// })

//profile
route.get('/profile',auth,async (req,res)=>{
    res.send(req.user)
})


module.exports = route