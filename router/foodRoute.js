const express = require('express');
const route = express.Router();
const FoodController = require('../controllers/foodController')



route.get('/', FoodController.show)

module.exports = route;