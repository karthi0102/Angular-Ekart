const mongoose = require("mongoose")

const {Schema} = mongoose

const productSchema = new Schema({
    
    // price:Number,
    // name:String
    name:String,
    price:Number,
    rating:Number,
    image:String
})

module.exports=mongoose.model('Product',productSchema)