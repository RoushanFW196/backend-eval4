
const express=require('express');
const {User,movie,theatre,screen,show,seat}=require('../models/user.model.js');

const router=express.Router();

router.post("/movies",async (req,res)=>{
    const post_movie=movie.create(req.body);
    res.json(post_movie)
})

module.exports=router;