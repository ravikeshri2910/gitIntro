const express = require('express');
const route = express.Router();

const path = require('path');

route.post('/sucess',(req, res )=>{
    res.sendFile(path.join(__dirname, '..', 'viewsAppExpress', 'succes.html'))
})


module.exports = route