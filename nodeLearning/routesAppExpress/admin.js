
const path = require('path');
const express = require('express');

const productsController = require('../controllers/products')
const route = express.Router();


// /admin/app-product => GET
route.get("/app-product",productsController.appProduct)

// /admin/app-product => POST
route.post("/product",productsController.postAppProduct)

module.exports = route;