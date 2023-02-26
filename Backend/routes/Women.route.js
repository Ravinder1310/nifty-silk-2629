const express = require("express");
const {WoensModel} = require("../models/Women.model");

const womenRoute = express.Router();

womenRoute.get("/",async(req,res)=>{
    const userID = req.body.userID;
    try {
        const allPost = await WoensModel.find({userID})
        res.send(allPost);
    } catch (err) {
        res.send({"msg":"error in fetching","error":err})
    }
})

womenRoute.post("/create",async(req,res)=>{
    const post = req.body;
    try {
       let newPost = new WoensModel(post);
       await newPost.save();
       res.send({"msg":"post successfully"})   
    } catch (err) {
        res.send({"msg":"error in post","error":err})
    } 
})

womenRoute.patch("/update/:id",async(req,res)=>{
      const ID = req.params.id
      const payload = req.body;
      const userID = payload.userID;
      try {
        const findUser = await WoensModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await WoensModel.findByIdAndUpdate({_id:ID},payload);
            res.send({"msg":"updated successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in updating","error":err})
      }
})

womenRoute.delete("/delete/:id",async(req,res)=>{
      const ID = req.params.id
      const userID = req.body.userID;
      try {
        const findUser = await WoensModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await WoensModel.findByIdAndDelete(ID);
            res.send({"msg":"delete successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in delete","error":err})
      }
})



module.exports={
    womenRoute
}