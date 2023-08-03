const express = require('express');
const route = express.Router();
const path = require('path');

//shop/ ==> get
route.get("/",(req, res, next)=>{
    console.log("2nd")
    res.sendFile(path.join(__dirname, '..', 'viewsAppExpress', 'shop.html'))
    
})


module.exports = route;