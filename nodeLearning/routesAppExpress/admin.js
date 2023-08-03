
const path = require('path');
const express = require('express');

const productsController = require('../controllers/product')
const route = express.Router();


// /admin/app-product => GET
route.get("/app-product",productsController.appProduct)

// /admin/app-product => POST
route.post("/product",(req, res, next)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports = route;