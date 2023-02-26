const mongoose = require'mongoose'

const productSchema = mongoose.Schema{
    image: {type: String, required:true},
    brand: {type: String, required:true},
    title: {type: String, required:true},
    price: {type: Number, required:true},
   er_price: {type: Number, required:true},
    
    
}, {
    versionKey: false
}

const ProductModel = mongoose.model"user", productSchema

module.exports={
    ProductModel
}