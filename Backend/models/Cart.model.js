const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    images: {type: String, required:true},
    brand: {type: String, required:true},
    nameCls:{type: String, required:true},
    category: {type: String, required:true},
    quantity:{type: Number},
    discount: {type: Number, required:true},
    price: {type: Number, required:true},
    orginial_price: {type: Number, required:true},
    
    
}, {
    versionKey: false
})

const CartModel = mongoose.model("cart", cartSchema)

module.exports={
    CartModel
}