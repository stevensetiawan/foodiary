const express = require('express');
const route = express.Router();
const RestaurantController = require('../controllers/restaurantController')

const redirectRestaurant = (req, res, next) => {
    if(!req.session.user){
        res.redirect('/restaurants')
    }else{
        if(req.session.user.role !== 'admin'){
            res.redirect('/restaurants')
        }else{
            next()
        }
    }
}

route.get('/', RestaurantController.show)
route.get('/add', redirectRestaurant, RestaurantController.addForm)
route.post('/add', RestaurantController.add)
route.get('/edit/:id', redirectRestaurant, RestaurantController.editForm)
route.post('/edit/:id', RestaurantController.edit)
route.get('/delete/:id', RestaurantController.delete)

module.exports = route;