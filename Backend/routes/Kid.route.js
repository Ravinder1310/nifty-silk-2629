const express = require("express");
const {KidsModel} = require("../models/Kid.model");

const kidRoute = express.Router();

kidRoute.get("/",async(req,res)=>{
    const userID = req.body.userID;
    try {
        const allPost = await KidsModel.find({userID})
        res.send(allPost);
    } catch (err) {
        res.send({"msg":"error in fetching","error":err})
    }
})

kidRoute.get("/:id",async(req,res)=>{
    const ID = req.params.id
    
      try {
        const findUser = await KidsModel.find({_id:ID});
         res.send(findUser)
         console.log(findUser)
        
      } catch (err) {
            res.send({"msg":"Item not found","error":err})
      }
})

kidRoute.post("/create",async(req,res)=>{
    const post = req.body;
    try {
       let newPost = new KidsModel(post);
       await newPost.save();
       res.send({"msg":"post successfully"})   
    } catch (err) {
        res.send({"msg":"error in post","error":err})
    } 
})

kidRoute.patch("/update/:id",async(req,res)=>{
      const ID = req.params.id
      const payload = req.body;
      const userID = payload.userID;
      try {
        const findUser = await KidsModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await KidsModel.findByIdAndUpdate({_id:ID},payload);
            res.send({"msg":"updated successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in updating","error":err})
      }
})

kidRoute.delete("/delete/:id",async(req,res)=>{
      const ID = req.params.id
      const userID = req.body.userID;
      try {
        const findUser = await KidsModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await KidsModel.findByIdAndDelete(ID);
            res.send({"msg":"Delete successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in delete","error":err})
      }
})



module.exports={
    kidRoute
}