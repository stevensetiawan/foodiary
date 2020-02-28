const express = require('express');
const route = express.Router();
const FoodController = require('../controllers/foodController')

const redirectFood = (req, res, next) => {
    if(!req.session.user){
        res.redirect('/foods')
    }else{
        if(req.session.user.role !== 'admin'){
            res.redirect('/foods')
        }else{
            next()
        }
    }
}

route.get('/', FoodController.show)
route.get('/add', redirectFood, FoodController.addForm)
route.post('/add', FoodController.add)
route.get('/edit/:id', redirectFood, FoodController.editForm)
route.post('/edit/:id', FoodController.edit)
route.get('/delete/:id', FoodController.delete)
route.get('/:id/restaurants/', FoodController.getRestaurant)

module.exports = route;