const { Food, FoodRestaurant, Restaurant } = require('../models')

class FoodController{
    static show(req, res){
        let user = req.session.user
        Food.findAll()
        .then( data => {
            
            res.render('foods', { data, user })
        }).catch(err => {
            res.send(err)
        })
    }
    static addForm(req, res) {
        res.render('addFormFood')
    }

    static add(req, res) {
        let obj = {
            name: req.body.name,
            calories: req.body.calories,
        }
        Food.create(obj)
            .then(data => {
                res.redirect('/foods')
            }).catch(err => {
                res.json(err)
            })
    }
    static editForm(req, res) {
        let id = {
            where:{
                id: req.params.id
            }
        }
        Food.findOne(id)
            .then(data => {
                res.render('editFormFood', { data })
            }).catch(err => {
                res.json(err)
            })
    }

    static edit(req, res) {
        let obj = {
            name: req.body.name,
            calories: req.body.calories
        }
        let id = Number(req.params.id)
        Food.update(obj,{where: {id}})
        .then(data => {
                req.redirect('/foods')
        }).catch(err => {
                res.send('ini dari error')
        })
    }
    static delete(req, res) {
        let id = {
            where:{
                id:req.params.id
            }
        }
        Food.destroy(id)
            .then(data => {
                res.redirect('/foods')
            }).catch(err => {
                res.send(err)
            })
    }
    static getRestaurant(req, res) {
        let id = Number(req.params.id);
        let dataFood = null
        let user = req.session.user
        Food.findOne({where: id})
        .then(food => {
            dataFood = food
            return FoodRestaurant.findAll({where: {FoodId: id}, include: Restaurant})
        })
        .then(data => {
            console.log(data)
            res.render('restaurantsOfFood', {dataFood, data, user})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = FoodController