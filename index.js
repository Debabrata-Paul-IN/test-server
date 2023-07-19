const express = require('express');
const app = express();
require('dotenv').config()

const port = process.env.PORT

app.get("/",(req,res)=>{
    res.send("Hello From Paul")
})


app.listen(port,()=>{
    console.log(`Server is listening at : ${port}`)
})