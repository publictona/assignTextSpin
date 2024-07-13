const express = require('express');
const app = express();
require('dotenv').config()

app.get('/' , (req, res)=>{
    res.send("hello Sushma")

})


app.get('/twitter' ,(req , res) =>{
    res.send("hiiiiiiiiiiiii")
})

app.listen(process.env.PORT , () =>{
    console.log(`My Backend App running  on ${process.env.PORT}`)
})

console.log("Sushma Landge")