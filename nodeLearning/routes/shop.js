const express = require('express');
const route = express.Router();

//shop/ ==> get
route.get("/",(req, res, next)=>{
    console.log("2nd")
    res.send("<h2>In the Epress Project</h2>");
})


module.exports = route;