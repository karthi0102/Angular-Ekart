const mongoose = require("mongoose")

const {Schema} = mongoose

const productSchema = new Schema({
    
    price:Number,
    name:String,
    rating:Number,
    image:String
})

module.exports=mongoose.model('Product',productSchema)