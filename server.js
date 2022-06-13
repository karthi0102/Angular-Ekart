const express= require('express')
const bodyParser=require('body-parser')

// 

const cors = require('cors')
const methodOverride= require("method-override")
const app=express()
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api',require('./server/routes/api'))

app.get("*",(req,res)=>{
   
    res.send("Not Found")
})

app.listen(3000,()=>{
    console.log("Server is running")
})


