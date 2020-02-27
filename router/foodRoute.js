const express = require('express');
const route = express.Router();
const FoodController = require('../controllers/foodController')



route.get('/', FoodController.show)
route.get('/add', FoodController.addForm)
route.post('/add', FoodController.add)
route.get('/edit/:id', FoodController.editForm)
route.post('/edit/:id', FoodController.edit)
route.get('/delete/:id', FoodController.delete)

module.exports = route;