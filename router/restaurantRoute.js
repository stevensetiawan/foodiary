const express = require('express');
const route = express.Router();
const RestaurantController = require('../controllers/restaurantController')



route.get('/', RestaurantController.show)
route.get('/add', RestaurantController.addForm)
route.post('/add', RestaurantController.add)
route.get('/edit/:id', RestaurantController.editForm)
route.post('/edit/:id', RestaurantController.edit)
route.get('/delete/:id', RestaurantController.delete)

module.exports = route;