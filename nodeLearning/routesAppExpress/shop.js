const express = require('express');
const route = express.Router();
const path = require('path');

const productsController = require('../controllers/products')

//shop/ ==> get
route.get("/",productsController.getProduct)


module.exports = route;