const express = require("express");
const userRoute = express.Router();
const {UserModel} = require("../models/User.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

userRoute.get("/",(req,res)=>{
    res.send("register page")
})


userRoute.post("/register",async(req,res)=>{
    const {name,email,gender,city,password} = req.body;
    try {
        const findUser = await UserModel.find({email})
        if(findUser.length===0){
            bcrypt.hash(password,4,async(err,hashpass)=>{
                if(err){
                    res.send({"msg":err.message})
                }
                else{
                    let user = new UserModel({name,email,gender,city,password:hashpass})      
                    await user.save();
                    res.send({"msg":"successfully registered"})
                }
            })
        }
       else{
          res.send({"msg":"user already exist"})
       }
    } catch (err) {
        res.send({"msg":"error in registring","error":err})
    }
})

userRoute.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
        const findUser = await UserModel.find({email});
        if(findUser.length>0){ 
           const hashpass = bcrypt.compare(password,findUser[0].password);
           if(hashpass){
               const token = jwt.sign({userID:findUser[0]._id},"socialpracticetoken",{expiresIn:"1h"});
               res.send({"msg":"Login successfull","token":token})
           }else{
               res.send({"msg":"wrong credentials"})
           }
        }else{
            res.send({"msg":"wrong credentials"})
        }
    } catch (err) {
        res.send({"msg":"error in login","error":err})
    }
})


module.exports ={
    userRoute
}