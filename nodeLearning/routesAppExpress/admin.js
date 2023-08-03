
const path = require('path');
const express = require('express');

const route = express.Router();

// /admin/app-product => GET
route.get("/app-product",(req, res, next)=>{
    console.log("app-product")
    res.status(202).sendFile(path.join(__dirname, '..', 'viewsAppExpress', 'add-product.html'));
})

// /admin/app-product => POST
route.post("/product",(req, res, next)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports = route;