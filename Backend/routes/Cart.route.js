const express = require("express");
const {CartModel} = require("../models/Cart.model");

const cartRoute = express.Router();

cartRoute.get("/",async(req,res)=>{
    const userID = req.body.userID;
    try {
        const allPost = await CartModel.find({userID})
        res.send(allPost);
    } catch (err) {
        res.send({"msg":"error in fetching","error":err})
    }
})

cartRoute.get("/:id",async(req,res)=>{
    
    const ID = req.params.id
    
      try {
        const findUser = await CartModel.find({_id:ID});
         res.send(findUser)
         console.log(findUser)
        
      } catch (err) {
            res.send({"msg":"Item not found","error":err})
      }
})

cartRoute.post("/create",async(req,res)=>{
    const post = req.body;
    try {
       let newPost = new CartModel(post);
       await newPost.save();
       res.send({"msg":"post successfully"})   
    } catch (err) {
        res.send({"msg":"error in post","error":err})
    } 
})

cartRoute.patch("/update/:id",async(req,res)=>{
      const ID = req.params.id
      const payload = req.body;
      const userID = payload.userID;
      try {
        const findUser = await CartModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await CartModel.findByIdAndUpdate({_id:ID},payload);
            res.send({"msg":"updated successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in updating","error":err})
      }
})

cartRoute.delete("/delete/:id",async(req,res)=>{
      const ID = req.params.id
      const userID = req.body.userID;
      try {
        const findUser = await CartModel.find({_id:ID});
        if(findUser[0].userID===userID){
            await CartModel.findByIdAndDelete(ID);
            res.send({"msg":"delete successfully"}); 
        }else{
            res.send({"msg":"You are not authorized"})
        }
      } catch (err) {
            res.send({"msg":"error in delete","error":err})
      }
})



module.exports={
    cartRoute
}