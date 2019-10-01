
const express = require('express')
const app=express();
const result = require('./result')
console.log(result(2,9))

console.log(app)
app.use((Request,Response)=>{
    Response.json({
        message:'rxpress working ',
        success:'true'
    })
    module.exports=app;
}) 