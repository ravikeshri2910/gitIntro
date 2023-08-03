const express = require('express');
const route = express.Router();

const path = require('path');

const productsController = require('../controllers/product')

route.post('/sucess',productsController.succes)


module.exports = route