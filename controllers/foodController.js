const { Food } = require('../models')

class FoodController {
    static show(req, res) {
        Food.findAll()
            .then(data => {
                res.render('foods', { data })
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
        console.log(id)
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
}

module.exports = FoodController