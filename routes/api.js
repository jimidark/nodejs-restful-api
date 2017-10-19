// Dependencies
var express = require('express')
var router = express.Router()

// Product
var Product = require('../models/product')
Product.methods(['get', 'post', 'put', 'delete'])
Product.register(router, '/products')

// Return router
module.exports = router