const express = require("express");
const {MensModel} = require("../models/Mens.model");

const mensRoute = express.Router();

mensRoute.get("/",async(req,res)=>{
    const userID = req.body.userID;
    try {
        const allPost = await MensModel.find({userID})
        res.send(allPost);
    } catch (err) {
        res.send({"msg":"error in fetching","error":err})
    }
})


mensRoute.post("/create",async(req,res)=>{
    const post = req.body;
    try {
       let newPost = new MensModel(post);
       await newPost.save();
       res.send({"msg":"post successfully"})   
    } catch (err) {
        res.send({"msg":"error in post","error":err})
    } 
})

mensRoute.patch("/update/:id",async(req,res)=>{
      const ID = req.params.id
      const payload = req.body;
      const userID = payload.userID;
      try {
        const findUser = await MensModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await MensModel.findByIdAndUpdate({_id:ID},payload);
            res.send({"msg":"Updated Successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in updating","error":err})
      }
})


mensRoute.delete("/delete/:id",async(req,res)=>{
      const ID = req.params.id
      const userID = req.body.userID;
      try {
        const findUser = await MensModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await MensModel.findByIdAndDelete(ID);
            res.send({"msg":"Delete successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in delete","error":err})
      }
})



module.exports={
    mensRoute
}