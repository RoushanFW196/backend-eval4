
const express=require('express');
const router=express.Router();
const User=require("../models/user.model.js")




const register=async(req, res)=>{
    
    const register_user=await User.create(
        // name: req.body.name, 
        // email: req.body.email,
        // password:req.body.password,
        // profile_photo_url: req.body.url,
        // roles: req.body.roles
     
    );
    res.send({register_user: register_user});





}


const login=(req, res)=>{
    res.send("login")
}








module.exports={register,login};