const { Restaurant } = require('../models')

class RestaurantController {
    static show(req, res) {
        let user = req.session.user;
        Restaurant.findAll()
            .then(data => {
                data.sort((a,b) => {
                    return a.id-b.id
                })
                res.render('restaurant', { data, user })
            }).catch(err => {
                res.send(err)
            })
    }

    static addForm(req, res) {
        res.render('addFormRestaurant')
    }

    static add(req, res) {
        let obj = {
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone
        }
        Restaurant.create(obj)
            .then(data => {
                res.redirect('/restaurants')
            }).catch(err => {
                res.json(err)
            })
    }
    static editForm(req, res) {
        let id = {
            where: {
                id: req.params.id
            }
        }
        Restaurant.findOne(id)
            .then(data => {
                res.render('editFormRestaurant', { data })
            }).catch(err => {
                res.json(err)
            })
    }

    static edit(req, res) {
        let obj = {
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone
        }
        let id = {
            where: {
                id: req.params.id
            }
        }
        Restaurant.update(obj, id)
            .then(data => {
                res.redirect('/restaurants')
            }).catch(err => {
                res.send(err)
            })
    }
    static delete(req, res) {
        let id = {
            where:{
                id:req.params.id
            }
        }        
        Restaurant.destroy(id)
            .then(data => {
                res.redirect('/restaurants')
            }).catch(err => {
                res.send(err)
            })
    }
}

module.exports = RestaurantController 