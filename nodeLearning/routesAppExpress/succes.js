const express = require('express');
const route = express.Router();

const path = require('path');

const productsController = require('../controllers/products')

route.post('/sucess',productsController.succes)


module.exports = route