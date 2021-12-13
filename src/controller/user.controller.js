
const express=require('express');
const router=express.Router();
const User=require("../models/user.model.js")


router.post("/",(req,res)=>{
    res.send("hello users")
});

router.post("/",(req,res)=>{
    res.send("login")
})



module.exports=router;