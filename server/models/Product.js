const mongoose = require("mongoose")

const {Schema} = mongoose

const productSchema = new Schema({
    
    // price:Number,
    // name:String
    name:String,
    price:Number,
<<<<<<< HEAD
    name:String,
=======
>>>>>>> 86d2aee63bf0871cc1ee13d4b1afc290d9a2c941
    rating:Number,
    image:String
})

module.exports=mongoose.model('Product',productSchema)