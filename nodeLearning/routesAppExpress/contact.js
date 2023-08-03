const express = require('express');
const route = express.Router();

const path = require('path');

route.get("/contactUs",(req, res)=>{
    res.sendFile(path.join(__dirname,'..','viewsAppExpress','contact.html'))
})

module.exports = route;
