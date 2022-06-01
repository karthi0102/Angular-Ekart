const mongoose = require("mongoose")

const {Schema} = mongoose

const productSchema = new Schema({
    
    price:Number,
    name:String
})

module.exports=mongoose.model('Product',productSchema)