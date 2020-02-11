const express = require("express");

const app= express();

app.get("/", (req, res)=>{
  res.status(200).json({
    message:"app is running"
  })
})

const port = 4000;

app.listen(port, ()=>console.log("app is running from port ", port));