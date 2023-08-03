const express = require('express');
const route = express.Router();

const path = require('path');

const productsController = require("../controllers/products")

route.get("/contactUs",productsController.contactus)

module.exports = route;
